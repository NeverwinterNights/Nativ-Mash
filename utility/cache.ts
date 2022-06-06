import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from "moment";

const expiryInMinutes = 10

export const store = async (key: any, value: any) => {
    try {
        const item = {
            value,
            timestamp: Date.now()
        }
        await AsyncStorage.setItem(key, JSON.stringify(item))
    } catch (error) {
        console.log(error)
    }
}

const isExpired = (item: any) => {
    const now = moment(Date.now())
    const storedTime = moment(item.timestamp)
    return now.diff(storedTime, "minutes") > expiryInMinutes
}


export const getData = async (key: any) => {
console.log("key", key);
    try {
        const value = await AsyncStorage.getItem(key)

        if (value) {
            const item = JSON.parse(value)
            if (!item) return null

            if (isExpired(item)) {
                await AsyncStorage.removeItem(key)
                return null
            }
            return item.value
        }
    } catch (error) {
        console.log(error)
    }
}