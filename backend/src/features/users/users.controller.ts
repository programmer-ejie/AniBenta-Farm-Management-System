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
}


}