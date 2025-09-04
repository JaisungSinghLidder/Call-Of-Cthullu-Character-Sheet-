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
    const [luck, setLuck] = useState("");


    const [currentHP, setCurrentHP] = useState(null);
    const [changeAmountHealth, setChangeAmountHealth] = useState("");

    const [currentSanity, setCurrentSanity] = useState(null);
    const [changeAmountSanity, setChangeAmountSanity] = useState("");

    const [currentMagic, setCurrentMagic] = useState(null);
    const [changeAmountMagic, setChangeAmountMagic] = useState("");


    //generating rolling stats 

    function rollDie(sides) {
        return Math.floor(Math.random() * sides) + 1;
    }

    function roll3d6Times5() {
        const total = rollDie(6) + rollDie(6) + rollDie(6);
        return total * 5;
    }
    
    function roll2d6Times5()
    {
        const total = rollDie(6) + rollDie(6) + 6;
        return total * 5;
    }

    //now applying those stats
    const rollAllStats = () => {
        setStrength(roll3d6Times5());
        setDexterity(roll3d6Times5());
        setConstitution(roll3d6Times5());
        setIntelligence(roll2d6Times5());
        setAppearance(roll3d6Times5());
        setPower(roll3d6Times5());
        setSize(roll2d6Times5());
        setEducation(roll2d6Times5());  
        setLuck(roll3d6Times5)
    };

    //here will set the stats if they exist
    //these stats are derived from these core stats
    const hitPoints = constitution && size ? Math.floor((constitution + size) / 10) : ""; 
    const sanity = power || "";
    const magicPoints = power || "";


    React.useEffect(() => {
        if (hitPoints) setCurrentHP(hitPoints);
    }, [hitPoints]);

    React.useEffect(() => {
        if (sanity) setCurrentSanity(sanity)
    }, [sanity]);

    React.useEffect(() => {
        if (magicPoints) setCurrentMagic(magicPoints)
    }, [magicPoints])

    const handleHeal = () => {
        if (changeAmountHealth)
        {
            setCurrentHP(prev => Math.min(hitPoints, prev + Number(changeAmountHealth)));
            setChangeAmountHealth("");
        }
    };

    const handleDamage = () => {
        if (changeAmountHealth)
        {
            setCurrentHP(prev => Math.max(0, prev - Number(changeAmountHealth)));
            setChangeAmountHealth("");
        }
    };

    const handleRecovery = () => {
        if (changeAmountSanity)
        {
            setCurrentSanity(prev => Math.min(sanity, prev + Number(changeAmountSanity)));
            setChangeAmountSanity("");
        }
    }; 

    const handleStress = () => {
        if (changeAmountSanity)
        {
            setCurrentSanity(prev => Math.max(0, prev - Number(changeAmountSanity)));
            setChangeAmountSanity("");
        }
    };

    const handleRestore = () => {
        if (changeAmountMagic)
        {
            setCurrentMagic(prev => Max.min(magicPoints, prev + Number(changeAmountMagic)));
            setChangeAmountMagic("");
        }
    };

    const handleBurn = () =>{
        if (changeAmountMagic)
        {
            setCurrentMagic(prev => Math.max(0, prev - Number(changeAmountMagic)));
            setChangeAmountMagic("");
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
                <p>½: {strength ? Math.floor(strength / 2) : ""}, ⅕: {strength ? Math.floor(strength / 5) : ""}</p>
                </div>

                <div className="stat-block">
                <label>DEX: <input type = "number" value={dexterity} onChange={e => setDexterity(e.target.value)} /></label>
                <p>½: {dexterity ? Math.floor(dexterity / 2) : ""}, ⅕: {dexterity ? Math.floor(dexterity / 5) : ""}</p>
                </div>

                <div className="stat-block">
                <label>CON: <input type = "number" value={constitution} onChange={e => setConstitution(e.target.value)} /></label>
                <p>½: {constitution ? Math.floor(constitution / 2) : ""}, ⅕: {constitution ? Math.floor(constitution / 5) : ""}</p>
                </div>

                <div className="stat-block">
                <label>INT: <input type = "number" value={intelligence} onChange={e => setIntelligence(e.target.value)} /></label>
                <p>½: {intelligence ? Math.floor(intelligence / 2) : ""}, ⅕: {intelligence ? Math.floor(intelligence / 5) : ""}</p>
                </div>

                <div className="stat-block">
                <label>APP: <input type = "number" value={appearance} onChange={e => setAppearance(e.target.value)} /></label>
                <p>½: {appearance ? Math.floor(appearance / 2) : ""}, ⅕: {appearance ? Math.floor(appearance / 5) : ""}</p>
                </div>

                <div className="stat-block">
                <label>POW: <input type = "number" value={power} onChange={e => setPower(e.target.value)} /></label>
                <p>½: {power ? Math.floor(power / 2) : ""}, ⅕: {power ? Math.floor(power / 5) : ""}</p>
                </div>

                <div className="stat-block">
                <label>SIZ: <input type = "number" value={size} onChange={e => setSize(e.target.value)} /></label>
                <p>½: {size ? Math.floor(size / 2) : ""}, ⅕: {size ? Math.floor(size / 5) : ""}</p>
                </div>

                <div className="stat-block">
                <label>EDU: <input type = "number" value={education} onChange={e => setEducation(e.target.value)} /></label>
                <p>½: {education ? Math.floor(education / 2) : ""}, ⅕: {education ? Math.floor(education / 5) : ""}</p>
                </div>

                <div className="stat-block">
                <label>LCK: <input type = "number" value={luck} onChange={e => setLuck(e.target.value)} /></label>
                <p>½: {luck ? Math.floor(luck / 2) : ""}, ⅕: {luck ? Math.floor(luck / 5) : ""}</p>
                </div>

            </div>



            <div className="misc-stats">
                <div className="magicPoints">
                    <div className="hitPoints">
                        <div className="healthBox">
                            <p className = "hpDisplay">
                                Current MP: {currentMagic}|{magicPoints}
                            </p>
                            <div className="heal">
                            <button className="healButton" onClick={handleRestore}>Restore</button>
                            <input
                            className="healthInput" 
                            type="number"
                            min="0"
                            value={changeAmountMagic}
                            onChange={e => setChangeAmountMagic(e.target.value)}/>
                            <button className="damageButton" onClick={handleBurn}>Burn</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="derived-stats">
                
                <div className="hitPoints">
                    <div className="healthBox">
                        <p className = "hpDisplay">
                            Current HP: {currentHP}|{hitPoints}
                        </p>
                        <div className="heal">
                        <button className="healButton" onClick={handleHeal}>Heal</button>
                        <input
                        className="healthInput" 
                        type="number"
                        min="0"
                        value={changeAmountHealth}
                        onChange={e => setChangeAmountHealth(e.target.value)}/>
                        <button className="damageButton" onClick={handleDamage}>Damage</button>
                        </div>
                    </div>
                </div>

                <div className="sanityPoints">
                    <div className="sanityBox">
                        <p className = "sanityDisplay">
                            Current Sanity: {currentSanity}|{sanity}
                        </p>
                        <div className="recover">
                        <button className="recoverButton" onClick={handleRecovery}>Recover</button>
                        <input
                        className="recoverInput" 
                        type="number"
                        min="0"
                        value={changeAmountSanity}
                        onChange={e => setChangeAmountSanity(e.target.value)}/>
                        <button className="stressButton" onClick={handleStress}>Stress</button>
                        </div>
                    </div> 
                </div>
                
            </div>

        </div>

        </>
    );
}

export default CharacterSkills;
