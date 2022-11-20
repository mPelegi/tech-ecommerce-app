import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20
  },
  content: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'center',
    margin: 'auto'
  },
  productDetails: {
    flexDirection: 'column',
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  title: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    padding: 10
  },
  description: {
    color: THEME.COLORS.SUBTEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    padding: 10
  },
  price: {
    color: THEME.COLORS.PRIMARY,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    padding: 10
  }
});