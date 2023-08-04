// import { Dispatch } from "react"
import { useForm } from "react-hook-form"
import { api } from "../../services/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { Contact } from "../../pages/RegisterContact"
import { ContactsData, schema } from "../../pages/Contacts/validator"
import { IContact } from "../../providers/ContactContext"
import { Container } from "./style"
import { Modal } from "../Modal"


interface ModalAddContactsProps {
    toggleModal: () => void
    setContacts:React.Dispatch<React.SetStateAction<IContact[]>>
}

export const ModalAddContact = ({ setContacts, toggleModal }: ModalAddContactsProps) => {
    const { register, handleSubmit } = useForm<ContactsData>({
        resolver: zodResolver(schema)
    })

    const createContact = async (data: ContactsData) => {
        const response = await api.post<Contact>("/contact", data)

        setContacts(previusContact => [response.data, ...previusContact])
        toggleModal()
    }


    return (
        <Container>
             <Modal toggleModal={toggleModal}>
            <form className="formAdd" onSubmit={handleSubmit(createContact)}>
                <label htmlFor="text">Name</label>
                <input type="text" id="text" {...register("name")} />

                <label htmlFor="text">Telefone</label>
                <input type="text" id="description" {...register("telephone")} />
                
                <label htmlFor="text">Email</label>
                <input type="text" id="description" {...register("email")} />
                <div>
                <button type="submit">Adicionar Contato</button>

                </div>
                

            </form>
        </Modal>
        </Container>
       
    )
}