import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";

const DetailsButton = ({ setSeeMore, seeMore }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setSeeMore((prev) => !prev)}
      >
        <Text style={styles.color}>
          {seeMore ? "Réduire" : "En savoir plus"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsButton;
const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 20 },
  button: {
    backgroundColor: "#062e70",
    marginBottom: 40,
    width: Dimensions.get("screen").width / 2,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 50,
  },
  color: { color: "#ffffff" },
});
