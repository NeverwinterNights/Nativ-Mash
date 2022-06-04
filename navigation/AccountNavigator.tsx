import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AccountScreen} from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import {AccountNavigatorStackParamList} from "../types";

const Stack = createNativeStackNavigator<AccountNavigatorStackParamList>();

export const AccountNavigator = () => (

    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name={"AccountScreen"} component={AccountScreen}/>
        <Stack.Screen name={"MessagesScreen"} component={MessagesScreen}/>
    </Stack.Navigator>

)
