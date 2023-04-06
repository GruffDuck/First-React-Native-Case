import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
} from "react-native";
import data from "./data";
const viewWidth = Dimensions.get("window").width;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.title}>Show Me The Coin</Text>
        <Text style={styles.time}>29/10/2023, 1:20:23 PM</Text>

        <Text
          style={[
            styles.navbuttons,
            { alignSelf: "flex-start", paddingLeft: 20 },
          ]}
        >
          Left
        </Text>
        <Text
          style={[
            styles.navbuttons,
            { alignSelf: "flex-end", paddingRight: 20 },
          ]}
        >
          
          Right
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.icon}></View>
            <Text style={styles.nameTxt}>{item.name}</Text>
            <Text style={styles.volume}>{item.volume}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.rank}>#{item.id}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  navbar: {
    backgroundColor: "#FFB4B4",
    height: 100,
    width: "100%",
    justifyContent: "center",
  },
  title: {
    paddingTop: 15,
    color: "black",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
  navbuttons: {
    position: "absolute",
    color: "black",
    fontSize: 15,
    fontWeight: "400",
    paddingTop: 35,
  },
  time: {
    position: "absolute",
    color: "black",
    fontSize: 13,
    fontWeight: "400",
    paddingTop: 60,
    alignSelf: "center",
    textAlign: "center",
  },
  itemContainer: {
    width: viewWidth,
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  icon: {
    marginTop: 5,
    width: 50,
    height: 50,
    backgroundColor: "red",
    borderRadius: 25,
    alignSelf: "flex-start",
  },
  nameTxt: {
    position: "absolute",
    color: "black",
    marginLeft: 80,
    marginTop: 15,
    fontSize: 19,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  volume: {
    position: "absolute",
    color: "black",
    marginLeft: 80,
    marginTop: 40,
    fontSize: 15,
    fontWeight: "300",
    alignSelf: "flex-start",
  },
  price: {
    position: "absolute",
    color: "black",
    marginLeft: 80,
    marginTop: 60,
    fontSize: 17,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  rank: {
    color: "black",
    marginTop: -60,
    textAlign: "center",
    fontSize: 45,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
});
