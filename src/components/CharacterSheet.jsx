import React from "react";
import { useState } from "react";
import CharacterInfo from "./CharacterInfo.jsx";
import CharacterSkills from "./CharacterSkills.jsx";
import Characteristics from "./Characteristics.jsx";





function CharacterSheet() {
  return (
    <div className="character-sheet">
      <CharacterInfo />
      <CharacterSkills />
      <Characteristics />
    </div>
  );
}

export default CharacterSheet;
