import { Observable } from "redux";
import { IResponse } from "../../services/api";
import { ICartItem } from "../cart/state/cart.state.model";

export interface IOrderForm{
    date: Date;
    email: string; 
    name: string;
    address: string; 
    comments: string;
}

export interface IOrderProps{
    cart: ICartItem[];
    sendOrder: (order: IOrderForm,value: ICartItem[], key: string) => Promise<IResponse<{}, string, string>>;
    goHome: ()=> void;
    onClear: ()=> void;
}