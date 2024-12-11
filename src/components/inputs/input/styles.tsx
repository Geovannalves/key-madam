import { StyleSheet } from "react-native";
import { theme } from "../../../../theme";


const styles = StyleSheet.create({
    
    
    container: {
        flexDirection: 'column',                 
        width: '100%',                      
        height: 110,                         
        alignItems: 'flex-start',           
        justifyContent: 'flex-start',       
    },


    input: {
        width: '100%',                      
        height: 42,                         
        marginVertical: 5,                 
        borderWidth: 1,                     
        paddingHorizontal: 15,              
        borderRadius: 12,                   
        backgroundColor: theme.light.backgroundInputs, 
        borderColor: theme.light.placeholder,          
    },
});

export default styles;