import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <Text style={styles.text}>
        This is a simple reading list app built with React Native and Expo.
      </Text>

      <Link href="/" style={styles.link}>Home Page</Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    color: "#ccc",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  link: {
    marginVertical: 10,
    color: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  }
});
