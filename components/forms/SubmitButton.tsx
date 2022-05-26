import { StyleSheet, Text, View } from 'react-native';
import AppButton from "../AppButton";
import {useFormikContext} from "formik";

type SubmitButtonPropsType = {
    title: string
}
export const SubmitButton = ({title}:SubmitButtonPropsType) => {
    const {handleSubmit} = useFormikContext()


    return (
     <AppButton title={title} onPress={handleSubmit}/>

 );
};

const styles = StyleSheet.create({
  
});
