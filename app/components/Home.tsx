import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import colours from "../config/colours";

const Home = () => {
  return (
    <View>
      <View style={styles.coolBackground}>
        <Text></Text>
      </View>
      <View style={styles.body}>
        <View style={styles.card}>
          {/* Image */}
          <View style={styles.cardLeft}>
            <Image
              source={require("../assets/quiz.png")}
              style={styles.image}
            ></Image>
          </View>
          <View style={styles.cardRight}>
            <Text style={styles.cardTextHeading}>Merlin</Text>
            <Text style={styles.cardText}>
              Placeholder stuff Lorem ipsum dolor sit amet consectetur.
            </Text>
          </View>
        </View>
        <View style={styles.heading}>
          <View>
            <Text style={styles.boldText}>Select The Language</Text>
          </View>
          <View>
            <Pressable
              onPress={() => {
                console.log("Pressed Instructions");
              }}
              style={styles.pressable}
            >
              <Text style={styles.pressableText}>Instructions</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <Text>Drop Down Languages</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log("Pressed Play button");
          }}
          style={styles.primaryButton}
        >
          <Text style={styles.primaryButtonText}>Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coolBackground: {
    backgroundColor: "#2A2B32",
    padding: "14%",
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    // position: "absolute",
    zIndex: 2,
  },
  body: {
    flex: 1,
    transform: [
      {
        translateY: -100,
      },
    ],
    paddingHorizontal: 20,
    zIndex: 3,
  },
  card: {
    flex: 1,
    backgroundColor: colours.black,
    borderRadius: 15,
    marginVertical: 20,

    flexDirection: "row",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    borderRadius: 15,
  },
  cardLeft: {
    flex: 1,
    // marginLeft: 15,
  },
  cardRight: {
    flex: 1,
    flexDirection: "column",
    padding: 25,
  },
  cardTextHeading: {
    color: colours.white,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 2,
  },
  cardText: {
    color: colours.grey,
    fontSize: 14,
  },
  heading: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  boldText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pressable: {
    backgroundColor: "#D0F1F8",
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
  },
  pressableText: {
    color: colours.primary,
  },
  primaryButton: {
    backgroundColor: colours.primary,
    textAlign: "center",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: "25%",
    marginVertical: "10%",
  },
  primaryButtonText: {
    color: colours.white,
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 1,
  },
});

export default Home;
