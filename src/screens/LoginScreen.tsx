import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Input from "../components/inputs/input"; // Importe o componente Input

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "user@example.com" && password === "password123") {
      Alert.alert("Login bem-sucedido!");
    } else {
      Alert.alert("Credenciais inválidas!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Input 
        title="Email" 
        placeholder="Digite seu email" 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address" 
        autoCapitalize="none" 
      />

      <Input 
        title="Senha" 
        placeholder="Digite sua senha" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
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
    paddingVertical: 10, // Altura do botão
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
