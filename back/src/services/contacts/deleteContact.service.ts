import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entities"
import { AppError } from "../../errors/AppError"

const deleteContactService = async (taskId: string):Promise<void>=>{
    const contactRepository = AppDataSource.getRepository(Contact)
    const contact = await contactRepository.findOneBy({id:taskId})

    if(!contact){
        throw new AppError("contact not found",404)
    }

    await contactRepository.remove(contact)
}

export{deleteContactService}