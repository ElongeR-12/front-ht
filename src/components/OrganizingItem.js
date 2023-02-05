import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const OrganizingItem = ({ plan }) => {
  return (
    <View style={styles.container}>
      {plan.map((item) => {
        const { title, image, id, description } = item;
        return (
          <View style={styles.flex} key={id}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={image} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        );
      })}
      <Text style={styles.valeur}>
        *communauté signifie voyageurs qui partage les mêmes valeurs
      </Text>
    </View>
  );
};

export default OrganizingItem;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  flex: { flex: 1 },
  imageContainer: { alignItems: "center", paddingVertical: 30 },
  image: { height: 120, aspectRatio: 1 },
  title: { fontSize: 30, marginBottom: 10 },
  description: { fontSize: 14, fontWeight: "600" },
  valeur: { marginTop: 10 },
});
