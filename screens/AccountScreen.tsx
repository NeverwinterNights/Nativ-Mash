import React from "react";
import {FlatList, StyleSheet, View} from "react-native";


import ListItem from "../components/ListItem";
import colors from "../config/colors";
import {Icon} from "../components/Icon";
import {Screen} from "../components/Screen";
import {Separator} from "../components/Separator";
import defaultStyles from "../config/styles";

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: defaultStyles.colors.primary,
        },
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: defaultStyles.colors.secondary,
        },
    },
];

export const AccountScreen = ({}) => (
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

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
    },
    container: {
        marginVertical: 20,
    },
});


