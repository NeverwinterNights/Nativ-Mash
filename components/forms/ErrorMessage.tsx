import {StyleSheet, View} from 'react-native';
import AppText from "../AppText";

type  ErrorMessagePropsType = {
    error?: string
    visible?: boolean
}

export const ErrorMessage = ({error, visible}: ErrorMessagePropsType) => {
    if (!visible || !error) return null;
    return (
        <View>
            {error ? <AppText style={styles.error}>{error}</AppText> : null}

        </View>
    );
};

const styles = StyleSheet.create({
    error: {
        color: "red"
    }
});
