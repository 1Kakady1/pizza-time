import {StyleSheet } from 'react-native';
import {black, gray, primary, text, write} from '../../../consts/colors.const';

export const stylesCardCart = StyleSheet.create({
    itemRow:{
        flex:1,
        flexDirection: "column",
        flexWrap: 'nowrap',
        borderBottomLeftRadius: 12,
		borderBottomRightRadius: 12,
		borderTopLeftRadius: 12,
		borderTopRightRadius: 12,
        backgroundColor: write,
        position:"relative"
    },
    item: {
        flex:1,
        flexDirection: "row",
        flexWrap: 'nowrap',
        position:"relative"
    },
    infoWrap: {
        flex:1,
        flexDirection: 'column',
        margin: 14,
        alignItems: 'flex-start',
        justifyContent: "flex-start",
        overflow: "hidden"
    },
    colRight:{
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
    },
    colLeft:{
        flexDirection: 'row',
        flex: 7,
    },
    info:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-start",
        marginTop: 4,
        marginBottom: 4
    },
    text:{
        color: text.title,
        fontSize: 24,
        
    },
    desc:{
        color: black[60],
        fontSize: 14
    },
    preview:{
        backgroundColor: gray[100],
        width: 124,
        height: 124,
        borderRadius: 12
    },
    img:{
        width: '100%', 
        height: "100%",
        borderRadius: 12
    },
    size:{
        marginLeft: 6,
        marginRight: 6,
        color: text.title,
    },
    price:{
        marginLeft: 0,
        color: primary[1]
    },
    icon:{
        color: text.title,
    },
    counter:{
        marginBottom: 3,
        marginTop: 3,
        width: 26,
        height: 26,
        justifyContent: "center",
        alignItems: "center"
    },
    counterText:{
        color: black[100],
        fontSize: 16,
        fontWeight: "bold"
    },
    sizeBtn:{
        position: "relative",
        width: 35,
        height: 35,
        borderRadius: 35,
        backgroundColor: "#333939",
        padding: 0,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10

    },
    sizeLabel:{
        color: "#fff",
        textAlign: "center",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input:{
        backgroundColor: write,
        height: 36,
        fontSize: 10,
    }
});