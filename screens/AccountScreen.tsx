import React from "react";
import {FlatList, StyleSheet, View} from "react-native";


import ListItem from "../components/ListItem";
import colors from "../config/colors";
import {Icon} from "../components/Icon";
import {Screen} from "../components/Screen";
import {Separator} from "../components/Separator";
import defaultStyles from "../config/styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {NavigationAccountNavigatorType} from "../types";

type menuItemType = {
    title: string
    icon: {
        name: keyof typeof MaterialCommunityIcons.glyphMap
        backgroundColor: string
    },
    targetScreen: "MessagesScreen"
}


const menuItems: menuItemType[] = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: defaultStyles.colors.primary,
        },
        targetScreen: "MessagesScreen"
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: defaultStyles.colors.secondary,
        },
        targetScreen: "MessagesScreen"
    },
];

export const AccountScreen = ({}) => {
    const useAppNavigation = () => useNavigation<NavigationAccountNavigatorType>()
    const navigation = useAppNavigation()
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Mosh Hamedani"
                    subTitle="programmingwithmosh@gmail.com"
                    image={require("../assets/images/mosh.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={Separator}
                    renderItem={({item}) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    )}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d"/>}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
    },
    container: {
        marginVertical: 20,
    },
});


