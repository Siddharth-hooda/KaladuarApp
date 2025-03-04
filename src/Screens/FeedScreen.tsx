import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import PostCard from '../Components/PostCard';
import BottomNav from '../Components/BottomNav';
import Search from '../Components/Common/Search';

const FeedScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        {/* <TextInput
          placeholder="Discover posts from your circle..."
          style={styles.searchBar}
        /> */}
        <Search />
        <Image source={require('../../assets/Images/notification.png')} />
        <Image source={require('../../assets/Images/message.png')} />
      </View>

      <Text style={styles.latestUpdates}>Latest Updates</Text>

      <ScrollView style={styles.feed}>
        <PostCard
          profilePic={require('../../assets/Images/Avatar.png')}
          name="Thanh Pham"
          time="1 hour ago"
          postImage={require('../../assets/Images/Photo.png')}
          comments="20"
          likes="125"
        />
        <PostCard
          profilePic={require('../../assets/Images/Avatar.png')}
          name="Bruno"
          time="1 hour ago"
          postImage={require('../../assets/Images/Photo-2.png')}
          comments="15"
          likes="90"
        />
      </ScrollView>

      <BottomNav navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F4F3EE'},
  header: {padding: 20, backgroundColor: '#fff'},
  searchBar: {
    backgroundColor: '#EFEFEF',
    borderRadius: 25,
    padding: 10,
    paddingLeft: 15,
    fontSize: 14,
    // margin:30
  },
  latestUpdates: {
    backgroundColor: '#B8915B',
    color: '#fff',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    marginVertical: 10,
    margin: 20,
    borderRadius: 5,
  },
  feed: {paddingHorizontal: 15, marginBottom: 60},
  search: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 15,
    marginTop: 25,
  },
});

export default FeedScreen;
