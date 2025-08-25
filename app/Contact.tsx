import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>
      <Text style={styles.text}>
        You can reach us at contact@example.com or call us at (123) 456-7890.
      </Text>

      <Link href="/" style={styles.link}>Home Page</Link>
    </View>
  )
}

export default Contact

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