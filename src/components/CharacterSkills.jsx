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


    const [currentHP, setCurrentHP] = useState(null);
    const [changeAmount, setChangeAmount] = useState("");


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
    const quarterHP = hitPoints ? Math.floor(hitPoints / 4) : "";
    const sanity = power || "";
    const halfSan = sanity ? Math.floor(sanity / 2) : "";

     React.useEffect(() => {
        if (hitPoints) setCurrentHP(hitPoints);
    }, [hitPoints]);

    const handleHeal = () => {
        if (changeAmount)
        {
            setCurrentHP(prev => Math.min(hitPoints, prev + Number(changeAmount)));
            setChangeAmount("");
        }
    };

    const handleDamage = () => {
        if (changeAmount)
        {
            setCurrentHP(prev => Math.max(0, prev - Number(changeAmount)));
            setChangeAmount("");
        }
    };




    
    
    
    return (

        <>

        <div className = "roll-button-container">
            <button onClick={rollAllStats}> Roll Stats</button>
        </div>



        <div className = "character-skills">


            <div className="core-stats">

                <div className="stat-block">
                <label>STR: <input type = "number" value={strength} onChange={e => setStrength(e.target.value)} /></label>
                <p>½: {strength ? Math.floor(strength / 2) : ""}, ¼: {strength ? Math.floor(strength / 4) : ""}</p>
                </div>

                <div className="stat-block">
                <label>DEX: <input type = "number" value={dexterity} onChange={e => setDexterity(e.target.value)} /></label>
                <p>½: {dexterity ? Math.floor(dexterity / 2) : ""}, ¼: {dexterity ? Math.floor(dexterity / 4) : ""}</p>
                </div>

                <div className="stat-block">
                <label>CON: <input type = "number" value={constitution} onChange={e => setConstitution(e.target.value)} /></label>
                <p>½: {constitution ? Math.floor(constitution / 2) : ""}, ¼: {constitution ? Math.floor(constitution / 4) : ""}</p>
                </div>

                <div className="stat-block">
                <label>INT: <input type = "number" value={intelligence} onChange={e => setIntelligence(e.target.value)} /></label>
                <p>½: {intelligence ? Math.floor(intelligence / 2) : ""}, ¼: {intelligence ? Math.floor(intelligence / 4) : ""}</p>
                </div>

                <div className="stat-block">
                <label>APP: <input type = "number" value={appearance} onChange={e => setAppearance(e.target.value)} /></label>
                <p>½: {appearance ? Math.floor(appearance / 2) : ""}, ¼: {appearance ? Math.floor(appearance / 4) : ""}</p>
                </div>

                <div className="stat-block">
                <label>POW: <input type = "number" value={power} onChange={e => setPower(e.target.value)} /></label>
                <p>½: {power ? Math.floor(power / 2) : ""}, ¼: {power ? Math.floor(power / 4) : ""}</p>
                </div>

                <div className="stat-block">
                <label>SIZ: <input type = "number" value={size} onChange={e => setSize(e.target.value)} /></label>
                <p>½: {size ? Math.floor(size / 2) : ""}, ¼: {size ? Math.floor(size / 4) : ""}</p>
                </div>

                <div className="stat-block">
                <label>EDU: <input type = "number" value={education} onChange={e => setEducation(e.target.value)} /></label>
                <p>½: {education ? Math.floor(education / 2) : ""}, ¼: {education ? Math.floor(education / 4) : ""}</p>
                </div>
                
            </div>

            <div className="derived-stats">
                
                <div className="hitPoints">
                    Healthpoints
                    <div className="healthBox">
                         <p>
                            Current HP: {currentHP}|{hitPoints}
                        </p>
                        <div className="heal">
                        <button className="healButton" onClick={handleHeal}>Heal</button>
                        <input 
                        type="number"
                        min="0"
                        value={changeAmount}
                        onChange={e => setChangeAmount(e.target.value)}/>
                        <button className="damageButton" onClick={handleDamage}>Damage</button>
                        </div>
                    </div>
                </div>

                <div className="sanityPoints">
                    Sanity 
                </div>
                
            </div>

        </div>

        </>
    );
}

export default CharacterSkills;
