import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
    View,
    Text,
    FlatList,
    Image,
    RefreshControl, 
    Animated, 
    NativeSyntheticEvent, 
    NativeScrollEvent, 
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ICatProps } from './cat.model';
import { styleCat} from './cat.styles';

export const СatList =  ({cat,currentCat,onChangeCat}: ICatProps) =>{

    const styles = styleCat;
   

    return(

        <View style={styles.container}>
            {
                cat.map((item)=> (
                    <TouchableOpacity style={[styles.btn, currentCat === item.name ? styles.btnActive : {} ]} key={item.id} onPress={()=> onChangeCat(item)}>
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>

    )
}
