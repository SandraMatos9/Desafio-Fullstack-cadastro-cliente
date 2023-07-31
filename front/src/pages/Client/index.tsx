

import { Container } from "./style";
// import logo from '../../assets/agenda.png'
import email from '../../assets/email.svg'
import telephone from '../../assets/telephone.svg'
import calendar from '../../assets/calendar.svg'
import users from '../../assets/users.svg'
import addContact from '../../assets/addContact.svg'
import { Link } from "react-router-dom";
import logout from '../../assets/logout.svg'




export const Client =() =>{

    return(
        <Container>
                 <header>
                
                <Link to ="/"><button type='submit'><img src={logout}/></button></Link>
                
            </header>
            <main>
          
                <div>
                    <h1 className="title">Name</h1>
                        <p><img src={email} alt="email" /></p>
                        <p><img src={telephone} alt="email" /></p>
                        <p><img src={calendar} alt="email" /></p>
                        <Link to ="/contacts"><p><img src={users} alt="email" /></p></Link>
                        <Link to="/registerContact"> <button><img src={addContact} alt="email" /></button></Link>

                </div>
            
            </main>
        </Container>

    )
 
        
     
  

}

