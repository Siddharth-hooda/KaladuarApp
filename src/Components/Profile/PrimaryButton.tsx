import { TouchableOpacity, Text } from "react-native";

const PrimaryButton = ({ title, onPress }:any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#C4A265",
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
