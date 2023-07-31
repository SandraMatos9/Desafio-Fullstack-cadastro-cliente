
// import email from '../../assets/email.svg'
// import telephone from '../../assets/telephone.svg'
// import calendar from '../../assets/calendar.svg'
// import profile from '../../assets/profile.svg'
// import { iUser } from "../../providers/UserContext";


// interface IClientsListProps{
//     client:iUser[];


// }

// export const ListClients = ({users}:IClientsListProps) =>{
//     return(
  
//         <ul>
//             <h1 className="title">Contatos</h1>
//             <li><img src={profile} alt="name" /></li>
//             <li><img src={email} alt="email" /></li>
//             <li><img src={telephone} alt="telephone" /></li>
//             <li><img src={calendar} alt="calendar" /></li>
//         </ul>
    
    

//     )

// }

import { iContact } from "../../providers/UserContext";
import email from '../../assets/email.svg'
import telephone from '../../assets/telephone.svg'
import calendar from '../../assets/calendar.svg'
import profile from '../../assets/profile.svg'
import { useState } from "react";

interface IUsersListProps{
    contact:iContact[];


}
export const ListClients = ({users}:IUsersListProps) =>{

    return(
  
        <ul>
            {
                users.map((user, id)=>
                <li key={id}> <img src={profile} alt="name" /> : {user.name} - <img src={email} alt="email" /> : {user.email} - <img src={telephone} alt="telephone" /> :{user.telephone} - <img src={calendar} alt="calendar" /> : {user.calendar}</li>)

            }
            
        </ul>
    
    

    )
