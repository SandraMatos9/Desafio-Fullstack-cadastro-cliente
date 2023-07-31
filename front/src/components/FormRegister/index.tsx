import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { Container } from "./style"
import { Link } from "react-router-dom"
import { UserContext } from "../../providers/UserContext";
import { z } from "zod";


interface IRegisterClient{
    name: string;
    telephone: number;
    email:string;
    password: string;

}
const registerUserSchema = z.object({
    name : z.coerce.string().min(1,{message:'O nome é obrigatório!'}),
    telephone : z.coerce.number().min(1,{message:'O telefone é obrigatório!'}),
    email : z.string().email().min(1,{message:'O email é obrigatório!'}),
    password :  z.string()
})

type TRegisterUser = z.infer<typeof registerUserSchema>

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<IRegisterClient>({
        resolver: zodResolver(registerUserSchema)
    });

    const { userRegister } = useContext(UserContext);

    const submit: SubmitHandler<IRegisterClient> = (formData) => {
        userRegister(formData);
    }
    console.log(errors)


    return(
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
    )
}




