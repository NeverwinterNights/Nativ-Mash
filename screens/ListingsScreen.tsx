import {FlatList, StyleSheet} from 'react-native';
import {Screen} from "../components/Screen";
import colors from "../config/colors";
import {NavigationFeedNavigatorType} from "../types";
import {useNavigation} from '@react-navigation/native';
import {useEffect} from "react";
import listingsApi from "../api/listings";
import Card from "../components/Card";
import routes from '../navigation/routes';
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import {ActivityIndicator} from "../components/ActivityIndicator";
import {useApi} from "../hooks/useAPI";


export type ImagesData = {
    url: string,
    thumbnailUrl: string
}

export type  ListingType = {
    id: number,
    title: string,
    price: number,
    // image: ImageSourcePropType
    images: ImagesData[]
    categoryId: number
    userId: number
    location: {
        latitude: number,
        longitude: number
    }
}

const useAppNavigation = () => useNavigation<NavigationFeedNavigatorType>()


export const ListingsScreen = () => {
   const {data, error, loading, request:loadListings} = useApi(listingsApi.getListings)


    useEffect(() => {
        loadListings()
    }, [])

    const navigation = useAppNavigation()

    return (
        <Screen style={styles.screen}>
            {error && (<>
                <AppText>Couldn't get data</AppText>
                <AppButton title={"Retry"} onPress={loadListings}/>
            </>)}
            <ActivityIndicator visible={loading}/>
            <FlatList showsVerticalScrollIndicator={false} data={data} keyExtractor={listing => listing.title}
                      renderItem={({item}) =>
                          <Card onPress={() => {
                              navigation.navigate(routes.LISTING_DETAILS, {item})
                          }} title={item.title} subTitle={"$" + item.price} imageURL={item.images[0].url}/>
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
