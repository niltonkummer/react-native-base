import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 31,
    backgroundColor: colors.primary,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  'button-outline': {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  'button-small': {
    paddingHorizontal: 20,
  },
  'button-regular': {
    paddingHorizontal: 30,
    paddingVertical: 18,
  },
  'button-big': {
    paddingHorizontal: 60,
    paddingVertical: 35,
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: fonts.small,
  },

  'text-outline': {
    color: colors.primary,
  },
  'text-small': {
    fontSize: fonts.small,    
  },
  'text-regular': {
    fontSize: fonts.regular,
  },
  'text-big': {
    fontSize: fonts.bigger,    
  }
  
});

export default styles;