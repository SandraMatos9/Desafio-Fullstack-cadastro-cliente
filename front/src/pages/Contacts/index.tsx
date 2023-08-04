
import { useContext, useEffect, useState } from 'react'
import seta from '../../assets/seta.png'
import { Contact } from '../RegisterContact'
import { Container } from './style'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import { ContactContext } from '../../providers/ContactContext'
import edit from '../../assets/edit.svg'
import deletes from '../../assets/delete.svg'
import addContact from '../../assets/addContact.svg'

// import { Modal } from '../../components/Modal'
import { ModalAddContact } from '../../components/ModalAddContact'
import { ModalDeleteContact } from '../../components/ModalDeleteContact'
import { ModalUpdateContacts } from '../../components/ModalUpdateContact'








export const Contacts =() =>{
    const { contacts, setContacts} = useContext(ContactContext)
    const [isOpenModalAdd, setIsOpenModalAdd] = useState(false)
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false)
    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)


    
    console.log(contacts)

    useEffect(() => {
      const apiContacts = async () => {

        try {
          const response = await api.get('contacts/user',{headers:{Authorization:`Bearer ${localStorage.getItem("your-todolist:token")}`}});
          const contactsData: Contact[] = response.data.contacts;
          console.log(contactsData)

          setContacts(contactsData);
        } catch (error) {
          console.error('Erro ao buscar contatos:', error);
        }
      };
    
      apiContacts();
    
    }, []);

    const toggleModalAdd = () => setIsOpenModalAdd(!isOpenModalAdd)
    const toggleModalUpdate = () => setIsOpenModalUpdate(!isOpenModalUpdate)

    const toggleModalDelete = () => setIsOpenModalDelete(!isOpenModalDelete)

          
    ModalAddContact

    return(
        <Container>
            <header>
                
                <Link to ="/client"><button type='submit'><img src={seta}/></button></Link>
                
            </header>
            <h1 className="title">Contatos</h1>

          
            <main>
                    <ul>
                    {
                        contacts?.map((contact)=> <li className= "liMap" key={contact.id}>
                          <span>{contact.name}</span><span>{contact.telephone}</span>
                          <span>{contact.email}</span><span>{contact.registrationDate.toString()} </span>
                          <div>

                          <button type="button" onClick={toggleModalUpdate}> <img src={edit}/></button>
                          <button type="button" onClick={toggleModalDelete}><img src={deletes}/></button>
                          <button type="button" onClick={toggleModalAdd}><img src={addContact}/></button>


                          {/* {
                            isOpenModalAdd && <ModalDeleteContact setContacts={setContacts} toggleModal={toggleModalAdd} children={''} />
                            
                          } */}
                          {/* {
                             isOpenModalUpdate && <ModalAddContact setContacts={setContacts} toggleModal={toggleModalAdd} children={''} />
                            
                          } */}

                          {
                             isOpenModalDelete && <ModalUpdateContacts setContacts={setContacts} toggleModal={toggleModalAdd} children={''} />

                          } 
                         
                          </div>

                          </li>)
                    }
                </ul>
                
       
             
            </main>
        </Container>

    )
}




