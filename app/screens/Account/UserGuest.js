import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function UserGuest() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.viewBody} centerContent={true}>
      <Image
        source={require("../../../assets/img/original.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Check your profile</Text>
      <Text style={styles.description}>
        How would you describe your best restaurant? Find the best restaurants,
        vote which one you liked the most and comment how was your experience.
      </Text>
      <View style={styles.viewBtn}>
        <Button
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.btnContainer}
          title="See your profile"
          onPress={() => navigation.navigate('login')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  buttonStyle: {
    backgroundColor: "#00a680",
  },
  buttonContainer: {
    width: "70%",
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
});
