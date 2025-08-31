import React from "react";
import { useState } from "react";
import "./CharacterSkills.css";

function CharacterSkills() {
    const [strength, setStrength] = useState("");
    const [dexterity, setDexterity] = useState("");
    const [constitution, setConstitution] = useState("");
    const [intelligence, setIntelligence] = useState("");
    const [appearance, setAppearance] = useState("");
    const [power, setPower] = useState("");
    const [size, setSize] = useState("");
    const [education, setEducation] = useState("");

    //using these to generate the stats 
    const rollStat = () => Math.floor((Math.random() * 18 + 3) *5);
    const rollEDU = () => Math.floor((Math.random() * 12 + 2) * 5);

    //now applying those stats
    const rollAllStats = () => {
        setStrength(rollStat());
        setDexterity(rollStat());
        setConstitution(rollStat());
        setIntelligence(rollStat());
        setAppearance(rollStat());
        setPower(rollStat());
        setSize(rollStat());
        setEducation(rollEDU());  
    };

    //here will set the stats if they exist
    //these stats are derived from these core stats
    const hitPoints = constitution && size ? Math.floor((constitution + size) / 10) : ""; 
    const halfHP = hitPoints ? Math.Floor(hitPoints / 2 ) : "";
    const quarterHP = hitPoints ? Nath.floor(hitPoints / 4) : " ";
    const sanity = power || "";
    const halfSan = sanity ? Math.floor(sanity / 2) : "";

    




    
    
    
    return (
        <div>

        </div>
    );
}

export default CharacterSkills;
