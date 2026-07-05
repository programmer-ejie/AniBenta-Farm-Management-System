import prisma from ".././../config/database";
import {UserResponseDTO,CreateUserDTO,UpdateUserDTO} from "./users.types";
import bcrypt from "bcrypt";

export const userService = {
    async fetchAllUsers(): Promise<UserResponseDTO[]>{
        try{
            const userData = await prisma.$queryRaw`SELECT * FROM "user"`;
            return userData as UserResponseDTO[];
  
        }catch(err){
           console.error("Error fetching users from the database!",err);
           throw new Error("Failed to fetch users from the database!");
        }
    },

   async insertUser(data: CreateUserDTO): Promise<UserResponseDTO> {
    try {
        const checkIfExist = await prisma.user.findUnique({
            where: { email: data.email }
        });

        if (checkIfExist) {
            throw new Error("Service: Already have an existing account!");
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const newUser = await prisma.$queryRaw`
            INSERT INTO "user" (
                email, password, user_type, fname, mname, lname, 
                date_of_birth, created_at, updated_at
            ) VALUES (
                ${data.email}, 
                ${hashedPassword}, 
                ${data.user_type || 'farmer'}, 
                ${data.fname}, 
                ${data.mname || null}, 
                ${data.lname}, 
                ${new Date(data.date_of_birth)}, 
                NOW(), 
                NOW() 
            ) 
            RETURNING *
        `;

        const newUserArray = newUser as any[];
        if (newUserArray.length === 0) {
            throw new Error('Failed to insert user');
        }

        const { password, ...userWithoutPassword } = newUserArray[0];
        return userWithoutPassword as UserResponseDTO;

    } catch (err) {
        console.error("❌ Registration Error:", err);
        throw new Error("Service Error!");
    }
},

    async updateUserInfo(userId: number, data: Partial<UpdateUserDTO>): Promise<UserResponseDTO> {
        try{
            const existingUser = await prisma.$queryRaw<any[]>`SELECT * FROM "user" WHERE id = ${userId}`;
            if(existingUser.length === 0){
                throw new Error("Service: User not found!");
            }else{
                const updateUser = await prisma.$queryRaw`UPDATE "user" SET email = ${data.email}, fname = ${data.fname}, mname = ${data.mname},lname = ${data.lname}, date_of_birth = ${data.date_of_birth},address = ${data.address},profile_picture_url = ${data.profile_picture_url},updated_at = NOW() WHERE id = ${userId} RETURNING *`;

                return updateUser as UserResponseDTO;
            }
        }catch(err){
            console.error("Error updating user information in the database!",err);
            throw new Error("Service: Failed to update user information in the database!");
        }
    },

    async deleteUserInfo(userId: number): Promise<UserResponseDTO>{
        try{
            const existingUser = await prisma .$queryRaw<any[]>`SELECT * FROM "user" WHERE id = ${userId}`;

            if(existingUser.length === 0){
                throw new Error("Service: User not found!");
            }else{
                const deleteUser = await prisma.$queryRaw`DELETE FROM "user" WHERE id = ${userId} RETURNING *`;
                
                return deleteUser as UserResponseDTO;
            }
        }catch(err){
            console.error("Error deleting user information from the database!",err);
            throw new Error("Service: Failed to delete user information from the database!");
        }
    }

}