"use client";
import React, { useState } from "react";
import styled from "styled-components";

interface SearchProps {
  label: string;
  onSearch: (query: string) => void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start !important;
  gap: 1rem;
  width: 100%;
  padding: 0 !important;
  margin: 0;
`;

const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  opacity: 0.25;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 80%;
  max-width: 1000px;
  padding: 10px 20px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
  border-radius: 5px;
  margin: 0;

  &:focus {
    border-color: ${({ theme }) => theme.colors.textSecondary};
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
    <Container>
      <Input type="text" value={query} onChange={handleChange} placeholder="¿Qué quieres aprender hoy...?" />
      <Label>{label}</Label>
    </Container>
  );
};

export default Search;
