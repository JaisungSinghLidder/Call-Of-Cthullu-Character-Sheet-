import { useState } from "react";
import CharacterInfo from "./CharacterInfo"
import Stats from "./Stats"
import Skills from "./CharacterSkills"
import Combat from "./Combat"



function CharacterSheet()
{
    return (
        <div className = "character-sheet">
            <CharacterInfo /> 
            <Stats /> 
            <Skills /> 
            <Combat /> 
        </div>
    );
}


export default CharacterSheet; 