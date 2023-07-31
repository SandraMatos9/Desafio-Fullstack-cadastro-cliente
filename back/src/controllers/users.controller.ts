import{Response,Request} from "express";
import { createUserService } from "../services/users/createUser.service";
import {  listUsersService } from "../services/users/listUsersService.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { listUserService } from "../services/users/listUser.service";

const createUserController = async(req:Request, res:Response)=>{
    const newUser = await createUserService(req.body)
    return res.status(201).json(newUser)
}

//criar os demais controllers, colocar url para rota de contatos


const listUsersController = async (req: Request, res: Response) =>{
    const users = await listUsersService()
    return res.json(users)

    
}

const listUserController = async (req: Request, res: Response) =>{
    const userId = res.locals.userId
    const users = await listUserService(userId)
    return res.json(users)

    
}

const updateUserController = async (req: Request, res: Response) =>{
    const updateUser= await updateUserService(req.body, req.params.id)
    return res.json(updateUser)
    
}

const deleteUserController = async (req: Request, res: Response) =>{
    await deleteUserService(req.params.id)
    return res.status(204).send()
}
export{createUserController, listUserController,updateUserController,deleteUserController,listUsersController}