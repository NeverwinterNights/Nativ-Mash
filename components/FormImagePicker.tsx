import {ImageInputList} from "./ImageInputList";
import {ErrorMessage} from "./forms/ErrorMessage";
import {useFormikContext} from "formik";
import React from "react";


type FormData = {
    [key: string]: string;
};


type  FormImagePickerPropsType = {
    name: keyof FormData

}

export const FormImagePicker = ({name}: FormImagePickerPropsType) => {
    const {errors, setFieldValue, touched, values} = useFormikContext<FormData>();
    const imageUris = values[name] as unknown as [];


    const handleAdd = (uri: string) => {
        setFieldValue(name as string, [...imageUris, uri])
    }

    const handleRemove = (uri: string) => {
        setFieldValue(name as string, imageUris.filter((imageUri) => imageUri != uri))
    }

    return (
        <>
            <ImageInputList imageUris={imageUris} onRemoveImage={handleRemove}
                            onAddImage={handleAdd}/>
            <ErrorMessage error={errors[name]} visible={touched[name]}/>

        </>
    );
};

