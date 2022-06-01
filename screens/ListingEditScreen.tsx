import React from "react";
import {StyleSheet} from "react-native";
import * as Yup from "yup";
import {AppForm} from "../components/forms/AppForm";
import {AppFormField} from "../components/forms/AppFormField";
import {SubmitButton} from "../components/forms/SubmitButton";
import {Screen} from "../components/Screen";
import {AppFormPicker} from "../components/forms/AppFormPicker";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {FormImagePicker} from "../components/FormImagePicker";
import {CategoryPickerItem} from "../components/CategoryPickerItem";
import {useLocation} from "../hooks/useLocation";
import {ObjectSchema} from "yup";
import {RequiredObjectSchema} from "yup/es/object";




const validationSchema= Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image")
});

 // export type Test = Yup.InferType<typeof validationSchema>


export type CategoryType = {
    backgroundColor: string
    icon: keyof typeof MaterialCommunityIcons.glyphMap
    label: string
    value: number
}

const categories: CategoryType[] = [
    {
        backgroundColor: "#fc5c65",
        icon: "floor-lamp",
        label: "Furniture",
        value: 1,
    },
    {
        backgroundColor: "#fd9644",
        icon: "car",
        label: "Cars",
        value: 2,
    },
    {
        backgroundColor: "#fed330",
        icon: "camera",
        label: "Cameras",
        value: 3,
    },
    {
        backgroundColor: "#26de81",
        icon: "cards",
        label: "Games",
        value: 4,
    },
    {
        backgroundColor: "#2bcbba",
        icon: "shoe-heel",
        label: "Clothing",
        value: 5,
    },
    {
        backgroundColor: "#45aaf2",
        icon: "basketball",
        label: "Sports",
        value: 6,
    },
    {
        backgroundColor: "#4b7bec",
        icon: "headphones",
        label: "Movies & Music",
        value: 7,
    },
    {
        backgroundColor: "#a55eea",
        icon: "book-open-variant",
        label: "Books",
        value: 8,
    },
    {
        backgroundColor: "#778ca3",
        icon: "application",
        label: "Other",
        value: 9,
    },
];


export const ListingEditScreen = () => {
    const location = useLocation()
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: []
                }}
                onSubmit={(values) => console.log(location)}
                validationSchema={validationSchema}
            >
                <FormImagePicker name={"images"}/>
                <AppFormField maxLength={255} name="title" placeholder="Title"/>
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker
                    numbersOfColumn={3}
                    PickerItemComponent={CategoryPickerItem}
                    items={categories}
                    name="category"
                    placeholder="Category"
                    width={"50%"}/>
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post"/>
            </AppForm>
        </Screen>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

