import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../screens/constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    margin: 24,
    padding: 24,
  },
  numberText: {
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
    fontSize: 36,
  },
});
