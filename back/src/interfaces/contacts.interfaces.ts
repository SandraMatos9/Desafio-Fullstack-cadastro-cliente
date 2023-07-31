import { z } from "zod"
import { contactSchema,contactSchemaRequest, contactSchemaUpdate, contactSchemaResponse} from "../schemas/contacts.schemas"
import { DeepPartial } from "typeorm"

type TContactRequest = z.infer<typeof contactSchemaRequest>
type TContact = z.infer<typeof contactSchema>
type TContactResponse = z.infer<typeof contactSchemaRequest>
type TContactsResponse = z.infer<typeof contactSchemaResponse>
type TContactUpdate = DeepPartial<TContactRequest>

export { TContact, TContactRequest, TContactResponse, TContactUpdate, TContactsResponse }