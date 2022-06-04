import LottieView from 'lottie-react-native';

type  ActivityIndicatorPropsType = {
    visible: boolean
}


export const ActivityIndicator = ({visible}: ActivityIndicatorPropsType) => {
    if (!visible) return null

    return (
        <LottieView autoPlay loop source={require("../assets/animation/loader.json")}/>
    );
};

