import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";






const listUserService = async (userId: string): Promise<any> => {
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    if (!users) {
        throw new AppError("user not found", 404)
    }
    return users


}

export { listUserService }