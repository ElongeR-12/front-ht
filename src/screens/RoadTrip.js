import React from "react";
import { Text, StyleSheet, View } from "react-native";
const Roadtrip = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Road trip: Need Backend</Text>
    </View>
  );
};

export default Roadtrip;
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 25, fontWeight: "500" },
});
