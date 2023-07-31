import { ReactNode, createContext, useEffect } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext= createContext({} as AuthContextValues)

interface AuthProviderProps{
    children: ReactNode

}

interface AuthContextValues{
    signIn: (data: LoginData) => void
}

interface LoginResponse{
    token: string
}
export const AuthProvider = ({children}:AuthProviderProps) =>{
    const navigate= useNavigate()

    useEffect(() =>{
        const token = localStorage.getItem("your-todolist:token")
        if(!token){
            return
        }
        api.defaults.headers.common.Authorization = `Bearer ${token}`


    },[])


    const signIn = async(data:LoginData) =>{
        try {
            const response = await api.post<LoginResponse>("/login",data) 
            const {token} = response.data
    
    
            localStorage.setItem("your-todolist:token",token)
            navigate("dashboard")
            
        } catch (error) {
            console.log(error)
        }
      

    }
    return(
        <AuthContext.Provider value={{signIn}}>
            {children}

        </AuthContext.Provider>
    )
}