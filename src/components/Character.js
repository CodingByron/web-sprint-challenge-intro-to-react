// Write your Character component here
import React from "react";

export default function Character({
  name,
  height,
  eye_color,
  hair_color,
  gender,
}) {
  return (
    <div className="character">
      <h2>Name: {name}</h2>
      <p>Height: {height}cm</p>
      <p>Eye Color: {eye_color}</p>
      <p>Hair Color: {hair_color}</p>
      <p>Gender: {gender}</p>
    </div>
  );
}
