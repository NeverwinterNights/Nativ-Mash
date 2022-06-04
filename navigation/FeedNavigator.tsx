import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ListingsScreen} from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import {FeedNavigatorStackParamList} from "../types";

const Stack = createNativeStackNavigator<FeedNavigatorStackParamList>();

export const FeedNavigator = () => (

    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Group>
            <Stack.Screen name={"ListingsScreen"} component={ListingsScreen}/>
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: "modal", gestureEnabled: true}}>
            <Stack.Screen name={"ListingDetailsScreen"} options={{headerShown: false,}}
                          component={ListingDetailsScreen}/>
        </Stack.Group>
    </Stack.Navigator>

)
