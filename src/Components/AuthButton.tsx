import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface AuthButtonProps {
  title: string;
  onPress: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#B8915B",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AuthButton;
