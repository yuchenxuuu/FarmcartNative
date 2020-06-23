/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { useState } from "react";
import { StyleSheet, Text, Image } from "react-native";
import Screen from "../../components/Screen";
import Button from "../../components/buttons/Button";
import AppTextInput from "../../components/AppTextInput";

function SignUp(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();

  navigateTo = screen => () => {
    const {navigation} = props;
    navigation.navigate(screen);
  };
 
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}> Farm Cart </Text>
      <Image style={styles.logo} source={require("../../assets/img/icon.jpg")} />

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="name"
        //keyboardType="name"
        placeholder="Name"
        textContentType="name"
        onChangeText={(text) => setName(text)}
      />

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        placeholder="Email"
        textContentType="emailAddress"
        onChangeText={(text) => setEmail(text)}
      />

      <AppTextInput
        autoCapitaliza="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Password"
        SecureTextEntry
        textContentType="password"
        onChangeText={(text) => setPassword(text)}
      />

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="address"
        //keyboardType="address"
        placeholder="Address"
        //textContentType="address"
        onChangeText={(text) => setAddress(text)}
      />

      <Button  
        onPress={this.navigateTo('HomeNavigator')}
       title = "Create an account" />

    </Screen>
  );
}

const styles = StyleSheet.create({
  text: {
    height: 80,
    width: 170,
    marginBottom: -30,
    marginTop: 50,
    alignSelf: "center",
    fontSize: 35,
    fontWeight: "bold",
    color: "#423838",
  },
  logo: {
    height: 40,
    width: 80,
    marginBottom: 50,
    //marginTop: 0,
    alignSelf: "center",
  },
  container: {
    padding: 10,
  },
});

export default SignUp;
