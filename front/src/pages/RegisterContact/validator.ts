import {z} from "zod"

export const schemaRegistering = z.object({
    name:z.string().nonempty("Nome é obrigatório"),
    telephone:z.string().nonempty("Telefone é obrigatório"),
    email:z.string().email("Deve ser um e-mail"),
    password:z.string().nonempty("Senha é obrigatória")
    
    
    })
export type LoginData = z.infer<typeof schemaRegistering>