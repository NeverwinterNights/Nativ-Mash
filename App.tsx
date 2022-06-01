import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigation} from "./navigation/AuthNavigator";
import {myTheme} from "./navigation/NavigationTheme";
import {AppNavigator} from "./navigation/AppNavigator";


// const Stack = createNativeStackNavigator<RootTabParamList>();
// const useAppNavigation = () => useNavigation<NavigationUseType>()
//
// const NameNew = () => {
//     const navigation = useAppNavigation()
//
//
//     return (
//       <View>
//           <Button title={"gff"} onPress={()=> navigation.navigate("Stack1")}/>
//
//       </View>
//   )
// }
//
// const Stack1 = () => {
//     const navigation = useAppNavigation()
//
//
//     return (
//         <View>
//             <Button title={"gff"} onPress={()=> navigation.navigate("Stack2",{id:1})}/>
//
//         </View>
//     )
// }
// const Stack2 = ({route}:Stack2Props) => {
//     const {id} = route.params
//     const navigation = useAppNavigation()
//
//
//     return (
//         <View>
//             <Text>{id}</Text>
//             <Button title={"gff"} onPress={()=> navigation.navigate("NameNew")}/>
//
//         </View>
//     )
// }

export default function App() {

    // const StackNavigator = () => {
    //     return <Stack.Navigator initialRouteName={"Stack2"}>
    //         <Stack.Screen name={"Stack1"} component={Stack1}/>
    //         <Stack.Screen name={"Stack2"} component={Stack2}/>
    //         <Stack.Screen name={"NameNew"} component={NameNew}/>
    //
    //     </Stack.Navigator>
    // }


    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <NavigationContainer theme={myTheme}>
               <AppNavigator/>
            </NavigationContainer>
            {/*<AccountScreen/>*/}
            {/*<Screen>*/}
            {/*    <ImageInputList onAddImage={handleAdd} onRemoveImage={handleRemove} imageUris={imageUris}/>*/}
            {/*</Screen>*/}
            {/*<Screen>*/}
            {/*    <ListingDetailsScreen/>*/}
            {/*    <AppTextInput placeholder={"Type text"} icon={"text"}/>*/}

            {/*    <AppPicker*/}
            {/*        items={categories}*/}
            {/*        placeholder={"Category"}*/}
            {/*        icon={"apps"}*/}
            {/*        selectedItem={category}*/}
            {/*        onSelectItem={(item)=> setCategory(item)}/>*/}


            {/*</Screen>*/}
            {/*<ListingEditScreen/>*/}
            {/*<LoginScreen/>*/}

            {/*<ListingEditScreen/>*/}
        </GestureHandlerRootView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
