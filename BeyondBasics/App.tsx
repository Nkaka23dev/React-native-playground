import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const app = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
  },
});
