import { AuthProvider } from "./providers/AuthProvider"
import { RoutesMain } from "./routes"
import { ToastContainer } from 'react-toastify';

import GlobalStyle from "./styles/GlobalStyle"
import { iContact, iUser } from "./providers/UserContext";
import { useState } from "react";

export function App() {

  const [users, setUsers] = useState<iUser[]>([])
  const [contacts, setContacts] = useState<iContact[]>([])

  return (
    <>
     <GlobalStyle/>
     <AuthProvider>
     <ToastContainer />
      <RoutesMain/>

     </AuthProvider>
    </>
   
   
  )
}

export default App
