import React from 'react';
import { View, Text ,ImageBackground, FlatList } from 'react-native';
import { ICartProps } from './cart.model';
import { stylesCart, stylesFlatListSeparator } from './cart.styles';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CardCart } from '../card/card-cart/card-cart.component';
import { IconButton } from 'react-native-paper';

const renderSeparatorDefault = () => <View style={stylesFlatListSeparator.separator}/>

export const Cart = ({cart,count, onAdd, onSub ,goProducts, goOrder ,onClear, onChangeComments ,totalPrice, onRemove}: ICartProps) => {

  const styles =  stylesCart;
    //TODO: add translate
  return (
    <View style={{position: "relative", flex: 1}}>
        <ImageBackground  source={require("./resources/header-cart.jpg")} style={styles.imageHeader}>
            <Text style={styles.textHeader}> В корзине товаров: {count}, {"\n"} на сумму: {totalPrice} $</Text>
        </ImageBackground>
        {
            count > 0 ?
            (   
                <View style={styles.container}>
                    <FlatList
                        showsVerticalScrollIndicator ={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={[styles.scrollView]}
                        data={cart}
                        renderItem={({item})=> <CardCart onAdd={onAdd} onChangeComments={onChangeComments} onSub={onSub} onLongPress={onRemove}  data={item} height={170} />}
                        keyExtractor={(item) => item.id+"-"+item.productSize}
                        ItemSeparatorComponent={renderSeparatorDefault}
                    />
                </View>
                     
            )
            :
            (
                <TouchableOpacity onPress={goProducts} style={styles.emptyWrap}>
                    <Animatable.Image animation={"swing"} delay={200} iterationDelay={300} iterationCount={40} style={styles.emptyImg} source={require("./resources/cart-empty.png")} />
                    <Animatable.Text animation={"pulse"} delay={200} iterationDelay={300} iterationCount={40} style={styles.emptyLink}>
                        {"Ваша корзина пуста \n Быстрей за покупками !!!"}
                    </Animatable.Text>
                </TouchableOpacity>
            )
        }
        
        <View style={[styles.navBtnWrap, {justifyContent: count > 0 ? "space-between" : "center"}]}>
            {
                count > 0 && <Animatable.View style={styles.navBtn} animation={"fadeIn"} delay={600} > 
                    <IconButton
                        style={styles.navBtn}
                        icon={"close-circle-outline"}
                        color={"#fff"}
                        size={34}
                        onPress={onClear}
                    />
                </Animatable.View>
            }

            <Animatable.View  style={[styles.navBtn]} animation={"fadeIn"} delay={1200}>  
                <IconButton
                    style={styles.navBtn}
                    icon={"home"}
                    color={"#fff"}
                    size={34}
                    onPress={goProducts}
                />
            </Animatable.View>
            {
                 count > 0 &&  <Animatable.View style={styles.navBtn} animation={"fadeIn"} delay={1800}>
                    <IconButton
                        icon={"credit-card-multiple-outline"}
                        color={"#fff"}
                        size={34}
                        onPress={goOrder}
                    />
                </Animatable.View>
            }

        </View> 

    </View>
  )

};