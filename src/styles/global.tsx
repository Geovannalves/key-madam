import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const global = StyleSheet.create({
    text: {
        color: theme.light.text,
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
        marginTop: 10,
        fontFamily: 'Text',
    },
    title: {
        color: theme.light.text,
        fontSize: 20,
        fontFamily: 'Title',
    },
    container: {
        width: '100%',                      
        paddingHorizontal: 20,              
        paddingTop: 40,
        backgroundColor: theme.light.background 
    }
});

export default global