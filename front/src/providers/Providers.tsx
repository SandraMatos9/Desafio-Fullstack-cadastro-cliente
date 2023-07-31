import { ReactNode } from "react";
import { UserProvider } from "./UserContext";


interface iChildren {
  children: ReactNode;
}

export const Providers = ({ children }: iChildren) => (
  <UserProvider>
    {children}
  </UserProvider>
);

