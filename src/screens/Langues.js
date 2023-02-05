import React from "react";
import { Text, StyleSheet, View } from "react-native";
const Langues = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Langues: Todo</Text>
    </View>
  );
};

export default Langues;
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 25, fontWeight: "500" },
});
