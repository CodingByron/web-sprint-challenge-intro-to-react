// Write your Character component here
import React from "react";
import styled from "styled-components";

export default function Character({
  name,
  height,
  eye_color,
  hair_color,
  gender,
}) {
  const StyledCharacter = styled.div`
    padding: 16px;
    margin: 16px;
    min-width: 260px;
    background: silver;
  `;

  const StyledName = styled.h3`
    color: white;
  `;

  const StyledAttributes = styled.p`
    color: royalblue;
  `;
  return (
    <StyledCharacter className="character">
      <StyledName>Name: {name}</StyledName>
      <StyledAttributes>Height: {height}cm</StyledAttributes>
      <StyledAttributes>Eye Color: {eye_color}</StyledAttributes>
      <StyledAttributes>Hair Color: {hair_color}</StyledAttributes>
      <StyledAttributes>Gender: {gender}</StyledAttributes>
    </StyledCharacter>
  );
}
