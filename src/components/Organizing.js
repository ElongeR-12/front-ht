import React from "react";
import OrganizingItem from "./OrganizingItem";

const Organizing = () => {
  const plan = [
    {
      id: 1,
      title: "Planifiez",
      image: "https://www.henritrip.fr/static/media/imageLogo1.27601faa.png",
      description:
        "Terminées les planifications longues et complexes, créez des itinéraires sur-mesure en France.",
    },
    {
      id: 2,
      title: "Profitez",
      image: "https://www.henritrip.fr/static/media/imageLogo2.7b03e7a9.png",
      description:
        "Bénéficiez de nos suggestions personnalisées parmi plus de 100 000 références.",
    },
    {
      id: 3,
      title: "Partagez",
      image: "https://www.henritrip.fr/static/media/imageLogo3.3bc312e6.png",
      description:
        "Entrez en contact avec les sites touristiques, échangez vos bons plans avec les autres voyageurs.",
    },
  ];
  return <OrganizingItem plan={plan} />;
};

export default Organizing;
