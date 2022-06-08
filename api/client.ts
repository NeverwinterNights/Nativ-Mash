import {create} from "apisauce"
import {getData, store} from "../utility/cache";
import {ListingType} from "../screens/ListingsScreen";
import {getToken} from "../auth/storage";

const apiClient = create({
    baseURL: "http://192.168.100.229:8000/api",
    timeout: 2000
})


apiClient.addAsyncRequestTransform(async (request)=> {
   const authToken = await getToken()
    if (!authToken) return
    request.headers["x-auth-token"] = authToken

})

const get = apiClient.get;
// @ts-ignore
apiClient.get = async (url, params, axiosConfig) => {
        const response = await get(url, params, axiosConfig)
    if (response.ok) {
        store(url, response.data as ListingType)
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