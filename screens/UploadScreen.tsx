import {Modal, StyleSheet, View} from 'react-native';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';


type  UploadScreenPropsType = {
    progress: number
    visible: boolean
}

export const UploadScreen = ({progress = 0, visible = false}: UploadScreenPropsType) => {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {/*<Progress.Bar/>*/}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    }
});
