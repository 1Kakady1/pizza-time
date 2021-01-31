import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, IResponse } from '../../services/api';
import { ICartItem } from '../cart/state/cart.state.model';
import { toCartSelector } from '../cart/state/cart.state.selector';
import { Order } from './order.component';
import { SCREENS_STACK, SCREENS } from '../../consts/screens';
import { useNavigation } from '@react-navigation/native';
import { IOrderForm } from './order.model';
import { toCartAction } from '../cart/state/cart.state.reducer';

export const OrderContainer = () => {
    
    const dispatch = useDispatch()
    const cart = useSelector(toCartSelector.cart);
    const sendOrder = (order: IOrderForm,value: ICartItem[], key: string) => addOrder(order,value, key).toPromise()
    const onClear = () =>  dispatch(toCartAction.clear())
    
    const nav = useNavigation();
    const goHome = () =>{
        nav.navigate(SCREENS_STACK.drawer, {
            screen: SCREENS_STACK.drawlerChild,
            params:{
                screen: SCREENS.home,
        }})
      }    

    return <Order cart={cart} sendOrder={sendOrder} goHome={goHome} onClear={onClear} />;
}
