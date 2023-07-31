import { AxiosError } from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { iGradeForm } from "../components/Grades/schema";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { TRegisterForm } from "../components/FormRegister/registerFormSchema";


export interface ILoginFormValues {
  email: string;
  password: number;
}

interface iUserProvider {
  children: ReactNode;
}

export interface iRequestError {
  error: string;
  response: iRequestErrorResponse | undefined;
}

export interface iRequestErrorResponse {
  data: string | undefined;
}


export interface iUser {
    email: string;
    password: string;
    name: string;
    telephone:number;
  }
  export interface iContact {
    email: string;
    name: string;
    telephone:number;
    date: Date;
  }

  export interface iUserLogin {
    email: string;
    password: string;
   
  }

  const userRegister = async (formData: TRegisterForm) => {
    try {
        const { data } = await api.post("/users", formData);
        console.log(data);
        console.log("Cadastro efetuado com sucesso!")
    } catch (error) {
        console.log(error);
    }
}


interface iUserContext {
  user: iUser | null;
  setUser: (props: iUser) => void;
  submit: SubmitHandler<ILoginFormValues>;
  submitRegister: SubmitHandler<iRegisterFormValues>;
  loading: boolean;
  addContacts: (id: number | undefined, data: iUser) => Promise<void>;
  handleLogout:() => void;
  token:string;
  userRegister:SubmitHandler<iRegisterFormValues>;
  userLogin: (formData: ILoginFormValues) => Promise<void>

  
  setToken:React.Dispatch<React.SetStateAction<string>>
  


 
}



export interface iRegisterFormValues {
  name: string;
  telephone:number;
  email: string;
  password: string;
 
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserProvider) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();
  useEffect(() => {
    const autoLogin = () => {
      const userToken = localStorage.getItem("@TOKEN");
      const userID = localStorage.getItem("@ID");

      if (userToken) {
        const userAuthorization = async () => {
          try {
            setLoading(true);
            const response = await api.get<iUser>(`/users/${userID}`, {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            });
            setUser(response.data);
            navigate("/client");
          } catch (error) {
            const currentError = error as AxiosError;
            console.log("Erro ao tentar pegar usuário",currentError?.message );
          } finally {
            setLoading(false);
          }
        };
        userAuthorization();
      }
    };
    autoLogin();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    return navigate("/");
  };

  const submit: SubmitHandler<ILoginFormValues> = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("login", data);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@ID", response.data.user.id);
      setUser(response.data.user);
      toast.success("Login feito com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Erro no login!");
    } finally {
      setLoading(false);
    }
  };

  const addContacts = async (id: number | undefined, data: iUser ) => {
    const clientToken = localStorage.getItem("@TOKEN");

    try {
      setLoading(true);
       await api.patch<iUser>(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${clientToken}`,
        },
      });
      toast.success("Contato adicionado com sucesso!");
    } catch (error) {
      toast.error("Erro ao adicionar contato!");
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      const response = await api.post('/login', formData);
      setUser(response.data.user);
      localStorage.setItem('@TOKEN', response.data.accessToken);
      navigate('/shop');
    } catch (error) {
      console.log(error);
    }
  };


  const submitRegister: SubmitHandler<iRegisterFormValues> = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("register", data);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@ID", response.data.user.id);
      toast.success("Cadastro feito com sucesso!");
    } catch (error) {
      toast.error("Erro ao cadastrar");
    } finally {
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <UserContext.Provider
      value={{
        setUser,
        submitRegister,
        addContacts,
        handleLogout,
        userLogin,
        user,
        token,
        setToken,
        loading,
        userRegister,
        submit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}