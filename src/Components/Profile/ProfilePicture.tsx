import { Image, TouchableOpacity } from "react-native";

const ProfilePicture = ({ uri, onPress }:any) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ alignSelf: "center" }}>
      <Image 
        source={{ uri }} 
        style={{ width: 80, height: 80, borderRadius: 40 }}
      />
    </TouchableOpacity>
  );
};

export default ProfilePicture;
