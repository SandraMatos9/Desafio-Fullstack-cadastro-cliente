import { NextFunction,Request,Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entities";
import app from "../app";
import { AppError } from "../errors/AppError";

const ensureIsOwnerMiddleware = async(req: Request, res: Response, next: NextFunction) =>{
    
    const contactsRepository = AppDataSource.getRepository(Contact)
    const contactId = req.params.id
    const userId = res.locals.userId

    const contact = await contactsRepository.findOne({
        where:{
            id:contactId

        },
        relations:{
            user:true

        }
    })
    if(!contact){
         throw new AppError(" not authorization",403)
    }
    if(contact.user.id!= userId){
        throw new AppError(" not authorization",403)

    }
    return  next()
}
export {ensureIsOwnerMiddleware}