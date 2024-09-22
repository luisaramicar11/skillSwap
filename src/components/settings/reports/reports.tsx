"use client"
import Modal from "../../modals/ModalReport"
import React, { useState } from 'react';

const Reports: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>Reportes</h1>
      
      <button onClick={openModal}>Abrir </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default Reports;