import React from "react";
import {useFormikContext} from "formik";
import {ErrorMessage} from "./ErrorMessage";
import {AppPicker} from "../AppPicker";
import {CategoryType} from "../../screens/ListingEditScreen";
import {CategoryPickerItemPropsType} from "../CategoryPickerItem";



type FormData = {
    [key: string]: string;
};

type  AppFormPickerPropsType = {
    placeholder: string
    items: CategoryType[]
    name: keyof FormData
    numbersOfColumn?: number
    width?: string
    PickerItemComponent?: (props:CategoryPickerItemPropsType)=> JSX.Element
}

export const AppFormPicker = ({items, width, numbersOfColumn=1, name, PickerItemComponent, placeholder}: AppFormPickerPropsType) => {
    const {errors, setFieldValue, touched, values} = useFormikContext<FormData>();
    return (
        <>
            <AppPicker
                numbersOfColumn={numbersOfColumn}
                PickerItemComponent={PickerItemComponent}
                width={"50%"}
                items={items}
                onSelectItem={(item) => setFieldValue(name as string, item)}
                placeholder={placeholder}
                selectedItem={values[name] as unknown as CategoryType}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
};


