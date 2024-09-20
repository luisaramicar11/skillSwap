"use client";
import React, { useState, useEffect } from "react";
import SliderCard from "../../../components/sliders/slide";
import MatchCard from "../../../components/cards/CardMatch";
import { DivMatch } from "./MatchStyling";
import ProfileCard from "@/src/components/cards/CardMatchProfile";

// Tipado de la persona
interface Person {
  id: number;
  fullName: string;
  jobTitle: string;
  qualification: number;
  countMatches: number;
  description: string;
  abilities: string;
}

const Match = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await fetch(
          "https://skillswapriwi.azurewebsites.net/api/UsersGet/ForImages",
          {
            method: "GET",
            headers: {
              Accept: "*/*",
            },
          }
        );
        const data = await response.json();
        setPeople(data);
      } catch (error) {
        console.error("Error fetching people:", error);
      }
    };
    fetchPeople();
  }, []);

  const handlePass = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
  };

  if (people.length === 0) return <p>Loading...</p>;

  return (
    <DivMatch>
    <ProfileCard 
      name="Martín Elías"
      skills={["JavaScript", "HTML", "Adobe"]}
      rating={4.1}
      rejected={["Juliana Mina"]}
      accepted={["Andrea Mira"]}
      pending={["Claudio Ponce"]}
      inbox={["Carolina Rojas"]}
      />
      <SliderCard person={people[currentIndex]} onPass={handlePass} />
      <MatchCard
        description={people[currentIndex].description}
        skills={people[currentIndex].abilities.split(",")}
        rating={people[currentIndex].qualification}
      />
    </DivMatch>
  );
};

export default Match;
