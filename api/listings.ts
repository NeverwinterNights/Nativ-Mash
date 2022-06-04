import client from "./client";
import {ImagesData} from "../screens/ListingsScreen";

export type  LocationType = {
    latitude: number,
    longitude: number
}

type ListingDataType = {
    title: string
    price: string
    category: { value: string }
    images: []
    location: any
    description: string
}

const endpoint = "/listings"

const getListings = () => client.get(endpoint)

const addListings = (listing: ListingDataType, onUploadProgress: Function) => {
    const data = new FormData()
    data.append("title", listing.title)
    data.append("price", listing.price)
    data.append("categoryId", listing.category.value)
    data.append("description", listing.description)
    listing.images.forEach((image, index) =>
        data.append("images", {
            // @ts-ignore
            name: "image" + index,
            type: "image/jpeg",
            uri: image
        }))
    if (listing.location)
        data.append("location", JSON.stringify(listing.location))
    return client.post(endpoint, data, {
        onUploadProgress: (progress)=>onUploadProgress(progress.loaded/progress.total)
    })
}

export default {
    getListings,
    addListings,
}