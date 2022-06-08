import {StyleSheet, View} from 'react-native';
import AppText from "./AppText";
import colors from "../config/colors";
import Constants from "expo-constants";
import {useNetInfo} from "@react-native-community/netinfo";

export const OfflineNotification = () => {
    const netInfo: any = useNetInfo()
    if (netInfo.type !== "unknown" && !netInfo.isInternetReachable) {
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>No Internet Connections</AppText>
            </View>
        )
    }
    return null
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        height: 50,
        width: "100%",
        top: Constants.statusBarHeight,
        position: "absolute",
        zIndex: 1
    },
    text: {
        color: colors.white
    }
});
