import React from "react";
import { useState } from "react";
import CharacterInfo from "./CharacterInfo";
import CharacterSkills from "./CharacterSkills";





function CharacterSheet() {
  return (
    <div className="character-sheet">
      <CharacterInfo />
      <CharacterSkills />
    </div>
  );
}

export default CharacterSheet;
