import React, {useState} from "react";
import {FlatList, ImageSourcePropType, StyleSheet} from "react-native";
import ListItem from "../components/ListItem";
import {Screen} from "../components/Screen";
import {Separator} from "../components/Separator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";


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
    const [messages, setMessages] = useState(initialMessages);

    const handleDelete = (message:any) => {
        // Delete the message from messages
        setMessages(messages.filter((m:any) => m.id !== message.id));
    };

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
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() =>
                            <ListItemDeleteAction
                                 onPress={() => handleDelete(item)}/>}
                    />}
                ItemSeparatorComponent={Separator}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({});

export default MessagesScreen;
