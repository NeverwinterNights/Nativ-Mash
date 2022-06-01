import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ListingsScreen} from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import {FeedNavigatorStackParamList} from "../types";
import {TransitionPresets} from "@react-navigation/stack";
import { Host, Portal } from 'react-native-portalize';
const Stack = createNativeStackNavigator<FeedNavigatorStackParamList>();

// type RootNewStakType = {
//     ListingsScreen: undefined,
//     ListingDetailsScreen: undefined
// }
//
//
//  const newStack = createStackNavigator<FeedNavigatorStackParamList>();

export const FeedNavigator = () => (
    // <Host>
    <Stack.Navigator>
        {/*<Stack.Screen name={"ListingsScreen"} component={ListingsScreen}/>*/}
        {/*<Stack.Screen name={"ListingDetailsScreen"} options={{headerShown: false}}  component={ListingDetailsScreen}/>*/}


        <Stack.Group>
            <Stack.Screen  name={"ListingsScreen"} component={ListingsScreen}/>
        </Stack.Group>
        <Stack.Group screenOptions={{presentation:"modal", gestureEnabled: true}}>
            <Stack.Screen  name={"ListingDetailsScreen"} options={{headerShown: false, }} component={ListingDetailsScreen}/>
        </Stack.Group>


        {/*<newStack.Screen name={"ListingDetailsScreen"} component={ListingDetailsScreen}/>*/}
    </Stack.Navigator>
    // </Host>
)
