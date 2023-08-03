import {z} from "zod"

export const schema = z.object({
name:z.string(),
email:z.string().email("Deve ser um e-mail"),
telephone:z.number(),
registrationDate:z.date()



})



export type ContactsData = z.infer<typeof schema>