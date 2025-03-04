import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

const ChallengeScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F5F2E9" }}>
      {/* Header */}
      <Image source={require("../../assets/Images/gurujiBackground.png")} style={{ width: "100%", height: 250 }} />
      
      {/* Title */}
      <View style={{ alignItems: "center", marginTop: -20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18, backgroundColor: "white", paddingHorizontal: 20, borderRadius: 10, paddingVertical: 10 }}>BLACK & WHITE PHOTOGRAPHY</Text>
      </View>

      {/* Details Section */}
      <View style={{ margin: 20 }}>
      <View style={{ padding: 20 }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 5, marginVertical: 10 }}>
        <Text>Deadline</Text>
        <Text>30 days left</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 5, marginVertical: 10 }}>
        <Text>Prize</Text>
        <Text>$100.00</Text>
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={{ backgroundColor: "#C19A5B", padding: 15, borderRadius: 10, alignItems: "center" }}>
        <Text style={{ color: "white", fontWeight: "bold" }}>SUBMIT YOUR SHOT</Text>
      </TouchableOpacity>

      <Text style={{ textAlign: "center", marginTop: 10 }}>350 people have joined this challenge</Text>

      {/* Challenge Description */}
      <View style={{ padding: 20 }}>
        <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', gap: 5, justifyContent: 'center', margin: 15 }}>
        <Text style={{ fontWeight: '900', color: '#C19A5B' }}>.</Text>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Challenge</Text>
        <Text style={{ fontWeight: '900', color: '#C19A5B' }}>.</Text>
        </View>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
      </View>

      {/* Inspiration Section */}
      <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', gap: 5, justifyContent: 'center', margin: 15 }}>
        <Text style={{ fontWeight: '900', color: '#C19A5B' }}>.</Text>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Inspiration</Text>
        <Text style={{ fontWeight: '900', color: '#C19A5B' }}>.</Text>
        </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Image source={require("../../assets/Images/boysideface.png")} style={{ width: 140, height: 140, borderRadius: 10 }} />
        <Image source={require("../../assets/Images/boyfrontface.png")} style={{ width: 140, height: 140, borderRadius: 10 }} />
      </View>

      {/* Trending Section */}
      <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', gap: 5, justifyContent: 'center', margin: 15 }}>
        <Text style={{ fontWeight: '900', color: '#C19A5B' }}>.</Text>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Trending</Text>
        <Text style={{ fontWeight: '900', color: '#C19A5B' }}>.</Text>
        </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Image source={require("../../assets/Images/girlface.png")} style={{ width: 140, height: 140, borderRadius: 10 }} />
        <Image source={require("../../assets/Images/girlface.png")} style={{ width: 140, height: 140, borderRadius: 10 }} />
      </View>
      </View>
    </ScrollView>
  );
};

export default ChallengeScreen;
