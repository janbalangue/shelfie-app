import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../assets/img/shelfie-logo.png";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>The #️⃣ 1️⃣</Text>
      <Text style={{ ...styles.title, marginTop: 10, marginBottom: 30 }}>
        Reading List App 📖 ✅
      </Text>

      <View style={styles.card}>
        <Text style={styles.title}>
          Hello, this is an enthusiastic card! 😃
        </Text>
      </View>
    </View>
  );
};

export default App;

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
  },
  img: {
    marginVertical: 20,
  },
});
