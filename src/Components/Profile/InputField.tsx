import { TextInput, View } from "react-native";

const InputField = ({ placeholder, value, onChangeText, editable = true }:any) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        style={{
          backgroundColor: "#f5f5f5",
          padding: 10,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default InputField;
