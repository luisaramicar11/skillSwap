"use client";
import React from "react";

import ProfileCard from "../../components/cards/CardMatchProfile";
import DetailUser from "../../components/cards/CardDetailUserNoMatch";
import DetailUserMatch from "../../components/cards/CardDetailUserMatch";
import { Div } from "./DetailStyling";

// Tipado de la persona
interface Person {
  name: string;
  role: string;
  image: string;
}

const people: Person[] = [
  {
    name: "Alicia Keys",
    role: "Back-end Software Developer | Junior",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/alicia_keys_michael_muller_nbc_nbcu_getty_images_592222308_profile.jpg",
  },
  {
    name: "John Doe",
    role: "Front-end Developer | Senior",
    image:
      "https://www.billboard.com/wp-content/uploads/2022/01/Laura-Pausini-credit-OMAR-CRUZ-2022-billboard-1548.jpg?w=942&h=623&crop=1",
  },
];

const DetailAboutUser = () => {
  return (
    <Div>
      <ProfileCard
        name="Martín Elías"
        skills={["JavaScript", "HTML", "Adobe"]}
        rating={4.1}
        rejected={["Juliana Mina"]}
        accepted={["Andrea Mira"]}
        pending={["Claudio Ponce"]}
        inbox={0}
      />
      <DetailUserMatch />
    </Div>
  );
};

export default DetailAboutUser;
