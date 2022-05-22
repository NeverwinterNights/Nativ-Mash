import React from "react";
import {FlatList, ImageSourcePropType, StyleSheet} from "react-native";
import ListItem from "../components/ListItem";
import {Screen} from "../components/Screen";
import {Separator} from "../components/Separator";


export type initialMessageType = {
    id: number
    title: string
    description: string
    image: ImageSourcePropType
}

const initialMessages: initialMessageType[] = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/images/mosh.jpg"),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/images/mosh.jpg"),
    },
];

function MessagesScreen() {


    return (
        <Screen>
            <FlatList
                data={initialMessages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({item}) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={()=> console.log ("Message selected", item)}
                    />}
                ItemSeparatorComponent={Separator}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({});

export default MessagesScreen;
