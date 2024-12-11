import { Text, TextInput, TextInputProps, View } from "react-native";
import { forwardRef } from "react";
import styles from "./styles";
import global from '../../../styles/global';

type InputProps = TextInputProps & {
    title: string; 
    error: string | undefined;
};

const Input = forwardRef<TextInput, InputProps>(({ title, error, ...rest }, ref) => {
    const invalid = !!error;

    return (
        
        <View style={styles.container}>
            
            
            <Text style={global.text}>{title}</Text>
            
            
            <TextInput style={[styles.input, global.text]} ref={ref} {...rest}/>
            { invalid && <Text style={{color: "red"}}>{error}</Text>}
        </View>
    );
});

export default Input;