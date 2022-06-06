import {create} from "apisauce"
import {getData, store} from "../utility/cache";

const apiClient = create({
    baseURL: "http://192.168.100.229:8000/api",
    timeout: 2000
})

const get = apiClient.get;
// @ts-ignore
apiClient.get = async (url, params, axiosConfig) => {
        const response = await get(url, params, axiosConfig)
console.log("response.ok", response.ok);
    if (response.ok) {

        store(url, response.data)
        return response
    }
    const data = await getData(url)
    return data ? {ok: true, data} : response
}

export default apiClient


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