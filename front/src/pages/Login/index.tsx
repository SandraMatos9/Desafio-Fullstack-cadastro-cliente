import { LoginData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"
import logo from '../../assets/agenda.png'
import { Container } from "./style"
import {  Link } from 'react-router-dom'
import { useForm } from "react-hook-form"




export const Login =() =>{
  
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema)
})
const { signIn } = useAuth()
    

    return (
    <Container>
       <main>
      
        <section className="sectionImg">
            <img src= {logo} alt="logo" className="logo"/></section>

        <section className="sectionText">
        
            <div className="titleLogin">
                <h2 className='title'>Login</h2>
            </div>

            <form onSubmit={handleSubmit(signIn)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Digite seu email aqui" {...register("email")} />
                </div>
              <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" placeholder="Digite sua senha  aqui"{...register("password")} />
              </div>
               

                <button type="submit" >Entrar</button>
            </form>

         
            <span>Não tem uma conta?</span>
           
            <Link to="/registerClient"><button type="submit" className="btnCadastrar">Cadastre-se</button></Link>

        </section>

       </main>

    </Container>
    
    )

}

//     const {register,handleSubmit} = useForm<LoginData>({
//         resolver: zodResolver(schema)

//     })
//     const { signIn } = useAuth()

   {/* <form onSubmit={handleSubmit(submit)}>
                <div>
                <label htmlFor="email"{...register("email")}>Email</label>
                <input type="email" id="email"/>
                </div>
                <div>
                <label htmlFor="password"{...register("password")}>Senha</label>
                <input type="password" id="password"/>
                </div>
                
                
            <Link to="/client"><button type="submit">Entrar</button></Link>




            </form> */}