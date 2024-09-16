"use client"
import Modal from "../../components/modals/ModalSafety"
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>Modal Example</h1>
      
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default Home;
