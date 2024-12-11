import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PasswordItemProps {
  appName: string;
  password: string;
}

const PasswordItem: React.FC<PasswordItemProps> = ({ appName, password }) => (
  <View style={styles.item}>
    <Text style={styles.appName}>{appName}</Text>
    <Text>{password}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
  },
  appName: {
    fontWeight: 'bold',
  },
});

export default PasswordItem;
