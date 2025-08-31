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
    const halfHP = hitPoints ? Math.floor(hitPoints / 2 ) : "";
    const quarterHP = hitPoints ? Math.floor(hitPoints / 4) : " ";
    const sanity = power || "";
    const halfSan = sanity ? Math.floor(sanity / 2) : "";






    
    
    
    return (
        <div className = "character-skills">

            <div className="core-stats">
                <div className = "roll-button-container">
                    <button onClick={rollAllStats}> Roll Stats</button>
                </div>
                <label>STR: <input type = "number" value={strength} onChange={e => setStrength(e.target.value)} /></label>
                <label>DEX: <input type = "number" value={dexterity} onChange={e => setDexterity(e.target.value)} /></label>
                <label>CON: <input type = "number" value={constitution} onChange={e => setConstitution(e.target.value)} /></label>
                <label>INT: <input type = "number" value={intelligence} onChange={e => setIntelligence(e.target.value)} /></label>
                <label>APP: <input type = "number" value={appearance} onChange={e => setAppearance(e.target.value)} /></label>
                <label>POW: <input type = "number" value={power} onChange={e => setPower(e.target.value)} /></label>
                <label>SIZ: <input type = "number" value={size} onChange={e => setSize(e.target.value)} /></label>
                <label>EDU: <input type = "number" value={education} onChange={e => setEducation(e.target.value)} /></label>
            </div>

        </div>
    );
}

export default CharacterSkills;
