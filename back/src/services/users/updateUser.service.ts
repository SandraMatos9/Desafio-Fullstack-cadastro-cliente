import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import { TUserResponse, TUserUpdate } from "../../interfaces/users.interfaces";
import { userSchema } from "../../schemas/users.schema";



const updateUserService = async (data:TUserUpdate, userId:string): Promise<TUserResponse> =>{

    const userRepository = AppDataSource.getRepository(User)
    const oldUser = await userRepository.findOneBy({id:userId})
    

  if(!oldUser){
    throw new AppError('user not found',404)

  }

  const newUserData = userRepository.create({
    ...oldUser,
    ...data
  })

  await userRepository.save(newUserData)

  return userSchema.parse(newUserData)

}
export {updateUserService}