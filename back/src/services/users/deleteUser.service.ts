import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entities"
import { User } from "../../entities/user.entities"
import { AppError } from "../../errors/AppError"

const deleteUserService = async (userId: string):Promise<void>=>{
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id:userId})

    if(!user){
        throw new AppError("user not found",404)
    }
    await userRepository.remove(user)

    return 

}

export{deleteUserService}