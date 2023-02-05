import React from "react";
import OrganizingItem from "./OrganizingItem";
const planifier = require("../../assets/images/planifier.png");
const profiter = require("../../assets/images/profiter.png");
const partager = require("../../assets/images/partager.png");

const Organizing = () => {
  const plan = [
    {
      id: 1,
      title: "Planifiez",
      image: planifier,
      description:
        "Terminées les planifications longues et complexes, créez des itinéraires sur-mesure en France.",
    },
    {
      id: 2,
      title: "Profitez",
      image: profiter,
      description:
        "Bénéficiez de nos suggestions personnalisées parmi plus de 100 000 références.",
    },
    {
      id: 3,
      title: "Partagez",
      image: partager,
      description:
        "Entrez en contact avec les sites touristiques, échangez vos bons plans avec les autres voyageurs.",
    },
  ];
  return <OrganizingItem plan={plan} />;
};

export default Organizing;
