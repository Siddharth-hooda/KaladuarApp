import {View, Text, Image, ImageBackground} from 'react-native';
import BackButton from '../../Components/Profile/BackButton';
import ProfilePicture from '../../Components/Profile/ProfilePicture';
import InputField from '../../Components/Profile/InputField';
import PrimaryButton from '../../Components/Profile/PrimaryButton';

const EditProfileScreen = ({navigation}: any) => {
  return (
    <View style={{ backgroundColor: "#E3D1B8", height: "auto", flex: 1 }}>
      <ImageBackground
        source={require('../../../assets/Images/header-bg.png')}
        style={{padding: 20}}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
          }}>
          Edit Profile
        </Text>
        <ProfilePicture
          uri="https://randomuser.me/api/portraits/men/1.jpg"
          onPress={() => {}}
        />
      </ImageBackground>
      <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: '700', padding: 10 }}>
        First Name
      </Text>
      <InputField placeholder="First Name" value="Bruno Pham" />
      <Text style={{ fontWeight: '700', padding: 10 }}>
        Last Name 
      </Text>
      <InputField placeholder="Last name" value="Pham" />
      <Text style={{ fontWeight: '700', padding: 10 }}>
        Email
      </Text>
      <InputField
        placeholder="Email"
        value="thanhphamhdbk@gmail.com"
        editable={false}
      />
      </View>

      <View style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
      <PrimaryButton
        title="Save Changes"
        onPress={() => {}}
        style={{marginTop: 20}}
      />
      </View>
    </View>
  );
};

export default EditProfileScreen;
