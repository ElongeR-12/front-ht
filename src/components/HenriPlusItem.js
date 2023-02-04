import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const HenriPlusItem = ({ henriPlus }) => {
  return (
    <>
      {henriPlus.map((item) => {
        const { id, image, title, text, description } = item;
        return (
          <View key={id}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: image }} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        );
      })}
    </>
  );
};

export default HenriPlusItem;
const styles = StyleSheet.create({
  imageContainer: { flex: 1, paddingVertical: 20 },
  image: { height: 110, resizeMode: "contain" },
  title: { fontSize: 23, fontWeight: "400" },
  text: { fontSize: 17, marginVertical: 20 },
  description: { fontSize: 17, marginBottom: 20 },
});
