import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileMenuItem = ({ title, onPress }:any) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
      }}
    >
      <Text>{title}</Text>
      {/* <Ionicons name="chevron-forward" size={20} color="gray" /> */}
    </TouchableOpacity>
  );
};

export default ProfileMenuItem;
