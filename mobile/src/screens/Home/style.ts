import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        height: '100vh',
        width: '100vw'
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.XLG,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        padding: 10
    },
    description: {
        color: THEME.COLORS.SUBTEXT,
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        paddingVertical: 10,
        borderBottomColor: THEME.COLORS.PRIMARY,
        borderBottomWidth: 3,
        borderRadius: 2,
        marginVertical: 10
    },
    image: {
        width: 200,
        height: 100,
        resizeMode: 'center',
    },
    itemList: {
        width: '80vw',
    }
});