import React from 'react';
import { View,Text} from 'react-native';
import { stylesOrder } from './order.styles';
import { statusBar } from '../../consts/colors.const';
import { StatusBar } from 'expo-status-bar';
import { OrderContainer } from '../../components/order/order.container';

export const Order = () => {

    const styles = stylesOrder;

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={statusBar.bg[60]} style="light" />
            <OrderContainer />
        </View>
    );
}
