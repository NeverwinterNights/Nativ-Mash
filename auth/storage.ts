import * as SecureStore from 'expo-secure-store';
import jwtDecode from "jwt-decode";

const key = "authToken"

export const setToken = async (authToken: any) => {
    try {
        await SecureStore.setItemAsync(key, authToken)
    } catch (error) {
        console.log("Error storing auth token", error);
    }

}

export const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key)
    } catch (error) {
        console.log("Error getting auth token", error);
    }
}

export const getUser = async () => {
    const token = await getToken()
    return (token) ? jwtDecode(token) : null
}

export const deleteToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key)
    } catch (error) {
        console.log("Error deleting auth token", error);
    }

}