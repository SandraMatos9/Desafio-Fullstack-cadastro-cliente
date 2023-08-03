// import { RegisterForm } from "../../components/FormRegister"


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, schemaRegistering } from "./validator";
import { Container } from "./style";

export const RegisterClient= () => {
    const { register, handleSubmit } = useForm<LoginData>({
        resolver: zodResolver(schemaRegistering)
    })
    
    return(
        <main>
           <Container>
        
        <main>
             <h2 className='title'>CADASTRO CLIENTE</h2>
 
         
             <section className="sectionText">
                 
             <form onSubmit={handleSubmit(submit)}>
                     <div>
                         <label htmlFor="name"{...register("name")}>Nome completo </label>
                         <input type="text" id="name" placeholder="Digite seu nome aqui" {...register("name")}/> <p>{errors.name?.message}</p>
                     </div>
                     <div>
                         <label htmlFor="telephone"{...register("telephone")}>Telefone </label>
                         <input type="telephone" id="telephone" placeholder="Digite seu telefone aqui"  {...register("telephone")}/>
                         <p>{errors.telephone?.message}</p>
                     </div>
                    <div>
                         <label htmlFor="email"{...register("email")}>Email</label>
                         <input type="email" id="email"  placeholder="Digite seu email aqui" {...register("email")}/>
                         <p>{errors.email?.message}</p>
                    </div>
                  
                
                     <div>
                         <label htmlFor="password"{...register("password")}>Senha</label>
                         <input type="password" id="password"  placeholder="Digite sua senha aqui"   {...register("password")}/>
                         <p>{errors.password?.message}</p>
                     </div>
                     
                     <Link to="/">  <button type="submit" className="btnRegister">Cadastrar</button></Link>
 
 
 
                 </form>
             </section>
        </main>
 
 
     </Container>
        </main>
    )
}