import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entities"
import { AppError } from "../../errors/AppError"

const deleteContactService = async (taskId: string):Promise<boolean>=>{
    const contactRepository = AppDataSource.getRepository(Contact)
    const contact = await contactRepository.findOneBy({id:taskId})
    console.log(contact)

    if(!contact){
        throw new AppError("contact not found",404)
    }

    await contactRepository.remove(contact)
    return true
}

export{deleteContactService}