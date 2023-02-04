import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HenriPlus from "./HenriPlus";
import Offer from "./Offer";

const DetailsContainer = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.detailsMore}>
          Vos itinéraires et visites dans votre proche!
        </Text>
        <Text style={{ fontSize: 15, marginVertical: 20 }}>
          Adoptez ce compagnon de voyage 2.0
        </Text>
        <Offer />
        <HenriPlus />
      </View>
    </>
  );
};

export default DetailsContainer;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c5c5c5",
    padding: 25,
    borderRadius: 20,
  },
});
