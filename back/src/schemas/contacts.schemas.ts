import {z} from "zod"

const contactSchema = z.object({
    id: z.string().uuid(),
    name:z.string(),
    email: z.string().email(),
    telephone:z.number(),
    registrationDate: z.date(),
})

const  contactSchemaRequest = contactSchema.omit({
    id: true,
    registrationDate:true
})

const contactSchemaUpdate = contactSchema.omit({
    id:true
}).partial()
const contactSchemaResponse = z.array(contactSchemaRequest)

export{ contactSchema,contactSchemaRequest, contactSchemaUpdate, contactSchemaResponse}