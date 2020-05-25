import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/validations";
import { size, isEmpty } from "lodash";
import * as firebase from "firebase";
import {useNavigation, NavigationHelpersContext} from '@react-navigation/native';

export default function RegisterForm(props) {
  const { toastRef } = props;
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState();
  const [showRepeatPassword, setShowRepeatPassword] = useState();
  const [formData, setFormData] = useState(defaultFormValue());

  const onSubmit = () => {
    console.log(size(formData.password));
    if (
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.repeatPassword)
    ) {
      toastRef.current.show("All fields are required");
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show("Incorrect email");
    } else if (formData.password !== formData.repeatPassword) {
      toastRef.current.show("Passwords doesn't match");
    } else if (size(formData.password) <= 6) {
      toastRef.current.show("Password must be longer than 6 characters");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          navigation.navigate("account")
        })
        .catch(() => {
          toastRef.current.show("the email is already in use");
        });
        
    }
  };

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="e-mail"
        onChange={(e) => onChange(e, "email")}
        containerStyle={styles.inputForm}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="password"
        onChange={(e) => onChange(e, "password")}
        password={true}
        secureTextEntry={showPassword ? false : true}
        containerStyle={styles.inputForm}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off" : "eye"}
            iconStyle={styles.iconRight}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Input
        placeholder="repeat password"
        onChange={(e) => onChange(e, "repeatPassword")}
        password={true}
        secureTextEntry={showRepeatPassword ? false : true}
        containerStyle={styles.inputForm}
        rightIcon={
          <Icon
            type="material-community"
            name={showRepeatPassword ? "eye-off" : "eye"}
            iconStyle={styles.iconRight}
            onPress={() => setShowRepeatPassword(!showRepeatPassword)}
          />
        }
      />
      <Button
        title="Join"
        onPress={onSubmit}
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
      />
    </View>
  );
}

const defaultFormValue = () => {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
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
  iconRight: {
    color: "#c1c1c1",
  },
});
