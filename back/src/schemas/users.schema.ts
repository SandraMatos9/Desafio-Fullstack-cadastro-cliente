import {z} from "zod"

const userSchema = z.object({
    id: z.string(),
    name:z.string(),
    email:z.string().email(),
    password:z.string(),
    telephone:z.number(),
    registrationDate: z.date(),

})

const userSchemaUpdateRequest = userSchema.partial()

const userSchemaRequest = userSchema.omit({id:true, registrationDate:true})
const userSchemaResponse = userSchema.omit({password:true})
const userSchemaUpdate = userSchema.omit({
    id:true,
    registrationDate:true
}).partial()
export {userSchema,userSchemaRequest,userSchemaResponse,userSchemaUpdateRequest,userSchemaUpdate}