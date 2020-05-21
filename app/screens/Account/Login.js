import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/loginLogo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewContainer}>
        <Text>Login FORM</Text>
        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
      <Text>
        Social Login
      </Text>
    </ScrollView>
  );
}

const CreateAccount = () => {
    const navigation = useNavigation();

  return (
    <Text style={styles.textRegister}>
      Don't have an account yet?{" "}
      <Text
        onPress={() => navigation.navigate("register")}
        style={styles.btnRegister}
      >
        Sign up
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },

  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },

  textRegister: {
    marginTop: 15,
    marginRight: 10,
    marginLeft: 10,
  },

  btnRegister: {
    color: "#00a680",
    fontWeight: "bold",
  },

  divider: {
    backgroundColor: "#00a680",
    margin: 40,
  },
});
