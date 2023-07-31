import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";



const listUsersService = async(): Promise<any> => {
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()
    return users

}

export { listUsersService }