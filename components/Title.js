import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../screens/constants/colors";

export default function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
