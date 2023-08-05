import { compare } from "bcryptjs"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entities"
import { AppError } from "../../errors/AppError"
import { TLoginRequest } from "../../interfaces/login.interface"
import jwt from "jsonwebtoken"
import "dotenv/config"


const createTokenService = async ({email, password}:TLoginRequest) =>{
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where:{
            email
        }

    })

    if(!user){
        throw new AppError("Invalid user!",404)

    }

    const passwordMatch = await compare(password, user.password)

    
    if(!passwordMatch){
        throw new AppError("Invalid user!",404)

    }

    const token = jwt.sign({
        userName:user.name},
         process.env.SECRET_KEY!,
         {expiresIn:"24h", subject: user.id}
         )

         return token
}
export {createTokenService}