import {StyleSheet } from 'react-native';
import {primary} from '../../consts/colors.const';

export const stylesPostItem = StyleSheet.create({
    container:{
        maxHeight: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    scrollView:{
        width: '100%'
    },
    snackbar:{
        position: "absolute",
        bottom: 10
    },
    section1:{
        width: "100%",
        flexDirection:'row',
        padding: 10
    },
    preview:{
        width: 160,
        height: 160,
        flex: 1
    },
    desc:{
        padding: 10
    },
    info:{
        paddingLeft: 20,
        flex: 1
    },
    infoText:{
        paddingBottom: 12,
    },
    name:{
        fontWeight:  'bold',
        fontSize: 16,
    },
    id:{
        flexDirection: "row"
    },
    wrapper: {
        height: 300,
    },
    slide: {
      flexDirection: "row",
      flexWrap: 'nowrap',
      justifyContent: "space-between"
    },
    activeDot:{
        backgroundColor: primary[500]
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    h1:{
        padding: 10,
        fontSize: 28,
        fontWeight: "bold"
    }
});