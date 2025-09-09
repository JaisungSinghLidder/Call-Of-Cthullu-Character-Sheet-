import React from "react";
import { useState } from "react";
import CharacterInfo from "./CharacterInfo.jsx";
import CharacterSkills from "./CharacterSkills.jsx";
import Characteristics from "./Characteristics.jsx";
import { CharacterProvider } from "./CharacterContext";






function CharacterSheet() {
  return (
    <div className="character-sheet">
      <CharacterProvider>
        <CharacterInfo />
        <CharacterSkills />
        <Characteristics />
      </CharacterProvider>
    </div>
  );
}

export default CharacterSheet;
