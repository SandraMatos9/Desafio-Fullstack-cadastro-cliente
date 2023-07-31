import { Router } from "express"
import { createTokenController } from "../controllers/login.controller"

const sessionRoutes = Router()
sessionRoutes.post("", createTokenController)
export{sessionRoutes}