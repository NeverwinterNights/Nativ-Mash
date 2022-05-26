import {Image, StyleSheet} from 'react-native';
import {Screen} from "../components/Screen";
import * as Yup from 'yup';
import {AppFormField} from "../components/forms/AppFormField";
import {SubmitButton} from "../components/forms/SubmitButton";
import {AppForm} from "../components/forms/AppForm";

// export type validationSchemaType = Yup.InferType<typeof validationSchema>;


export const LoginScreen = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password"),
    })
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/images/logo-red.png")}/>
            <AppForm
                initialValues={{email: "", password: ""}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
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
