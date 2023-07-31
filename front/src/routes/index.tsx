import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
// import { Client } from "../pages/Client"
import { ProtectedRoutes } from "./ProtectedRoutes"
import { RegisterClient } from "../pages/RegisterClient"
import { RegisterContact } from "../pages/RegisterContact"
import { Client } from "../pages/Client"
import { Contacts } from "../pages/Contacts"

export const RoutesMain = () =>{
    return (
        

        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registerClient" element={<RegisterClient />} />
        <Route path="/registerContact" element={<RegisterContact />} />
        <Route path="/client" element={<Client />} />
        <Route path="/contacts" element={<Contacts />} />





        <Route element={<ProtectedRoutes />}>
            {/* <Route path="/dashboard" element={<Client />} /> */}
        </Route>
    </Routes>
    )

}