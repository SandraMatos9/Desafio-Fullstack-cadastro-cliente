import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"
import { Container } from "./style"
import { schemaRegistering } from "./validator"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

export interface Contact {
    id: string,
    name: string,
    telephone: number,
    email?:string,
    registrationDate: Date
}
export const RegisterContact =() =>{
    // const {loading} = useAuth()



    const {register,handleSubmit} = useForm({
        resolver: zodResolver(schemaRegistering)

    })
    const { signIn } = useAuth()
    return (
    <Container>

        <ul>
            {
                contacts.map((contact)=> <li key={contact.id}>{contact.name}

                </li>)
            }
        </ul>
        
       <main>
            <h2 className='title'>ADICIONANDO CONTATO</h2>

        
            <section className="sectionText">
                <form onSubmit={handleSubmit(signIn)}>
                    <div>
                        <label htmlFor="name"{...register("name")}>Nome completo </label>
                        <input type="name" id="name" placeholder="Digite seu nome aqui"/>
                    </div>
                    <div>
                        <label htmlFor="telephone"{...register("telephone")}>Telefone </label>
                        <input type="telephone" id="telephone" placeholder="Digite seu telefone aqui"/>
                    </div>
                   <div>
                        <label htmlFor="email"{...register("email")}>Email</label>
                        <input type="email" id="email"  placeholder="Digite seu email aqui"/>
                   </div>
                 
               
                   
                    
                   
                    <Link to="/client">  <button type="submit" className="btnRegister">Adicionar</button></Link>

                

                </form>
            </section>
       </main>


    </Container>
    )
}