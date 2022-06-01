import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {NavigationProp, NavigatorScreenParams} from "@react-navigation/native";
import {ListingType} from "./screens/ListingsScreen";


export type RootTabParamList = {
    Feed: NavigatorScreenParams<FeedNavigatorStackParamList>;
    ListingEditScreen: undefined;
    AccountScreen: undefined;
};


export type RootStackParamList = {
    Welcome: undefined
    Login: undefined
    Register: undefined
}


export type FeedNavigatorStackParamList = {
    ListingsScreen: undefined
    ListingDetailsScreen: { item: ListingType }
}


export type ListingDetailsScreenProps = NativeStackScreenProps<FeedNavigatorStackParamList, 'ListingDetailsScreen'>;


export type WelcomeProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;
export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type RegisterProps = NativeStackScreenProps<RootStackParamList, 'Register'>;

export type NavigationUseType = NavigationProp<RootStackParamList>

export type NavigationFeedNavigatorType = NavigationProp<FeedNavigatorStackParamList>