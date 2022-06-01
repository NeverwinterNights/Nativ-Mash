import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ListingsScreen} from "../screens/ListingsScreen";
import {ListingEditScreen} from "../screens/ListingEditScreen";
import {AccountScreen} from "../screens/AccountScreen";
import {RootTabParamList} from "../types";
import {FeedNavigator} from "./FeedNavigator";

const Tab = createBottomTabNavigator<RootTabParamList>();

export const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name={"Feed"} component={FeedNavigator} options={{headerShown: false}}/>
        <Tab.Screen name={"ListingEditScreen"} component={ListingEditScreen}/>
        <Tab.Screen name={"AccountScreen"} component={AccountScreen}/>
    </Tab.Navigator>
)
