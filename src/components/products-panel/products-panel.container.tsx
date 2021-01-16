import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ProductsPanel } from './products-panel.component';

export const ProductsPanelContainer = () => {

    const navigation = useNavigation();
    const drawerOpen = () =>  navigation.openDrawer() 

  return <ProductsPanel drawerOpen={drawerOpen}   />;
};