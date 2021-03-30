import { StyleSheet } from 'react-native';
import { primary } from '../../../consts/colors.const';

export const stylesProfile = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    generalImg: {
        width: '100%',
        height: 200
    },
    header: {
        position: 'relative'
    },
    previewWrap: {
        position: 'absolute',
        bottom: -60,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    preview: {
        width: 128,
        height: 128,
        borderRadius: 128,
        borderColor: primary[1],
        borderWidth: 3
    }
});
