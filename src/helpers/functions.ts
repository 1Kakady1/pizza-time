import { Dimensions } from "react-native";
import { } from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const dataHeight = (h:number, key:string = "key")=>{
    const windowHeight = Dimensions.get('window').height;
    let arr = [],i=0;
    const count = Math.ceil(windowHeight / h)
    while(i < count){
        arr.push(key+"-"+i)
        i++;
    }

    return arr
}

export const dataCount = (count:number, key:string = "key")=>{

    let arr = [],i=0;

    while(i < count){
        arr.push(key+"-"+i)
        i++;
    }

    return arr
}

export const sub = (a:number,b:number)=>{
    return a - b
} 

export const getWidth = (offset:number = 0)=>{
    return windowWidth - offset
}

export const  wait = (timeout: number) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

export const createDataSlide = ( data:any[] , countItem:number):any[][]=>{
    let newData:any[][] = [];
    let i = 0;

    while(i < data.length){
        let dataBuf:any[] = [];
        dataBuf.push(data[i])

        if(data[i+1]){
            dataBuf.push(data[i+1])
        }

        newData.push(dataBuf);
        i+=2;

        if(i >= countItem *2 || i > data.length) {break};
    }

    return newData
}