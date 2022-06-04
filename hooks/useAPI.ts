import {useState} from "react";
import {ListingType} from "../screens/ListingsScreen";


export const useApi = (apiFunc: Function) => {

    const [data, setData] = useState<ListingType[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);


    const request = async () => {
        setLoading(true)
        const response = await apiFunc();
        setLoading(false)

        if (!response.ok) return setError(true)

        setError(false)
        setData(response.data as ListingType[])
    }
    return {data, error, loading, request}
}