import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";
import { Contact } from "../pages/RegisterContact";
import { iContact } from "./UserContext";





export interface IContact {
    id: string,
    name: string,
    telephone: number,
    email?:string,
    registrationDate: Date
}
interface ContactProviderProps{
    children: ReactNode

}

export const ContactContext = createContext<ContactProviderValues>(
    {} as ContactProviderValues
)

interface ContactProviderValues{
    usecontact: Array<iContact>
    loading: boolean
    contacts:IContact[]
    setContacts: React.Dispatch<React.SetStateAction<IContact[]>>
    setUser: React.Dispatch<React.SetStateAction<[]>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    refresh:() => Promise<void>
    
    // AuthProvider: iUser
}
export const ContactsProvider = ({ children }: ContactProviderProps) => {

    const [contacts, setContacts] = useState<IContact[]>([] as Contact[]);
  

    const refresh= async( )=>{
        try{
            const response= await api.get<Contact[]>("contacts");
            setContacts(response.data);

         } catch{
            alert('Erro ao buscar os contatos')
            console.log(console.error);
            
         }
        }
    //console.log(todoList);

    // const addContact = (formData: TTodoForm) => {
    //     const newTodo = { id: crypto.randomUUID(), ...formData};
    //     setTodoList((todoList) => [...todoList, newTodo]);
    // }

    // const deleteTodo = (todoId: string) => {
    //     if(confirm("Você deseja mesmo excluir está nota?")){
    //         setTodoList((todoList) => todoList.filter(todo => todo.id !== todoId));
    //     }
    // }

    // const editTodo = (formData: TEditTodoForm, todoId: string) => {
    //     setTodoList((todoList) => todoList.map(todo => {
    //         if(todoId === todo.id){
    //             //O que está na direita substitui o que está na esquerda
    //             return { ...todo, ...formData}
    //         } else {
    //             return todo
    //         }
    //     }))
    // } 
    
    return(
        <ContactContext.Provider value={{  contacts, setContacts, refresh }}>
            {children}
        </ContactContext.Provider>
    )
}


