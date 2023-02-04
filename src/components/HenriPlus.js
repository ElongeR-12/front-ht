import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HenriPlusItem from "./HenriPlusItem";

const HenriPlus = () => {
  const henriPlus = [
    {
      id: 1,
      image: "https://general-henri-1-paris.s3.fr-par.scw.cloud/avion.png",
      title: "Un outil intelligent",
      text: "Les activités sportives vous tentent-elles plus que la visite des musées ?",
      description:
        "Henri Trip optimise vos itinéraires en vous suggérant des activités à proximité qui vous correspondent.",
    },
    {
      id: 2,
      image:
        "https://general-henri-1-paris.s3.fr-par.scw.cloud/communeaut%C3%A9.png",
      title: "Une communauté",
      text: "Une activité qui mérite d’être répertoriée n’existe pas encore ?",
      description:
        "Créez-la et proposez la à Henri Trip. Nous vérifierons la pertinence de l’activité et nous l’ajouterons au référentiel.",
    },
    {
      id: 3,
      image: "https://general-henri-1-paris.s3.fr-par.scw.cloud/map.jpg",
      title: "Totalement gratuit",
      text: "Pourquoi payer pour découvrir le patrimoine français ?",
      description:
        "Notre volonté : la gratuité pour tous les adeptes de voyage. Soutenez notre cause, et parlez d’Henri Trip autour de vous.",
    },
  ];
  return (
    <View>
      <Text style={styles.detailsMore}>Henri Trip c'est aussi :</Text>
      <HenriPlusItem henriPlus={henriPlus} />
    </View>
  );
};

export default HenriPlus;
const styles = StyleSheet.create({
  detailsMore: {
    color: "#062e70",
    fontSize: 25,
    fontWeight: "500",
  },
});
