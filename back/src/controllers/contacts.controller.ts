import {Response, Request} from "express";
import { createContactService } from "../services/contacts/createContact.service";
import { listContactService } from "../services/contacts/listContact.service";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";
import { listContactsService } from "../services/contacts/listContacts.service";

const createContactController = async (req: Request, res: Response) =>{
    const userId = res.locals.userId
    const newContact = await createContactService(req.body,userId)
    return res.status(201).json(newContact)
}

const listContactController = async (req: Request, res: Response) =>{
    const userId = res.locals.userId
    const contact = await listContactService(userId)
    return res.json(contact)

    
}
const listContactsController = async (req: Request, res: Response) =>{
    const contacts = await listContactsService()
    return res.json(contacts)

    
}

const updateContactController = async (req: Request, res: Response) =>{
    const updateContact= await updateContactService(req.body, req.params.id)
    
}

const deleteContactController = async (req: Request, res: Response) =>{
    console.log(req.params.id)
    await deleteContactService(req.params.id)
    return res.status(204).send()
    
}
export{createContactController, listContactController,updateContactController,deleteContactController,listContactsController}