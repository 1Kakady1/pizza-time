import {StyleSheet } from 'react-native';
import { primary, text, write } from '../../../../consts/colors.const';


export const stylesSearchItem = StyleSheet.create({
    container: {
        borderRadius: 10,
        width: "100%",
        height: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: write
    },
    preview: {
        borderRadius: 10,
        width: 100,
        height: 100,
    },
    img: {
        borderRadius: 10,
        width: '100%', 
        height: "100%",
    },
    colLeft:{
        width: 100, 
    },
    colRight:{
        width: "100%",
        marginLeft: 16,
    },
    info:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-start",
        marginTop: 4,
        marginBottom: 4
    },
    icon:{
        color: text.title,
    },
    size:{
        marginLeft: 6,
        marginRight: 6,
        color: text.title,
    },
    title:{
        color: text.title,
        fontSize: 20,
    },
    price:{
        fontSize: 18,
        color: primary[1]
    },
    
});

