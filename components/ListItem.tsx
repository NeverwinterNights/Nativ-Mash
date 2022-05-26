import React from "react";
import {Animated, Image, ImageSourcePropType, StyleSheet, TouchableHighlight, View} from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import defaultStyles from "../config/styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";


type  ListItemPropsType = {
    title: string
    subTitle?: string
    image?: ImageSourcePropType
    onPress?: () => void
    renderRightActions?: (
        progressAnimatedValue: Animated.AnimatedInterpolation,
        dragAnimatedValue: Animated.AnimatedInterpolation
    ) => React.ReactNode;
    IconComponent?: any
}

function ListItem({title, subTitle, image, onPress, IconComponent, renderRightActions}: ListItemPropsType) {
    return (<Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={defaultStyles.colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image}/>}
                    <View style={styles.detailsContainer}>
                        <AppText numberOfLines={1} style={styles.title}>{title}</AppText>
                        {subTitle && <AppText numberOfLines={2} style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons color={defaultStyles.colors.medium} name={"chevron-right"} size={25}/>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: defaultStyles.colors.white,
        alignItems: "center"
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
        flex: 1
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: defaultStyles.colors.medium,
    },
    title: {
        fontWeight: "500",
    },
});

export default ListItem;
