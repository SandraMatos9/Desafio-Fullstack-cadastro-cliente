import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import { TContactResponse } from "../../interfaces/contacts.interfaces";
import { contactSchemaResponse } from "../../schemas/contacts.schemas";





const listContactService = async (userId: string): Promise<any> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    if (!user) {
        throw new AppError("user not found", 404)
    }

    const contacts = await contactRepository.find({
        where: {
            user: user
        }
    })


    return contactSchemaResponse.parse(contacts)
}

export { listContactService }