import {useEffect, useState} from "react";
import * as Location from "expo-location";
import {LocationObject} from "expo-location";

export const useLocation = () => {
    const [location, setLocation] = useState({});
    const getLocation = async () => {
        try {
            const {granted} = await Location.requestForegroundPermissionsAsync()
            if (!granted) return
            // const {coords: {longitude, latitude}}= await Location.getLastKnownPositionAsync()
            // const {coords: {longitude, latitude}} = await Location.getLastKnownPositionAsync() as LocationObject
            // const res = await Location.getLastKnownPositionAsync({})
            // const {coords: {longitude, latitude}} = await Location.getCurrentPositionAsync() as LocationObject
            const {coords: {longitude, latitude}}: Location.LocationObject = await Location.getCurrentPositionAsync()
            setLocation({latitude, longitude})
            console.log("location", location);
        } catch (error) {
            console.log(error);
        }

        // const {granted} = await Location.requestBackgroundPermissionsAsync()

    }
    useEffect(() => {
        getLocation()
    }, [])
    return location
}