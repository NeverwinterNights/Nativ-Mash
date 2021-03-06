import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles"

type  AppTextInputPropsType = {
    icon?: keyof typeof MaterialCommunityIcons.glyphMap
    width?: number
}

export const AppTextInput = ({icon, width, ...restProps}: AppTextInputPropsType & TextInputProps) => {
    return (
        <View style={[styles.container, {width: width}]}>
            {icon && <MaterialCommunityIcons name={icon} style={styles.icon} size={20} color={colors.medium}/>}
            <TextInput placeholderTextColor={defaultStyles.colors.medium} style={defaultStyles.text} {...restProps}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },
    icon: {
        marginRight: 10
    },

});
