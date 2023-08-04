// import { Dispatch } from "react"
// import { useForm } from "react-hook-form"
import { api } from "../../services/api"
// import { zodResolver } from "@hookform/resolvers/zod"
import { Contact } from "../../pages/RegisterContact"
import { ContactsData } from "../../pages/Contacts/validator"
import { IContact } from "../../providers/ContactContext"
import { Modal } from "../Modal"
import { ContainerDelete } from "./style"
import { ModalDelete } from "../ModalDelete"


interface ModalDeleteContactsProps {
    toggleModal: () => void
    setContacts:React.Dispatch<React.SetStateAction<IContact[]>>
}

export const ModalDeleteContact = ({ setContacts, toggleModal }: ModalDeleteContactsProps) => {
    // const { register, handleSubmit } = useForm<ContactsData>({
    //     resolver: zodResolver(schema)
    // })

    const createContact = async (data: ContactsData) => {
        const response = await api.post<Contact>("/contact", data)

        setContacts(previusContact => [response.data, ...previusContact])
        toggleModal()
    }


    return (
        <ContainerDelete>
             <ModalDelete toggleModal={toggleModal}>
            <span>

                <p>Tem certeza que deseja excluir o contato?</p>
                
                <button className='btnDelete' type="submit">Excluir Contato</button>

            
                

            </span>
        </ModalDelete>
        </ContainerDelete>
       
    )
}