import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }, 
    logoContainer: { 
        flex:1, 
        flexGrow:1,      
        alignItems: 'center',   
        justifyContent: 'center',           
        
    },
    logo: {        
        width: 200,
        height: 60,        
    },
    messageContainer: {
        flex:1,     
        alignItems: 'center', 
        justifyContent: 'center',    
        
    },
    welcomeMessage: {
        fontSize: fonts.bigger,        
        fontWeight: 'bold',
    },
    descriptionMessage: {
        marginTop: 8,
        width: 130,
        textAlign: 'center',
    },
    buttonContainer: {                    
        alignItems: 'center',                
        flexDirection: 'column',
        flex:1,        
    },
    
    button: {
        marginTop: 20,        
    }
});

export default styles;