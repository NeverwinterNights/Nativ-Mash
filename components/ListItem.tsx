import React from "react";
import {Image, ImageSourcePropType, StyleSheet, TouchableHighlight, View} from "react-native";
import AppText from "./AppText";

import colors from "../config/colors";


type  ListItemPropsType = {
    title: string
    subTitle: string
    image: ImageSourcePropType
    onPress: () => void
}

function ListItem({title, subTitle, image, onPress}: ListItemPropsType) {
    return (
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={image}/>
                <View>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    subTitle: {
        color: colors.medium,
    },
    title: {
        fontWeight: "500",
    },
});

export default ListItem;