import React, {useRef, useState} from "react";
import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AppText from "../components/AppText";

import ListItem from "../components/ListItem";
import colors from "../config/colors";
import {ListingDetailsScreenProps} from "../types";
import {useNavigation} from "@react-navigation/native";
import GestureRecognizer from 'react-native-swipe-gestures'
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {Screen} from "../components/Screen";

function ListingDetailsScreen({route}: ListingDetailsScreenProps) {
    const {item} = route.params
    const useAppNavigation = () => useNavigation()

    const navigation = useAppNavigation()
//     const [refreshing, setRefreshing] = useState(false);
//
//
//     const modalizeRef = useRef<Modalize>(null);
//
//     const onOpen = () => {
//         console.log("object");
//         modalizeRef.current?.open();
//     };
// const config = {
//
// }

    // return (
    // <FlatList data={[item]} renderItem={(item) => {
    //     return (
    //         <View>
    //             <Image style={styles.image} source={item.item.image}/>
    //             <View style={styles.detailsContainer}>
    //                 <AppText style={styles.title}>{item.item.title}</AppText>
    //                 <AppText style={styles.price}>${item.item.price}</AppText>
    //                 <View style={styles.userContainer}>
    //                     <ListItem
    //                         image={require("../assets/images/mosh.jpg")}
    //                         title="Mosh Hamedani"
    //                         subTitle="5 Listings"
    //                     />
    //                 </View>
    //             </View>
    //         </View>
    //     )
    // }
    // } refreshing={refreshing}
    //           onRefresh={() => {
    //               navigation.goBack()
    //           }}
    // />
    return (
        <>
            {/*<Screen>*/}
            {/*    <Pressable  onPress={onOpen}><Text>Open the modal</Text></Pressable>*/}
            {/*</Screen>*/}
            {/*<Portal>*/}
            {/*    <Modalize ref={modalizeRef}>*/}
            <GestureRecognizer
                style={{flex: 1}}
                config={{velocityThreshold: 0.01, directionalOffsetThreshold:30}}
                onSwipe={(direction, state) => {
                    if(direction === 'SWIPE_DOWN') {
                        navigation.goBack()
                    }
                }}
                // onSwipeDown={(dit) => {
                //     console.log('dit', dit)
                //     console.log('down')
                // }}
            >
                    <View style={{flex: 1}}>
                        <Image style={styles.image} source={{uri:item.images[0].url}}/>
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title}>{item.title}</AppText>
                            <AppText style={styles.price}>${item.price}</AppText>
                            <View style={styles.userContainer}>
                                <ListItem
                                    image={require("../assets/images/mosh.jpg")}
                                    title="Mosh Hamedani"
                                    subTitle="5 Listings"
                                />
                            </View>
                        </View>
                    </View>
            </GestureRecognizer>
            {/*    </Modalize>*/}
            {/*</Portal>*/}


        </>
    )
    // );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    userContainer: {
        marginVertical: 40,
    },
});

export default ListingDetailsScreen;
