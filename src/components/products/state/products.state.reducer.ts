import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { PRODUCTS_KEY } from './products.state.const';
import {productsInit} from './products.state.mock'
import { IProducts, IProductsData } from './products.state.model'

const setProducts = (state:IProductsData, {payload}: { payload:IProducts[]})=>{
  return {
    ...state,
    products: payload
  }
}

const productsRequest= (state:IProductsData)=>{
  state.isLoad = true;
  state.error="";
}

const productsRequestSuccess= (state:IProductsData, { payload }: { payload: IProducts[] })=>{
  return {
    ...state,
    products: payload,
    isLoad: false,
    error: "",
  }
}

const productsRequestFailed= (state:IProductsData, { payload }: { payload: string })=>{
  state.isLoad = false;
  state.error = payload;
  
}

export const productsSlice = createSlice({
  name: PRODUCTS_KEY,
  initialState: productsInit,
  reducers: {
    setProducts,
    productsRequest,
    productsRequestSuccess,
    productsRequestFailed,
  },
})

export const toProductsAction = productsSlice.actions;

