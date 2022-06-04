import {Pressable, StyleSheet, View} from 'react-native';
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";


type  NewListingButtonPropsType = {
    onPress: () => void
}

export const NewListingButton = ({onPress}: NewListingButtonPropsType) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name={"plus-circle"} color={colors.white} size={35}/>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        borderColor: colors.white,
        borderWidth: 10,
        borderRadius: 70 / 2,
        height: 70,
        width: 70,
        bottom: 15
    }
});
