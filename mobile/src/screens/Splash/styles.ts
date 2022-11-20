import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.COLORS.PRIMARY,
        width: '100vw',
        height: '100vh'
    }, 
    title: {
        color: '#FFFFFF',
        fontSize: THEME.FONT_SIZE.XXLG,
        fontFamily: THEME.FONT_FAMILY.BLACK,
        paddingTop: 50,
        paddingBottom: 20,
        marginHorizontal: 'auto',
        textAlign: 'center'
    },
    image: {
        width: '90vw',
        height: '60vh',
        resizeMode: 'center',
        marginHorizontal: 'auto'
    },
    btnPrimay: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        width: '80vw',
        marginHorizontal: 'auto',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FFFFFF'
    },
    btnText: {
        color: THEME.COLORS.PRIMARY,
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        padding: 30
    },
});