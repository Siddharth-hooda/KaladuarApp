import React, {useState} from "react"
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
// import { Ionicons } from "@expo/vector-icons"  // For the eye icon

interface InputFieldProps {
  placeholder: string;
  isPassword?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, isPassword }:any) => {
  const [secureText, setSecureText] = useState(isPassword);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#888"
        secureTextEntry={secureText}
        style={styles.input}
      />
      {isPassword && (
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          {/* <Ionicons
            name={secureText ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="#888"
          /> */}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f3eb",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
});

export default InputField;
