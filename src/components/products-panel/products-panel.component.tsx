import React from 'react';
import { View, Text ,ImageBackground } from 'react-native';
import { IProductsPanelProps } from './products-panel.model';
import { stylesPrductsPanel } from './products-panel.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const ProductsPanel = ({drawerOpen, onOpenSearch}:IProductsPanelProps) => {

  const styles= stylesPrductsPanel;

  return (
    <View style={styles.container}>
        <ImageBackground  source={{uri: "https://www.gastronom.ru/binfiles/images/20191113/bd570867.jpg"}} style={styles.image}>
           <View style={styles.overlay}>
             <TouchableOpacity style={styles.btn} onPress={() => {drawerOpen()}} >
                <Icon name={"menu"} color={"#fff"} size={30}/>
             </TouchableOpacity>
              <Text style={styles.text}>MENU</Text>
             <TouchableOpacity style={styles.btn}  onPress={onOpenSearch} >
                <Icon name={"magnify"} color={"#fff"} size={30}/>
             </TouchableOpacity>
           </View>
        </ImageBackground>
    </View>
  );
};