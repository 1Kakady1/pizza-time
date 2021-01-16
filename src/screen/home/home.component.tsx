import React from 'react';
import { View,Text} from 'react-native';
import { Fab } from '../../components/fab/fab.component';
import { ModalWindow } from '../../components/modal/modal.component';
import { stylesHome } from './home.styles';
import { statusBar } from '../../consts/colors.const';
import { StatusBar } from 'expo-status-bar';
import { ProductsContainer } from '../../components/products/products.container';

const Home = () => {

    const styles = stylesHome;

    return (
        <View style={styles.container}>

            <StatusBar backgroundColor={statusBar.bg[60]} style="light" />

            <ProductsContainer />

            <ModalWindow btn={Fab} btnProps={{onPress:()=> true,label:"", icon:"cart"}} >
                    <View>
                        <Text>У Вас нет прав доступа к данной опции. Свяжитесь с администратором для получения информации.</Text>
                    </View>
            </ModalWindow>
            
        </View>
    );
}

export default Home;
