import { StyleSheet } from 'react-native';
import { primary, write } from '../../../consts/colors.const';

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
    },
    uplodePreview: {
        position: 'absolute',
        top: 6,
        right: 2,
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row'
    },
    uplodeText: {
        color: write,
        fontWeight: '900'
    },
    uplodeProcent: {
        color: write,
        fontWeight: '900'
    }
});
