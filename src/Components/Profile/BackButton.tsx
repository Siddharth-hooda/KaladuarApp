import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BackButton = ({ onPress }:any) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
      {/* <Ionicons name="arrow-back" size={24} color="black" /> */}
    </TouchableOpacity>
  );
};

export default BackButton;
