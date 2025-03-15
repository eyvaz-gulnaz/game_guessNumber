import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/Title";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess {/* guess */}</Title>

      <View>
        <Text>higher or lower</Text>
        {/* +- */}
      </View>
      <View>{/* log rounds */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
