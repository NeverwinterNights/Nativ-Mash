import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ListingEditScreen} from "../screens/ListingEditScreen";
import {RootTabParamList} from "../types";
import {FeedNavigator} from "./FeedNavigator";
import {AccountNavigator} from "./AccountNavigator";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {NewListingButton} from "./NewListingButton";
import routes from "../navigation/routes";

const Tab = createBottomTabNavigator<RootTabParamList>();

export const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name={"Feed"} component={FeedNavigator} options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => <MaterialCommunityIcons name={"home"} color={color} size={size}/>
        }}/>
        <Tab.Screen name={"ListingEditScreen"} options={ ({navigation})=>  ({
            headerShown: false,
            tabBarButton: ()=> <NewListingButton onPress={()=> navigation.navigate(routes.LISTING_EDIT)}/>,
            tabBarIcon: ({color, size}: any) => <MaterialCommunityIcons name={"plus-circle"} color={color} size={size}/>
        })} component={ListingEditScreen}/>
        <Tab.Screen name={"AccountNavigator"}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color, size}) => <MaterialCommunityIcons name={"account"} color={color}
                                                                               size={size}/>
                    }} component={AccountNavigator}/>
    </Tab.Navigator>
)
