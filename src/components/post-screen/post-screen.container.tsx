import {  useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import React,{useEffect, useState} from 'react';
import { Alert, View } from 'react-native';
import { useSelector } from 'react-redux';
import { SCREENS_STACK, SCREENS } from '../../consts/screens';
import { screenRoute } from '../../router/router.model';
import { getProductsById } from '../../services/api';
import { IProducts } from '../products/state/products.state.model';
import { toProducts } from '../products/state/products.state.selector';
import { PostItem } from './post-screen.component';

export const PostItemContainer =  () =>{

    const route = useRoute<RouteProp<screenRoute, 'PostItemScreen'>>(); //TODO: Try to pass constants
    const [isLoad, setIsLoad] = useState<boolean>(true);
    const [isRefresh, setRefresh] = useState<boolean>(false);
    const [post, setPost]= useState<IProducts|undefined>(useSelector(toProducts.getProduct(route.params.id)))
    const posts = useSelector(toProducts.productsList)
    const nav = useNavigation();
    const onRefresh = () => setRefresh(true)
    const getPost = (fun: ()=>void) =>{
        getProductsById(route.params.id)
        .toPromise()
        .then(res=>{
            fun(); 
            setPost(res.data)
            return true;
        })
        .catch((e)=> {
            Alert.alert("","Ошибка при получении запроса"+ e.messege,
                [{ text: "OK" }], { cancelable: false }
            );
        })
    }

    useEffect(()=>{
       getPost(()=> setIsLoad(false))
    },[route.params,isRefresh])

    useEffect(()=>{
        if(isRefresh) getPost(()=> setRefresh(false))
    },[isRefresh])

    return post ? <PostItem 
        sliderData={posts} 
        isLoad={isLoad} 
        isRefresh={isRefresh} 
        onRefresh={onRefresh} 
        post={post} 
        nav={(id:string)=>nav.navigate(SCREENS_STACK.modal, {
            screen: SCREENS.postItem,
            params: { id },
          })}
        
        /> : <View></View>

}
