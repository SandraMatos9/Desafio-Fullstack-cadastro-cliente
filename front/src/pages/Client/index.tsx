

import { Container } from "./style";
// import logo from '../../assets/agenda.png'
import email from '../../assets/email.svg'
import telephone from '../../assets/telephone.svg'
import calendar from '../../assets/calendar.svg'
import users1 from '../../assets/users1.svg'
import addContact from '../../assets/addContact.svg'
import { Link } from "react-router-dom";
import logout from '../../assets/logout.svg'
import {  iUser } from "../../providers/UserContext";
import { useContext } from "react";
import { AuthContext,  } from "../../providers/AuthProvider";


interface IClientProps{
    contact:iUser[];


}


export const Client =({users}:IClientProps) =>{
  const { user} = useContext(AuthContext)
  console.log(user)




    return(
        <Container>
                 <header>
                
                <Link to ="/"><button type='submit'><img src={logout}/></button></Link>
                
            </header>
            <main>
          
                <div className="divMain">
                       
            {
                user.map((user, id)=>
                <div className='divMap' key={id}><h1 className="title"> {user.name} </h1>
                <div className="divOrgDados">
                <div className="divDados"><img src={email} alt="email" />  {user.email} </div>  <div className="divDados"><img src={telephone} alt="telephone" /> {user.telephone} </div> <div className="divDados"><img src={calendar} alt="calendar" />  <div>{user.registrationDate.toString()}</div></div>
                </div>
                </div>)

            }
                    
                    
                        <Link to ="/contacts"><p><img src={users1} alt="email" /></p></Link>
                        <Link to="/registerContact"> <button><img src={addContact} alt="email" /></button></Link>

                </div>
         
            
   
            
            </main>
        </Container>

    )
 
        
     
  

}

