import {StyleSheet, TouchableOpacity} from 'react-native';
import AppText from "./AppText";


type  PickerItemPropsType = {
    label?: string
    onPress?: () => void
}

export const PickerItem = ({label, onPress}: PickerItemPropsType) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{label}</AppText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    text: {
        padding: 20
    }
});
