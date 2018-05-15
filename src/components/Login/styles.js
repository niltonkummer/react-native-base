import { StyleSheet } from 'react-native';
import { metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    logo: {
        width: 200,
        height: 60,
        
    },
    welcomeMessage: {
        fontSize: fonts.big,
    },
    descriptionMessage: {
        width: 100,
    },
    formContainer: {        
        flexGrow: 1,       
    }
});

export default styles;