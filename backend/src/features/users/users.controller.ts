import {Request, Response} from "express";
import {userService} from "./users.service";


export const userController = {
   async getAllUsers(_req:Request, res:Response){
        try{
            const userList = await userService.fetchAllUsers();
            res.status(200).json({users: userList, success: "Successfully fetched all data from the database!"});
        }catch(err){
            console.error("Error fetching users:", err);
            res.status(500).json({error: "Controller: Failed to fetch Users from the database!"})
        }
   },

  async createUser(req: Request, res: Response) {
    try {
        const rawData = req.body;
        
     
        const userData = {
            ...rawData,
            date_of_birth: new Date(rawData.date_of_birth),  
            user_type: rawData.user_type || 'farmer'
        };
        
        const createUser = await userService.insertUser(userData);
        res.status(200).json({ 
            user: createUser, 
            success: "Successfully created new user!" 
        });
    } catch (err) {
        console.error("Error creating a user: ", err);
        res.status(500).json({ error: "Controller: Failed to create user!" });
    }
},

    async updateUser(_req: Request, res:Response){
        try{
            const userId = parseInt(_req.params.id as string, 10);
            const rawData = _req.body;

            let dateOfBirth = undefined;
            if (rawData.date_of_birth) {
                const dob = new Date(rawData.date_of_birth);
                if (!isNaN(dob.getTime())) {
                    dateOfBirth = dob;
                }
            }

            const newData = {
                ...rawData,
                date_of_birth: dateOfBirth
            }

            const updateUser = await userService.updateUserInfo(userId,newData);
            res.status(200).json({updatedUser: updateUser, success: "Successfully updated user information!"})

        }catch(err){
            console.error("Error updating user informatiom:", err);
            res.status(500).json({error: "Controller: Failed to update user information!"});
        }

    },


    async deleteUser(_req:Request, res:Response){
        try{
            const userId = parseInt(_req.params.id as string, 10);
            const deleteUser = await userService.deleteUserInfo(userId);
            res.status(200).json({success: "Successfully deleted user information!", deleteUser: deleteUser});
        }catch(err){
            console.error("Controller: Error deleting user information:", err);
            res.status(500).json({error: "Controller: Failed to delete user information!"});
        }
    }


}