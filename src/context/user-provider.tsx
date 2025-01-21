import { userProps } from "@/utils/interfaces";
import React, { createContext, useContext, useState } from "react";

interface UserContextProps {
  user: userProps | null;
  setUser: React.Dispatch<React.SetStateAction<userProps | null>>;
  authUser: boolean;
  setAuthUser: (auth: boolean) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("erro no provider de usuário");
  }
  return context;
}

export function UserProvider({children}: {children: React.ReactNode}) {
    const [ user, setUser ] = useState<userProps | null >(null)
    const [ authUser, setAuthUser ] = useState(false)

  return (

  )
}
