import React from 'react';
import { Button } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ title, onPress }) => (
  <Button title={title} onPress={onPress} />
);

export default CustomButton;
