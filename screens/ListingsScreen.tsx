import {FlatList, ImageSourcePropType, StyleSheet} from 'react-native';
import {Screen} from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import {NavigationFeedNavigatorType} from "../types";
import {useNavigation} from '@react-navigation/native';
import {useRef} from "react";
import {Modalize} from "react-native-modalize";

export type  ListingType = {
    id: number,
    title: string,
    price: number,
    image: ImageSourcePropType
}

const listings: ListingType[] = [
    {
        id: 1,
        title: "Red Jacket for man",
        price: 500,
        image: require("../assets/images/jacket.jpg")
    },
    {
        id: 2,
        title: "Golden couch for man",
        price: 1200,
        image: require("../assets/images/couch.jpg")
    },
]

const useAppNavigation = () => useNavigation<NavigationFeedNavigatorType>()


export const ListingsScreen = () => {

    const navigation = useAppNavigation()

    return (
        <Screen style={styles.screen}>
            <FlatList showsVerticalScrollIndicator={false} data={listings} keyExtractor={listing => listing.title} renderItem={({item}) =>
                <Card onPress={() => {
                    navigation.navigate( "ListingDetailsScreen", {item})
                }} title={item.title} subTitle={"$" + item.price} image={item.image}/>
            }/>
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
});
