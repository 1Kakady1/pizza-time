
import React from 'react';
import {  StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
import Home from '../screen/home/home.component';
import About from '../screen/about/about.component';
import { SCREENS, SCREENS_STACK} from '../consts/screens';
import { stylesDrawerRoute } from './styles';
import { DrawerScreensNavigator  } from '../components/containers/drawer/drawer.component';
import { Auth } from '../screen/auth/auth.compnent';


const Stack = createStackNavigator();

const DrawerScreens = ({ style }:{style:any }) => {
    const styles = stylesDrawerRoute;

     return (
        <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
            <Stack.Navigator
                initialRouteName={SCREENS.home}
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name={SCREENS.home} component={Home} />
                <Stack.Screen name={SCREENS.auth} component={Auth} />
                <Stack.Screen name={SCREENS.about} component={About} />
            </Stack.Navigator>
        </Animated.View>
    );
};

export const DrawerInit = ()=>{
    return <DrawerScreensNavigator
        name={SCREENS_STACK.drawlerChild}
        screenDrawer={DrawerScreens}
    />
}