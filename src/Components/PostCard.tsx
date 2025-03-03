import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PostCard = ({ profilePic, name, time, postImage, comments, likes }: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={profilePic} style={styles.profileImage} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Image source={postImage} style={styles.postImage} />
      <View style={styles.footer}>
        <Text style={styles.icon}>➕</Text>
        <Text style={styles.count}>{comments}</Text>
        <Text style={styles.icon}>💬</Text>
        <Text style={styles.count}>{likes}</Text>
        <Text style={styles.icon}>❤️</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", borderRadius: 10, marginBottom: 15, padding: 10 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  profileImage: { width: 30, height: 30, borderRadius: 15, marginRight: 10 },
  name: { fontWeight: "bold", flex: 1 },
  time: { color: "gray", fontSize: 12 },
  postImage: { width: "100%", height: 200, borderRadius: 10 },
  footer: { flexDirection: "row", alignItems: "center", padding: 10 },
  icon: { fontSize: 16, marginHorizontal: 5 },
  count: { fontSize: 14, marginRight: 10 },
});

export default PostCard;
