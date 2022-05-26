import React from "react";
import {useFormikContext} from "formik";
import {ErrorMessage} from "./ErrorMessage";
import {AppPicker} from "../AppPicker";
import {CategoryType} from "../../App";


type FormData = {
    [key: string]: string;
};

type  AppFormPickerPropsType = {
    placeholder: string
    items: CategoryType[]
    name: keyof FormData
    width?: string
}

export const AppFormPicker = ({items, width, name, placeholder}: AppFormPickerPropsType) => {
    const {errors, setFieldValue, touched, values} = useFormikContext<FormData>();
    return (
        <>
            <AppPicker
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


