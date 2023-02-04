import React from "react";
import { Text, View, StyleSheet } from "react-native";
const HTDescription = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>
        Henri Trip, l'outil made in France pour préparer votre Road Trip*
      </Text>
      <Text style={styles.textInfo}>
        *roadtrip signifie circuits touristiques
      </Text>
      <Text style={styles.invite}>
        Découvrez l'ensemble des sites touristiques présents en France, créez
        des itinéraires de voyage uniques et partagez-les avec la communauté
        d'Henri Trip!
      </Text>
    </View>
  );
};

export default HTDescription;
const styles = StyleSheet.create({
  container: { padding: 20 },
  textHeader: { color: "#062e70", fontSize: 30 },
  textInfo: { marginVertical: 10 },
  invite: { fontSize: 15 },
});
