import React from "react";
import { StyleSheet, Text, View } from "react-native";

const OfferItem = ({ offer }) => {
  return (
    <>
      {offer.map((elem) => {
        const { id, image, description } = elem;
        return (
          <View style={styles.container} key={id}>
            <View style={styles.image}>{image}</View>
            <View style={styles.flex}>
              <Text>{description}</Text>
            </View>
          </View>
        );
      })}
    </>
  );
};

export default OfferItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 20,
    paddingVertical: 20,
  },
  image: { flex: 1, justifyContent: "center" },
  flex: { flex: 3 },
});
