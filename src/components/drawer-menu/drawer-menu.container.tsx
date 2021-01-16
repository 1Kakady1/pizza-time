import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toUserAction } from '../../store/user/user.reducer';
import { toUser } from '../../store/user/user.selector';
import DrawerContent from './drawer-menu';


export const DrawerContentContainer = (props:DrawerContentComponentProps<DrawerContentOptions>) => { 

    
    const email = useSelector(toUser.email)
    const name = useSelector(toUser.name)
    const isLoad = useSelector(toUser.isLoad);
    const preview = (useSelector(toUser.preview) as string);
    const isAuth = useSelector(toUser.isAuth);

    const dispatch = useDispatch();
    const onSignOut = () => dispatch(toUserAction.logoutRequest())

    return <DrawerContent email={email} name={name} isAuth={isAuth || false}  preview={preview} isLoad={isLoad || false} onSignOut={onSignOut}  drawerProps={props}/>
}

