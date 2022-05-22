import {SafeAreaView, StyleSheet, View} from 'react-native';
import Constants from "expo-constants";
import React from "react";


export const Screen = ({children}: any) => {
    return (
        <SafeAreaView style={styles.screen}>
            <View>{children}</View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        // paddingTop: Platform.OS==="android" ? StatusBar.currentHeight : 0
        paddingTop: Constants.statusBarHeight
    }
});
