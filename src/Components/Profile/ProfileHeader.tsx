import { View, Text } from "react-native";
import ProfilePicture from "./ProfilePicture";

const ProfileHeader = ({ name, email, profileUri }:any) => {
  return (
    <View style={{ alignItems: "center", padding: 20 }}>
      <ProfilePicture uri={profileUri} />
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>{name}</Text>
      <Text style={{ color: "gray" }}>{email}</Text>
    </View>
  );
};

export default ProfileHeader;
