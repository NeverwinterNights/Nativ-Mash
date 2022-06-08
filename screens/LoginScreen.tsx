import {Image, StyleSheet} from 'react-native';
import {Screen} from "../components/Screen";
import * as Yup from 'yup';
import {AppFormField} from "../components/forms/AppFormField";
import {SubmitButton} from "../components/forms/SubmitButton";
import {AppForm} from "../components/forms/AppForm";
import authApi from "../api/auth";
import {ErrorMessage} from "../components/forms/ErrorMessage";
import {useState} from 'react';
import {useAuth} from "../auth/useAuth";


export type  UserType = {
    "email": string
    "iat": number
    "name": string
    "userId": number

}

export const LoginScreen = () => {

    const {logIn} = useAuth()
    const [loginFailed, setLoginFailed] = useState<boolean>(false);

    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password"),
    })

    const handleSubmit = async (loginInfo: any) => {
        const result = await authApi.login(loginInfo.email, loginInfo.password)
        if (!result.ok) return setLoginFailed(true)
        setLoginFailed(false)
        logIn(result.data as string)
    }

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/images/logo-red.png")}/>
            <AppForm
                initialValues={{email: "", password: ""}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error={"Invalid email and/or password"} visible={loginFailed}/>
                <AppFormField name={"email"} icon={"email"} autoCapitalize={"none"} autoCorrect={false}
                              placeholder={"Email"} keyboardType={"email-address"}
                              textContentType={"emailAddress"}/>
                <AppFormField name={"password"} icon={"lock"} autoCapitalize={"none"} autoCorrect={false}
                              placeholder={"Password"} textContentType={"password"} secureTextEntry/>
                <SubmitButton title={"Login"}/>
            </AppForm>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        height: 80,
        width: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
});
