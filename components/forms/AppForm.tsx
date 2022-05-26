import {StyleSheet, TextProps} from 'react-native';
import {Formik, FormikValues} from 'formik';
import React from "react";

type  AppFormPropsType = {
    initialValues: FormikValues
    onSubmit: (values: FormikValues) => void
    validationSchema: any
}

export const AppForm = ({initialValues, onSubmit, validationSchema, children}: AppFormPropsType & TextProps) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >{() => (<>{children}</>)}</Formik>
    );
};

const styles = StyleSheet.create({});
