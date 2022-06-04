import {StyleSheet, TextInputProps} from 'react-native';
import {AppTextInput} from "./AppTextInput";
import {ErrorMessage} from "./ErrorMessage";
import {useFormikContext} from "formik";
import {MaterialCommunityIcons} from "@expo/vector-icons";

type FormData = {
    [key: string]: string;
};
type Props = {
    name: keyof FormData
    icon?: keyof typeof MaterialCommunityIcons.glyphMap
    width?: number

}

export const AppFormField = ({name, width, ...restProps}: Props & TextInputProps) => {
    const {setFieldTouched, setFieldValue, values, errors, touched} = useFormikContext<FormData>()
    return (
        <>
            <AppTextInput
                width={width}
                onBlur={() => setFieldTouched(name as string)}
                onChangeText={text => setFieldValue(name as string, text)}
                value={values[name]}
                {...restProps}
            />
            {touched[name] && <ErrorMessage error={errors[name]}/>}
        </>
    );
};

const styles = StyleSheet.create({});
