import {StyleSheet, TouchableOpacity} from 'react-native';
import AppText from "./AppText";
import {CategoryType} from "../screens/ListingEditScreen";


type  PickerItemPropsType = {
    onPress?: () => void
    item: CategoryType
}

export const PickerItem = ({ onPress, item}: PickerItemPropsType) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    text: {
        padding: 20
    }
});
