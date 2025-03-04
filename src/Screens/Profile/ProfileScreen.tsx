import {View, ScrollView, Image} from 'react-native';
import ProfileHeader from '../../Components/Profile/ProfileHeader';
import ProfileMenuItem from '../../Components/Profile/ProfileMenuItem';
import PrimaryButton from '../../Components/Profile/PrimaryButton';

const ProfileScreen = ({navigation}: any) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#8B6F47", flexDirection: "row" }}>
      <ScrollView style={{flex: 2, backgroundColor: '#FAF3E0', paddingRight: 40}}>
        <ProfileHeader
          name="Bruno Pham"
          email="thanhphamhdbk@gmail.com"
          profileUri="https://randomuser.me/api/portraits/men/1.jpg"
        />

        <View style={{paddingHorizontal: 20}}>
          <ProfileMenuItem title="Account Information" onPress={() => navigation.navigate("EditProfile")} />
          <ProfileMenuItem title="Shop" onPress={() => {}} />
          <ProfileMenuItem title="Orders" onPress={() => {}} />
          <ProfileMenuItem title="Collection" onPress={() => {}} />
          <ProfileMenuItem title="Activities" onPress={() => {}} />
          <ProfileMenuItem title="Account Security" onPress={() => {}} />
          <ProfileMenuItem title="About" onPress={() => {}} />
          <ProfileMenuItem title="Terms & Privacy" onPress={() => {}} />
        </View>

        <View style={{padding: 20}}>
          <PrimaryButton title="Log out" onPress={() => {}} />
        </View>
      </ScrollView>
      <View
        style={{flex: 1, position: 'absolute', right: 0, top: 0, bottom: 0}}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5',
          }}
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            overflow: 'hidden',
          }}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
