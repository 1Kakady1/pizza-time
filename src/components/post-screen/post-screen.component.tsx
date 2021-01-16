import React from 'react';
import { View,Image,ScrollView, RefreshControl } from 'react-native';
import { Caption, Snackbar,Text } from 'react-native-paper';
import { IPostItemProps } from './post-screen.model';
import {stylesPostItem} from "./post-screen.styles"
import {useTranslation} from 'react-i18next';
import Slick from 'react-native-slick';
import { createDataSlide } from '../../helpers/functions';
import { CardVerical } from '../card/card-vertical/card-verical.component';

export const PostItem =  ({post, isLoad, isRefresh, onRefresh, sliderData, nav}: IPostItemProps) =>{

    const styles = stylesPostItem;
    const [t] = useTranslation();
    const dataSlider = createDataSlide(sliderData, 4);

    return(
        
        <View style={styles.container}>

            <ScrollView 
                style={styles.scrollView} 
                refreshControl={
                    <RefreshControl 
                        refreshing={isRefresh} 
                        onRefresh={onRefresh} 
                    />
                } 
            >
              
                <View style={styles.section1}>

                    {
                         post.preview &&  post.preview !== "" ?
                            <Image style={styles.preview} source={{uri: post.preview}}/>
                            :
                            <Image style={styles.preview} source={require("./resources/no-image.jpg")}/>
                    }
                    
                    <View style={styles.info}>

                        <Text style={[styles.infoText,styles.name]} >
                            {t("task-name")}: {post.name}
                        </Text>

                        <Text style={styles.infoText} >
                            {t("status")}: {t(post.status)}
                        </Text>

                        <View style={styles.id}>
                           <Caption> ID: </Caption>
                           <Caption style={{fontSize: 10}}> {post.id} </Caption>  
                        </View>
                        

                    </View>
                </View>

                <View style={styles.desc}>
                    <Text>
                        {post.desc}
                    </Text>
                </View>

                <View >
                    <Text style={styles.h1}>
                        {t("page.post.slider")+":"}
                    </Text>
                </View>

                <Slick 
                    style={styles.wrapper} 
                    showsButtons={false}
                    autoplay={true}
                    loop={true}
                    activeDotStyle={styles.activeDot}
                    autoplayTimeout={10}
                >
                    {
                        dataSlider.map((item)=>{
                            return(
                                <View key={item[0].id} style={styles.slide}>
                                    <CardVerical
                                            nav={nav}
                                            data={item[0]}
                                            width={"50%"}
                                            height={270}
                                    />
                                     {
                                        item[1] && <CardVerical
                                            nav={nav}
                                            data={item[1]}
                                            width={"50%"}
                                            height={270}
                                        />
                                     }
                                </View>
                            )
                        })
                    }
                </Slick>
           
            </ScrollView>

            <Snackbar
                style={styles.snackbar}
                visible={isLoad}
                onDismiss={()=>false}
                action={{
                label: '',
                onPress: () => true,
            }}>
                {t("page.post.load-data")}...
            </Snackbar>
        </View>

    )
}
