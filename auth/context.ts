import React from "react";
import {UserType} from "../screens/LoginScreen";


export type  ContextType = {
    user: UserType
    setUser: (user:UserType) => void

}

export const AuthContext =  React.createContext<ContextType>({} as ContextType)