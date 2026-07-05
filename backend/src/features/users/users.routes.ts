import {Router} from "express";
import {userController} from "./users.controller";


const router = Router();
//authentication routes
router.post("/register", userController.createUser)

//user management routes
router.get("/", userController.getAllUsers);
router.put("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);



export default router;