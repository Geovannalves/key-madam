import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Input from "../components/inputs/input"; 
import keys from '../mock/keys';
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native'; 
import { RoutesParams } from "../navigation/routesParams";
import { StackNavigationProp } from "@react-navigation/stack";

type NavigationProps = StackNavigationProp<RoutesParams>;

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigation = useNavigation<NavigationProps>(); 

  const handleLogin = () => {
    const user = keys.find(user => user.username === username);

    if (user && user.password === password) {
      login();
      Alert.alert("Login bem-sucedido!");
      navigation.navigate('Home'); 
    } else {
      Alert.alert("Credenciais inválidas!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Input 
        title="username"
        placeholder="Digite seu email"
        value={username}
        onChangeText={setUsername}
        keyboardType="email-address"
        autoCapitalize="none" error={undefined}      
      />

      <Input 
        title="Senha"
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry error={undefined}      
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 75,
    backgroundColor: "#02111B",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    color: '#ffffff',
  },
  button: {
    backgroundColor: "#00728F",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10, 
    paddingHorizontal: 100,
    borderRadius: 15,
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
