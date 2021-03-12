import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { DrawerInit } from '../router/drawer.route';
import { SCREENS_STACK } from '../consts/screens';
import { horizontalAnimation } from '../helpers/screen';
import { ModalScreen } from '../router/modal.router';

export const Router = () => {
    const Stack = createStackNavigator();
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={horizontalAnimation}
                    headerMode="none"
                    initialRouteName={SCREENS_STACK.drawer}
                    mode="modal"
                >
                    <Stack.Screen
                        name={SCREENS_STACK.drawer}
                        component={DrawerInit}
                    />
                    <Stack.Screen
                        name={SCREENS_STACK.modal}
                        component={ModalScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
};
