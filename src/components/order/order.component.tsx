import React from 'react';
import { View,Text, ImageBackground} from 'react-native';
import { stylesOrder } from './order.styles';

export const Order = () => {

    const styles = stylesOrder;

    return (
        <ImageBackground source={require("./resources/order.png")} style={styles.container}>

        </ImageBackground>
    );
}
