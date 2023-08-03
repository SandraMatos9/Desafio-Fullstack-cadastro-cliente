import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { iUser } from "./UserContext";
import jwt_decode, { JwtPayload } from "jwt-decode";


export const AuthContext= createContext({} as AuthContextValues)


interface AuthProviderProps{
    children: ReactNode

}

interface AuthContextValues{
    signIn: (data: LoginData) => void
    user: Array<iUser>
    loading: boolean
    setUser: React.Dispatch<React.SetStateAction<[]>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    
    // AuthProvider: iUser
}



interface LoginResponse{
    token: string
}
export const AuthProvider = ({children}:AuthProviderProps) =>{
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const navigate= useNavigate()


    useEffect(() =>{
        const token = localStorage.getItem("your-todolist:token")
        if(!token){
            setLoading(false)

            return
        }
        api.defaults.headers.common.Authorization = `Bearer ${token}`
        setLoading(false)


    },[])

//usar biblioteca jwt, retiro o id do token 
    const signIn = async(data:LoginData) =>{
        try {
            const response = await api.post<LoginResponse>("/login",data) 
            console.log(response.data)
            const {token} = response.data
                    
            const decoded:JwtPayload = jwt_decode(token);
            const responseGet = await api.get('/users')
            console.log(decoded)
            setUser(responseGet.data.filter(u => u.id==decoded?.sub));

    
    
            localStorage.setItem("your-todolist:token",token)
            navigate("client")
            
        } catch (error) {
            console.log(error)
        }

      
      

    }
    return(
           
        <AuthContext.Provider value={{signIn, user, setUser, loading, setLoading}}>
            {children},

        </AuthContext.Provider>
    )
}


