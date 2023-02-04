import React from "react";
import { View } from "react-native";
import OfferItem from "./OfferItem";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
const Offer = () => {
  const offer = [
    {
      id: 1,
      image: <Fontisto name="app-store" size={25} color="blue" />,
      description:
        "Accédez à Henri Trip depuis votre navigateur sans application à télécharger.",
    },
    {
      id: 2,
      image: <AntDesign name="pdffile1" size={25} color="red" />,
      description:
        "Enregistrez vos itinéraires en format PDF directement depuis notre plateforme et imprimez les.",
    },
    {
      id: 3,
      image: <Feather name="wifi-off" size={25} color="blue" />,
      description:
        "Pas besoin d'une connexion internet pour profiter d'une visite ou d'une activité.",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <OfferItem offer={offer} />
    </View>
  );
};

export default Offer;
