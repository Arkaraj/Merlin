import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colours from "../config/colours";

const OptionCard = ({ repo }: { repo: any }) => {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      style={styles.optionContainer}
      onPress={() => setSelected(!selected)}
    >
      <View style={styles.optionTitles}>
        <Text style={styles.optionText}>{repo.full_name}</Text>
        <Text style={styles.optionText}>{repo.description}</Text>
      </View>
      <View style={styles.radio}>
        {selected ? (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              borderColor: colours.correct,
              backgroundColor: colours.correct,
            }}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    padding: 10,
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: colours.greyBorderColour,
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 7,
  },
  optionText: {
    color: colours.white,
  },
  optionTitles: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 1,
  },
  radio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colours.greyBorderColour,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OptionCard;
