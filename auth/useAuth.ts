import {useContext} from "react";
import {AuthContext} from "./context";
import {UserType} from "../screens/LoginScreen";
import {deleteToken, setToken} from "./storage";
import jwtDecode from "jwt-decode";


export const useAuth = () => {
    const {user, setUser} = useContext(AuthContext)

    const logOut = () => {
        setUser({} as UserType)
        deleteToken()
    }

    const logIn = (authToken: string) => {
        const user: UserType = jwtDecode(authToken)
        setUser(user)
        setToken(authToken)
    }

    return {user, setUser, logIn, logOut}
}