import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";


export default function RegisterForm() {
  return (
    <View style={styles.formContainer}>
      <Input placeholder="e-mail" containerStyle={styles.inputForm} />
      <Input
        placeholder="password"
        password={true}
        secureTextEntry={true}
        containerStyle={styles.inputForm}
      />
      <Input
        placeholder="repeat password"
        password={true}
        secureTextEntry={true}
        containerStyle={styles.inputForm}
      />
      <Button
        title="Join"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    margin:30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "100%",
  },
  btnRegister: {
    backgroundColor: "#00a680",
  },
});
