import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import { TContactResponse } from "../../interfaces/contacts.interfaces";
import { contactSchemaResponse } from "../../schemas/contacts.schemas";





const listContactsService = async (): Promise<any> => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const contacts = await contactRepository.find()
      


    return contacts
}

export { listContactsService }