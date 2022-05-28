import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {useState} from "react";
import {ListingEditScreen} from "./screens/ListingEditScreen";
import {AccountScreen} from "./screens/AccountScreen";


export default function App() {
    const [imageUris, setImageUris] = useState<string[]>([]);

    // const requestPermission = async () => {
    //     // const result = await Permissions.askAsync(Permissions.MEDIA_LIBRARY, Permissions.LOCATION)  это аналогично след строке
    //     const result = await ImagePicker.requestMediaLibraryPermissionsAsync()
    //     if (!result.granted) {
    //         alert("Yon need to enable permission")
    //     }
    // }
    //
    // useEffect(() => {
    //     requestPermission()
    // }, [])
    //
    //
    // const selectImage = async () => {
    //     try {
    //         const result = await ImagePicker.launchImageLibraryAsync()
    //         if (!result.cancelled) {
    //             setImageUri(result.uri)
    //         }
    //
    //     } catch (error) {
    //         console.log("Error reading an image", error)
    //     }
    // }



    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <AccountScreen/>
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
