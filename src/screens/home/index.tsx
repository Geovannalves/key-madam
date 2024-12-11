import React, { useContext } from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import PasswordItem from '../../components/PasswordItem';

const HomeScreen = () => {
  const { isAuthenticated, passwords } = useContext(AuthContext);

  if (!isAuthenticated) {
    return (
      <SafeAreaView style={styles.center}>
        <Text>Por favor, faça login para acessar as senhas.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Senhas dos Aplicativos:</Text>
      <ScrollView>
        {passwords.map((item, index) => (
          <PasswordItem key={index} appName={item.appName} password={item.password} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
