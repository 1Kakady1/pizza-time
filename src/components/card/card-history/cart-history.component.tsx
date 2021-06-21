import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import TextTicker from 'react-native-text-ticker';
import { ICartHistory } from './cart-history.model';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { primary, text } from '../../../consts/colors.const';
import { TextInput } from 'react-native-paper';
import { stylesCardHistory } from './cart-history.styles';
import { CardCart } from '../card-cart/card-cart.component';
import { ICartItem } from '../../cart/state/cart.state.model';

export const CardHistory = ({
    data,
    height = '100%',
    width = '100%',
    onLongPress
}: ICartHistory) => {
    const styles = stylesCardHistory;

    return (
        <View>
            <Text>Date: {data.date}</Text>

            {data.products.map((item) => (
                <View
                    key={data.id + '-' + item.id}
                    style={{ paddingBottom: 20 }}
                >
                    <CardCart height={height} width={width} data={item} />
                </View>
            ))}
        </View>
    );
};
