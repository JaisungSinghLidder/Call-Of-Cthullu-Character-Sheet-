import React from "react";
import { useState } from "react";
import CharacterInfo from "./CharacterInfo.jsx";
import CharacterSkills from "./CharacterSkills.jsx";





function CharacterSheet() {
  return (
    <div className="character-sheet">
      <CharacterInfo />
      <CharacterSkills />
    </div>
  );
}

export default CharacterSheet;
