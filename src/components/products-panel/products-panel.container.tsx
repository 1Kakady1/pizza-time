import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ProductsPanel } from './products-panel.component';
import { useDispatch } from 'react-redux';
import { toProductsPanelAction } from './state/products-panel.reducer';

export const ProductsPanelContainer = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const drawerOpen = () =>  navigation.openDrawer() 
    const onOpenSearch = () => dispatch(toProductsPanelAction.onOpenSearch)

  return <ProductsPanel drawerOpen={drawerOpen}  onOpenSearch={onOpenSearch} />;
};