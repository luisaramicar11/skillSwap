"use client"
import React from 'react';

import ProfileCard from '../../components/cards/CardMatchProfile';
import DetailUser from '../../components/cards/CardDetailUser';

// Tipado de la persona
interface Person {
  name: string;
  role: string;
  image: string;
}

const people: Person[] = [
  { name: 'Alicia Keys', role: 'Back-end Software Developer | Junior', image: "https://hips.hearstapps.com/hmg-prod/images/alicia_keys_michael_muller_nbc_nbcu_getty_images_592222308_profile.jpg" },
  { name: 'John Doe', role: 'Front-end Developer | Senior', image: "https://www.billboard.com/wp-content/uploads/2022/01/Laura-Pausini-credit-OMAR-CRUZ-2022-billboard-1548.jpg?w=942&h=623&crop=1" },
];

const DetailAboutUser = () => {

  
  return (
    <div>
     
      <DetailUser/>
    </div>
  );
};

export default DetailAboutUser;