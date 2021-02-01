import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { PRODUCTS_PANEL_KEY } from './products-panel.const';
import {productsPanelInit} from './products-panel.mock'
import { IProductsPanel } from './products-panel.model'


const onOpenSearch= (state:IProductsPanel)=>{
  state.isSearch = true;
}

const onCloseSearch = (state:IProductsPanel)=>{
  state.isSearch = false;
}

export const productsPanelSlice = createSlice({
  name: PRODUCTS_PANEL_KEY,
  initialState: productsPanelInit,
  reducers: {
    onOpenSearch,
    onCloseSearch
  },
})

export const toProductsPanelAction = productsPanelSlice.actions;

