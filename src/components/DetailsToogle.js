import React from "react";
import { StyleSheet, View } from "react-native";
import DetailsContainer from "./DetailsContainer";
const DetailsToogle = ({ seeMore }) => {
  return (
    <View style={styles.container}>{seeMore && <DetailsContainer />}</View>
  );
};

export default DetailsToogle;
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
