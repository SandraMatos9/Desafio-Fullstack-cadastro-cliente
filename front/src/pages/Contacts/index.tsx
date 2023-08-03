
import { useContext, useEffect } from 'react'
import seta from '../../assets/seta.png'
import { Contact } from '../RegisterContact'
import { Container } from './style'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import { ContactContext } from '../../providers/ContactContext'







export const Contacts =() =>{
    const { contacts, setContacts} = useContext(ContactContext)
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
                          <button><img src={seta}/></button>
                          <button><img src={seta}/></button>

                          </li>)
                    }
                </ul>
                
       
             
            </main>
        </Container>

    )
}




