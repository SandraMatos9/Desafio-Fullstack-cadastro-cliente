
import seta from '../../assets/seta.png'

import { Container } from './style'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// import { ListContacts } from '../../components/ListContacts'
import { iContact } from '../../providers/UserContext'


export const Contacts =() =>{

//   const [contacts, setContacts] = useState<iContact[]>([])


    return(
        <Container>
            <header>
                
                <Link to ="/client"><button type='submit'><img src={seta}/></button></Link>
                
            </header>
            <h1 className="title">Contatos</h1>

          
            <main>
                
            {/* <ListContacts contacts={contacts}/> */}
             
            </main>
        </Container>

    )
}