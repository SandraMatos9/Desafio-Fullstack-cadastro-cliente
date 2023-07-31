import { createContext, useState } from "react";
import { TEditTodoForm } from "../../components/EditTodoForm/editTodoFormSchema";
import { TTodoForm } from "../../components/TodoForm/todoFormSchema";
import { ITodosContext, ITodosProviderProps, ITodo } from "./@types";

export const TodosContext = createContext({} as ITodosContext);

export const TodosProvider = ({ children }: ITodosProviderProps) => {

    const [todoList, setTodoList] = useState<ITodo[]>([]);
    const [editingTodo, setEditingTodo] = useState<ITodo | null>(null);
    //console.log(todoList);

    const addTodo = (formData: TTodoForm) => {
        const newTodo = { id: crypto.randomUUID(), ...formData};
        setTodoList((todoList) => [...todoList, newTodo]);
    }

    const deleteTodo = (todoId: string) => {
        if(confirm("Você deseja mesmo excluir está nota?")){
            setTodoList((todoList) => todoList.filter(todo => todo.id !== todoId));
        }
    }

    const editTodo = (formData: TEditTodoForm, todoId: string) => {
        setTodoList((todoList) => todoList.map(todo => {
            if(todoId === todo.id){
                //O que está na direita substitui o que está na esquerda
                return { ...todo, ...formData}
            } else {
                return todo
            }
        }))
    } 
    
    return(
        <TodosContext.Provider value={{ todoList, addTodo, deleteTodo, editTodo, editingTodo, setEditingTodo }}>
            {children}
        </TodosContext.Provider>
    )
}