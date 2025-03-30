import { StyleSheet, View } from "react-native";
import React from "react";
import Colors from "../../screens/constants/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary800,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    elevation: 4,
    borderRadius: 8,
    alignItems: "center",
  },
});
