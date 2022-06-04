import {create} from "apisauce"

 const apiClient = create({
    baseURL: "http://192.168.100.229:8000/api"
})

export  default apiClient


// import axios from "axios";
//
// export const instance = axios.create({
//     baseURL: 'http://192.168.100.229:8000/api'
// })
//
// export const api = {
//     getData() {
//         return instance.get(`/listings`)
//     },
//
// }