import React, {useState} from "react";
import {StyleSheet} from "react-native";
import * as Yup from "yup";
import {Screen} from "../components/Screen";
import {AppForm} from "../components/forms/AppForm";
import {AppFormField} from "../components/forms/AppFormField";
import {SubmitButton} from "../components/forms/SubmitButton";
import {register} from "../api/users";
import {useAuth} from "../auth/useAuth";
import {useApi} from "../hooks/useAPI";
import authApi from "../api/auth";
import {FormikValues} from "formik";
import {ErrorMessage} from "../components/forms/ErrorMessage";
import {ActivityIndicator} from "../components/ActivityIndicator";


export const RegisterScreen = () => {
    const [error, setError] = useState<string>();
    const auth = useAuth()
    // const loginApi = useApi(authApi.login);

    const registerApi = useApi(register);
    const loginApi = useApi(authApi.login)

    const validationSchema = Yup.object().shape({
        name: Yup.string().required().label("Name"),
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password"),
    });

    const handleSubmit = async (userInfo: FormikValues) => {
        // const result: any = await register(userInfo)
        const result: any = await registerApi.request(userInfo)
        if (!result.ok) {
            if (result.data) {
                setError(result.data.error);
            } else {
                setError("An unexpected error occurred.");
                console.log(result);
            }
            return;
        }

        // const {data: authToken} = await authApi.login(
        const {data: authToken} = await loginApi.request(
            userInfo.email,
            userInfo.password
        );
        auth.logIn(authToken as string);
    }

    return (
        <>
            <ActivityIndicator visible={registerApi.loading || loginApi.loading}/>
            <Screen style={styles.container}>
                {/*<ActivityIndicator visible={registerApi.loading || loginApi.loading}/>*/}

                <AppForm
                    initialValues={{name: "", email: "", password: ""}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={!!error}/>
                    <AppFormField
                        autoCorrect={false}
                        icon="account"
                        name="name"
                        placeholder="Name"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitButton title="Register"/>
                </AppForm>
            </Screen>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});
