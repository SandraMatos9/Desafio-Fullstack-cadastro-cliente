import { Dispatch, SetStateAction } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { iUser } from "../providers/UserContext";

interface IRegisterProps {
    setUsers: Dispatch<SetStateAction<iUser[]>>
}

const registerUserSchema = z.object({
    name : z.coerce.string().min(1,{message:'O nome é obrigatório!'}),
    telephone : z.coerce.number().min(1,{message:'O telefone é obrigatório!'}),
    email : z.string().email().min(1,{message:'O email é obrigatório!'}),
    password :  z.string()

})

type TRegisterUser = z.infer<typeof registerUserSchema>;

export const Register = ({setUsers}: IRegisterProps) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<TRegisterUser>({
        resolver: zodResolver(registerUserSchema)
    });

    const registerUser: SubmitHandler<iUser> = (data) => {
        console.log(data);
        setUsers(prevUsers => [...prevUsers, data])
        reset()
    }
    
    return(
        <form onSubmit={handleSubmit(registerUser)}>
            <input 
                type="text"
                {...register('name')}
            />
            <p>{errors.name.message}</p>

            <input 
                type="number"
                {...register('telephone')} 
            />
            <p>{errors.telephone.message}</p>

            <input 
                type="number"
                {...register('email')} 
            />
            <p>{errors.email.message}</p>
            <input 
                type="password"
                {...register('password')} 
            />
            <p>{errors.password.message}</p>



            <button type="submit">Cadastrar</button>
        </form>
    )
}