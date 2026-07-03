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
   }
}