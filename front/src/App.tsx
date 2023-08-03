import { AuthProvider } from "./providers/AuthProvider"
import { RoutesMain } from "./routes"
import { ToastContainer } from 'react-toastify';

import GlobalStyle from "./styles/GlobalStyle"
import { ContactsProvider } from "./providers/ContactContext";


export function App() {



  return (
    <>
     <GlobalStyle/>
     <AuthProvider>
      <ContactsProvider>
     <ToastContainer />
      <RoutesMain/>
      </ContactsProvider>

     </AuthProvider>
    </>
   
   
  )
}

export default App
