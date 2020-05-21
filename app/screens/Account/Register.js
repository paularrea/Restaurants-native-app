import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import RegisterForm from '../../components/Account/RegisterForm'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

export default function Register() {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../assets/img/loginLogo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={StyleSheet.viewForm}>
         <RegisterForm/>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
    marginTop: 20,
  },
  viewForm:{
      marginRight:40,
      marginLeft:40,
  }
});
