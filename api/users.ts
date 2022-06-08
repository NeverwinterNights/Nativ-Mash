import client from "./client";

export type  UserInfoType = {
    name: string
    email: string
    password: string
}


export const register = (userInfo: any) => client.post("/users", userInfo)