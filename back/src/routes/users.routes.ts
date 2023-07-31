import { Router } from "express";
import { createUserController, deleteUserController, listUserController, listUsersController, updateUserController } from "../controllers/users.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middlewate";
import { userSchemaRequest, userSchemaUpdate, userSchemaUpdateRequest } from "../schemas/users.schema";

const userRoutes=Router()
userRoutes.post("",ensureDataIsValid(userSchemaRequest),createUserController)
userRoutes.get("",listUsersController)
userRoutes.get("/:id",listUserController)
userRoutes.patch("/:id",ensureDataIsValid(userSchemaUpdate),updateUserController)
userRoutes.delete("/:id",deleteUserController)



export {userRoutes}