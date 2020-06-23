/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from "react";
import { Button,Link, View, ImageBackground, StyleSheet, Text } from "react-native";


export default function SearchScreen(props) {
  return (
    <View
    >
      <Text style={styles.text}>Search what you need!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Search" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
