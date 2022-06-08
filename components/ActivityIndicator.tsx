import LottieView from 'lottie-react-native';
import {StyleSheet} from "react-native";
import {View} from "react-native";

type  ActivityIndicatorPropsType = {
    visible: boolean
}


export const ActivityIndicator = ({visible}: ActivityIndicatorPropsType) => {
    if (!visible) return null

    return (
        <View style={styles.load}>
            <LottieView autoPlay loop source={require("../assets/animation/loader.json")}/>
        </View>
    );
};

const styles = StyleSheet.create({
    load: {
        backgroundColor: "white",
        width:"100%",
        height:"100%",
        position: "absolute",
        zIndex:1,
        opacity: 0.8

    },
});