import { Router } from "express";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { contactSchemaRequest, contactSchemaUpdate } from "../schemas/contacts.schemas";
import{ensureDataIsValid} from "../middlewares/ensureDataIsValid.middlewate"
import {createContactController, listContactController,updateContactController,deleteContactController, listContactsController} from "../controllers/contacts.controller";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";

const contactsRoutes = Router()
contactsRoutes.post("", ensureAuthMiddleware, ensureDataIsValid(contactSchemaRequest),createContactController)
contactsRoutes.get("", listContactsController)
contactsRoutes.get("/user", ensureAuthMiddleware, listContactController)
contactsRoutes.patch("/:id",ensureAuthMiddleware,ensureIsOwnerMiddleware, ensureDataIsValid(contactSchemaUpdate), updateContactController) 
contactsRoutes.delete("/:id",ensureAuthMiddleware,ensureIsOwnerMiddleware,deleteContactController) 
export{contactsRoutes}