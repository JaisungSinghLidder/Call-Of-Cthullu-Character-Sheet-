import React, { useContext } from "react";
import { useState } from "react";
import "./CharacterSkills.css";
import { CharacterContext } from "./CharacterContext";


function CharacterSkills() {
    /*
    const [strength, setStrength] = useState("");
    const [dexterity, setDexterity] = useState("");
    const [constitution, setConstitution] = useState("");
    const [intelligence, setIntelligence] = useState("");
    const [appearance, setAppearance] = useState("");
    const [power, setPower] = useState("");
    const [size, setSize] = useState("");
    const [education, setEducation] = useState("");
    const [luck, setLuck] = useState("");
    */

    const { coreStats, setCoreStats } = useContext(CharacterContext);



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

    const rollAllStats = () => {
        const newState = {
            strength : roll3d6Times5(),
            dexterity : roll3d6Times5(),
            constitution : roll3d6Times5(),
            intelligence : roll2d6Times5(),
            appearance : roll3d6Times5(),
            power : roll3d6Times5(),
            size : roll2d6Times5(),
            education : roll2d6Times5(),
            luck : roll3d6Times5()
        };

        setCoreStats(newState);
    };

    //here will set the stats if they exist
    //these stats are derived from these core stats
    const hitPoints = coreStats.constitution && coreStats.size ? Math.floor((coreStats.constitution + coreStats.size) / 10) : ""; 
    const sanity = coreStats.power || "";
    const magicPoints = coreStats.power || "";


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
            setCurrentMagic(prev => Math.min(magicPoints, prev + Number(changeAmountMagic)));
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
                <label>STR: <input type = "number" value={coreStats.strength} onChange={e => setCoreStats(prev => ({...prev, strength:Number(e.target.value)})) } /></label>
                <p>½: {coreStats.strength ? Math.floor(coreStats.strength / 2) : ""}, ⅕: {coreStats.strength ? Math.floor(coreStats.strength / 5) : ""}</p>
                </div>

                <div className="stat-block">
                <label>DEX: <input type = "number" value={coreStats.dexterity} onChange={e => setCoreStats(prev => ({...prev, dexterity:Number(e.target.value)})) } /></label>
                <p>½: {coreStats.dexterity ? Math.floor(coreStats.dexterity / 2) : ""}, ⅕: {coreStats.dexterity ? Math.floor(coreStats.dexterity / 5) : ""}</p>
                </div>

                <div className="stat-block">
                <label>CON: <input type = "number" value={coreStats.constitution} onChange={e => setCoreStats(prev => ({...prev, constitution:Number(e.target.value)})) } /></label>
                <p>½: {coreStats.constitution ? Math.floor(coreStats.constitution / 2) : ""}, ⅕: {coreStats.constitution ? Math.floor(coreStats.constitution / 5) : ""}</p>
                </div>

                <div className="stat-block">
                <label>INT: <input type = "number" value={coreStats.intelligence} onChange={e => setCoreStats(prev => ({...prev, intelligence:Number(e.target.value)})) } /></label>
                <p>½: {coreStats.intelligence ? Math.floor(coreStats.intelligence / 2) : ""}, ⅕: {coreStats.intelligence ? Math.floor(coreStats.intelligence / 5) : ""}</p>
                </div>

                <div className="stat-block">
                <label>APP: <input type = "number" value={coreStats.appearance} onChange={e => setCoreStats(prev => ({...prev, appearance:Number(e.target.value)})) } /></label>
                <p>½: {coreStats.appearance ? Math.floor(coreStats.appearance / 2) : ""}, ⅕: {coreStats.appearance ? Math.floor(coreStats.appearance / 5) : ""}</p>
                </div>

                <div className="stat-block">
                <label>POW: <input type = "number" value={coreStats.power} onChange={e => setCoreStats(prev => ({...prev, power:Number(e.target.value)})) } /></label>
                <p>½: {coreStats.power ? Math.floor(coreStats.power / 2) : ""}, ⅕: {coreStats.power ? Math.floor(coreStats.power / 5) : ""}</p>
                </div>

                <div className="stat-block">
                <label>SIZ: <input type = "number" value={coreStats.size} onChange={e => setCoreStats(prev => ({...prev, size:Number(e.target.value)})) } /></label>
                <p>½: {coreStats.size ? Math.floor(coreStats.size / 2) : ""}, ⅕: {coreStats.size ? Math.floor(coreStats.size / 5) : ""}</p>
                </div>

                <div className="stat-block">
                <label>EDU: <input type = "number" value={coreStats.education} onChange={e => setCoreStats(prev => ({...prev, education:Number(e.target.value)})) } /></label>
                <p>½: {coreStats.education ? Math.floor(coreStats.education / 2) : ""}, ⅕: {coreStats.education ? Math.floor(coreStats.education / 5) : ""}</p>
                </div>

                <div className="stat-block">
                <label>LCK: <input type = "number" value={coreStats.luck} onChange={e => setCoreStats(prev => ({...prev, luck:Number(e.target.value)})) } /></label>
                <p>½: {coreStats.luck ? Math.floor(coreStats.luck / 2) : ""}, ⅕: {coreStats.luck ? Math.floor(coreStats.luck / 5) : ""}</p>
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
