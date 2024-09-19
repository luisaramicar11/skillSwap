"use client";
import React, { useState } from "react";
import styled from "styled-components";

interface SearchProps {
  label: string;
  onSearch: (query: string) => void;
}

const Container = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 4rem auto;

  @media (max-width: 480px) {
    width: 50%;
    margin: 2rem auto;
  }

  @media (max-width: 768px) {
    width: 50%;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    width: 50%;
    margin: 2rem auto;
  }
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;

  &:focus {
    border-color: #0070f3;
    outline: none;
  }
`;


const Search: React.FC<SearchProps> = ({ label, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setQuery(newValue);
    onSearch(newValue);
  };

  return (
    <div>
      <label>{label}</label>
      <Input type="text" value={query} onChange={handleChange} placeholder="Buscar..." />
    </div>
  );
};

export default Search;