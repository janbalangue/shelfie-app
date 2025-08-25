import { Image, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import Logo from "../assets/img/shelfie-logo.png";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>The #️⃣ 1️⃣</Text>
      <Text style={{ ...styles.title, marginTop: 10, marginBottom: 30 }}>
        Reading List App 📖 ✅
      </Text>

      <View style={styles.card}>
        <Text style={styles.title}>
          Heyyy 👋
        </Text>
      </View>

      <Link href="/About" style={styles.link}>About Page</Link>
      <Link href="/Contact" style={styles.link}>Contact Page</Link>
    </View>
  );
};

export default Home;

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
  card: {
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 10,
    boxShadow: "0 2px 4px rgba(0,0,0,0.8)",
    marginBottom: 10,
  },
  img: {
    marginVertical: 20,
  },
  link: {
    marginVertical: 10,
    color: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  });
