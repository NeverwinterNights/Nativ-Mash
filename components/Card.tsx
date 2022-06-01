import React from "react";
import {Image, ImageSourcePropType, Pressable, StyleSheet, View} from "react-native";

import AppText from "./AppText";
import defaultStyles from "../config/styles";


type  CardPropsType = {
    title: string
    subTitle: string
    image: ImageSourcePropType
    onPress: () => void
}


function Card({title, subTitle, image, onPress}: CardPropsType) {
    return (
        <Pressable onPress={onPress}>
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: defaultStyles.colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
    },
    subTitle: {
        color: defaultStyles.colors.secondary,
        fontWeight: "bold",
    },
    title: {
        marginBottom: 7,
    },
});

export default Card;
