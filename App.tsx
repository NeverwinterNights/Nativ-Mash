import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {AppTextInput} from "./components/forms/AppTextInput";
import {Screen} from "./components/Screen";
import {AppPicker} from "./components/AppPicker";
import {useState} from "react";
import {LoginScreen} from "./screens/LoginScreen";
import {ListingEditScreen} from "./screens/ListingEditScreen";

export type CategoryType = {
    label: string
    value: number
}

//
// const categories:CategoryType[] = [
//     {label: "Furniture", value: 1},
//     {label: "Clothing", value: 2},
//     {label: "Cameras", value: 3},
// ]

export default function App() {
    const [category, setCategory] = useState<CategoryType | null>(null);

    return (
        <GestureHandlerRootView style={{flex: 1}}>
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
            <ListingEditScreen/>
            {/*<LoginScreen/>*/}
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
