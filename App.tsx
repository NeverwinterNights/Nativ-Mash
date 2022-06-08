import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {NavigationContainer} from '@react-navigation/native';
import {myTheme} from "./navigation/NavigationTheme";
import {OfflineNotification} from "./components/OfflineNotification";
import {AuthNavigation} from "./navigation/AuthNavigator";
import {useCallback, useEffect, useState} from 'react';
import {AuthContext} from "./auth/context";
import {UserType} from "./screens/LoginScreen";
import {AppNavigator} from "./navigation/AppNavigator";
import {getToken, getUser} from "./auth/storage";
import jwtDecode from "jwt-decode";
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
    const [user, setUser] = useState<UserType>({} as UserType);
    const [isReady, setIsReady] = useState<boolean>(false);


    const restoreToken = async () => {
        const user = await getUser()
        if (user) { // @ts-ignore
            setUser(user)
        }

    }

    // useEffect(() => {
    //     restoreToken()
    // }, [])


    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync();
                restoreToken()
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                setIsReady(true);
            }
        }
        prepare();
    }, []);


    const onLayoutRootView = useCallback(async () => {
        if (isReady) {
            await SplashScreen.hideAsync();
        }
    }, [isReady]);

    if (!isReady) {
        return null;
    }


    return (
        <GestureHandlerRootView  onLayout={onLayoutRootView} style={{flex: 1}}>
            <AuthContext.Provider value={{user, setUser}}>
                <OfflineNotification/>
                <NavigationContainer theme={myTheme}>
                    {/*<AppNavigator/>*/}
                    {Object.keys(user).length == 0 ? <AuthNavigation/> : <AppNavigator/>}
                </NavigationContainer>
            </AuthContext.Provider>
        </GestureHandlerRootView>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
