import prisma from ".././../config/database";
import {UserResponseDTO} from "./users.types";

export const userService = {
    async fetchAllUsers(): Promise<UserResponseDTO[]>{
        try{
            const userData = await prisma.$queryRaw`SELECT * FROM "User"`;
            return userData as UserResponseDTO[];
  
        }catch(err){
           console.error("Error fetching users from the database!",err);
           throw new Error("Failed to fetch users from the database!");
        }
    }
}