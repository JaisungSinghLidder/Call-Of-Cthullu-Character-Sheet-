import React, { useContext, useState } from "react";
import "./Characteristics.css";
import { CharacterContext } from "./CharacterContext";
import occupationData from "./occupations.json";

//This is for each of the skills of the player.
//This could will allow the player to select serveal skills and calculate their occupation and personal skill points. 

function Characteristics() {
  const { coreStats, setCoreStats, occupation, setOccupation } =
    useContext(CharacterContext);


  const [skills, setSkills] = useState({
    accounting: 5,
    anthropology: 1,
    appraise: 5,
    archaeology: 1,
    customArt: 5,
    customOne: 0,
    charm: 15,
    climb: 20,
    creditRating: 0,
    cthulluMythos: 0,
    disguise: 5,
    dodge: 0,
    driveAuto: 20,
    elecRepair: 10,
    fastTalk: 5,
    fightingBrawl: 25,
    fightingCustomOne: 0,
    fightingCustomTwo: 0,
    firearmsHandgun: 20,
    fireArmsRifle: 25,
    firearmsCustom: 0,
    firstAid: 30,
    history: 5,
    intimidate: 15,
    jump: 20,
    languageOther: 1,
    customTwo: 0,
    customThree: 0,
    languageOwn: 0,
    law: 5,
    libraryUse: 20,
    listen: 20,
    locksmith: 1,
    mechRepair: 10,
    medicine: 1,
    naturalWorld: 10,
    navigate: 10,
    occult: 5,
    persuade: 10,
    pilotCustom: 1,
    psychoanalysis: 1,
    psychology: 10,
    ride: 5,
    scienceCustom: 1,
    customFour: 0,
    customFive: 0,
    sleightOfHand: 10,
    spotHidden: 25,
    stealth: 20,
    survivalCustom: 10,
    swim: 20,
    throw: 20,
    track: 20,
    customSix: 0,
    customSeven: 0,
    customEight: 0,
    customNine: 0,
  });

  //base values here 
  const baseValues = {
    accounting: 5,
    anthropology: 1,
    appraise: 5,
    archaeology: 1,
    customArt: 5,
    customOne: 0,
    charm: 15,
    climb: 20,
    creditRating: 0,
    cthulluMythos: 0,
    disguise: 5,
    dodge: 0,
    driveAuto: 20,
    elecRepair: 10,
    fastTalk: 5,
    fightingBrawl: 25,
    fightingCustomOne: 0,
    fightingCustomTwo: 0,
    firearmsHandgun: 20,
    fireArmsRifle: 25,
    firearmsCustom: 0,
    firstAid: 30,
    history: 5,
    intimidate: 15,
    jump: 20,
    languageOther: 1,
    customTwo: 0,
    customThree: 0,
    languageOwn: 0,
    law: 5,
    libraryUse: 20,
    listen: 20,
    locksmith: 1,
    mechRepair: 10,
    medicine: 1,
    naturalWorld: 10,
    navigate: 10,
    occult: 5,
    persuade: 10,
    pilotCustom: 1,
    psychoanalysis: 1,
    psychology: 10,
    ride: 5,
    scienceCustom: 1,
    customFour: 0,
    customFive: 0,
    sleightOfHand: 10,
    spotHidden: 25,
    stealth: 20,
    survivalCustom: 10,
    swim: 20,
    throw: 20,
    track: 20,
    customSix: 0,
    customSeven: 0,
    customEight: 0,
    customNine: 0,
  }

  //In Call of Cthullu, you are only allowed a max of 8 occupational skills, so we check here
  const [checkedOccupationalSkillsChecked, setOccupationalSkillsChecked] = useState([]);
  const [occupationalPoints, setOccupationalPoints] = useState(0);
  const [personalPoints, setPersonalPoints] = useState(0);

  const MAX_CHECKS = 8; 


  function calculateEducationPoints() {
    if (!occupationData) {
      console.log("ERROR! THERE APPEARS TO BE NO INFORMATION ABOUT THE OCCUPATIONS");
    }

    const occInfo = occupationData.find(
      (occ) => occ.name.toLowerCase() === occupation.toLowerCase()
    );

    if (!occInfo) {
      console.log("Error, occupation not found in the data");
      return;
    }

    if (occInfo.ocp === "scholarly") {
      setOccupationalPoints(coreStats.education * 4);
    } else {
      const values = Object.values(coreStats);
      const maxCoreStat = Math.max(...values);
      setOccupationalPoints(coreStats.education * 2 + maxCoreStat * 2);
    }
  }

  function calculatePersonalPoints() {
    setPersonalPoints ( coreStats.intelligence * 2 );
  }

  function handleOccupationCheck(skillName)
  {
    setOccupationalSkillsChecked((prev) => {
      if (prev.includes(skillName))
      {
        return prev.filter((s) => s !== skillName);
      }
      else if (prev.length < MAX_CHECKS)
      {
        return [...prev, skillName];
      }
      else
      {
        alert(`You can only select up to ${MAX_CHECKS} skills.`);
        return prev;
      }
    })
  }

  React.useEffect(() => {
    calculateEducationPoints(); 
    calculatePersonalPoints();  
  }, [coreStats, occupation]);


  //reusable function to make the creation more modular and cleaner
  function Skill({ keyName, label, value, checked, onChange, onAllocate }) {
        return (
            <div className="skill-div">
            <label>
                <input type="checkbox"
                 checked={checked} 
                 onChange={() => onChange(keyName)}
                />
                {label} {value + "%"}
            </label>
            <div className="skill-boxes">
                <input type="number" className="box" value={value} onChange={(e) => onAllocate(keyName, parseInt(e.target.value, 10) || 0)}/>
                <input type="number" className="box" value={Math.floor(value / 2)} readOnly />
                <input type="number" className="box" value={Math.floor(value / 5)} readOnly />
            </div>
            </div>
        );
    }

  //NEW VERSION 
  function handleAllocate(skillName, newValue)
  {

    if (Number.isNaN(newValue))
    {
      alert("A conversion error has teken place");
      return; 
    }

    setSkills(prev => {
      const oldValue = prev[skillName] || 0;
      const diff = newValue - oldValue;

      if (checkedOccupationalSkillsChecked.includes(skillName))
      {
        if (diff > 0 && diff > occupationalPoints)
        {
          alert("You don't have enought occupational points");
          return prev;
        }
        else
        {
          if (newValue < baseValues[skillName])
          {
            alert("You can't have a skill go under the base value " + baseValues[skillName])
            return prev; 
          }

          setOccupationalPoints(prev => prev - diff);
          return {
            ...prev, 
            [skillName]: newValue 
          };
        }
      }
      else if (diff > personalPoints && diff > 0)
      {
        alert("You don't have enough personal points")
        return prev; 
      }
      else
      {

        if (newValue < baseValues[skillName])
          {
            alert("You can't have a skill go under the base value " + baseValues[skillName])
            return prev; 
          }

        setPersonalPoints(prev => prev - diff);
        return {
        ...prev, 
        [skillName]: newValue
      };
    }

  });

}


  return (
    <>
      <div className="pointBox">
        {/*Debugging currently*/}
        <div className="occupationalPoints">
          <p>OP</p>
          <p>{occupationalPoints}</p>
        </div>

        <div className="personalPoints">
          <p>PP</p>
          <p>{personalPoints}</p>
        </div>

      </div>

      <div className="characteristics">

        <div className="characteristicsColumn">

            <Skill keyName = "accounting" label="Accounting" value={skills.accounting} checked={checkedOccupationalSkillsChecked.includes("accounting") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "anthropology" label="Anthropology" value={skills.anthropology} checked={checkedOccupationalSkillsChecked.includes("anthropology") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} /> 
            <Skill keyName = "appraise" label="Appraise" value={skills.appraise} checked={checkedOccupationalSkillsChecked.includes("appraise") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "archaeology" label="Archaeology" value={skills.archaeology} checked={checkedOccupationalSkillsChecked.includes("archaeology") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "customArt" label="CustomArt" value={skills.customArt} checked={checkedOccupationalSkillsChecked.includes("customArt") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "customOne" label="CustomOne" value={skills.customOne} checked={checkedOccupationalSkillsChecked.includes("customOne") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "charm" label="Charm" value={skills.charm} checked={checkedOccupationalSkillsChecked.includes("charm") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "climb" label="Climb" value={skills.climb} checked={checkedOccupationalSkillsChecked.includes("climb") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "creditRating" label="Credit Rating" value={skills.creditRating} checked={checkedOccupationalSkillsChecked.includes("creditRating") } onChange = {handleOccupationCheck} onAllocate={handleAllocate}/>
            <Skill keyName = "cthulluMythos" label="Cthulhu Mythos" value={skills.cthulluMythos} checked={checkedOccupationalSkillsChecked.includes("cthulluMythos") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "disguise" label="Disguise" value={skills.disguise} checked={checkedOccupationalSkillsChecked.includes("disguise") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "dodge" label="Dodge" value={skills.dodge} checked={checkedOccupationalSkillsChecked.includes("dodge") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "driveAuto" label="Drive Auto" value={skills.driveAuto} checked={checkedOccupationalSkillsChecked.includes("driveAuto") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "elecRepair" label="Elec. Repair" value={skills.elecRepair} checked={checkedOccupationalSkillsChecked.includes("elecRepair") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "fastTalk" label="Fast Talk" value={skills.fastTalk} checked={checkedOccupationalSkillsChecked.includes("fastTalk") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "fightingBrawl" label="Fighting(Brawl)" value={skills.fightingBrawl} checked={checkedOccupationalSkillsChecked.includes("fightingBrawl") } onChange = {handleOccupationCheck} onAllocate={handleAllocate}/>
            <Skill keyName = "fightingCustomOne" label="CustomeFightingOne" value={skills.fightingCustomOne} checked={checkedOccupationalSkillsChecked.includes("fightingCustomOne") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "fightingCustomTwo" label="CustomFightingTwo" value={skills.fightingCustomTwo} checked={checkedOccupationalSkillsChecked.includes("fightingCustomTwo") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />  
            <Skill keyName = "firearmsHandgun" label="Firearms(Handgun)" value={skills.firearmsHandgun} checked={checkedOccupationalSkillsChecked.includes("firearmsHandgun") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            
        </div>

        <div className="characteristicsColumn">

            <Skill keyName = "fireArmsRifle" label="Firearms (Rifle/Shotgun)" value={skills.fireArmsRifle} checked={checkedOccupationalSkillsChecked.includes("fireArmsRifle") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "firearmsCustom" label="CustomFirearms" value={skills.firearmsCustom} checked={checkedOccupationalSkillsChecked.includes("firearmsCustom") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} /> 
            <Skill keyName = "firstAid" label="First Aid" value={skills.firstAid} checked={checkedOccupationalSkillsChecked.includes("firstAid") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "history" label="History" value={skills.history} checked={checkedOccupationalSkillsChecked.includes("history") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "intimidate" label="Intimidate" value={skills.intimidate} checked={checkedOccupationalSkillsChecked.includes("intimidate") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "jump" label="Jump" value={skills.jump} checked={checkedOccupationalSkillsChecked.includes("jump") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "languageOther" label="Language(Other)" value={skills.languageOther} checked={checkedOccupationalSkillsChecked.includes("languageOther") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "customTwo" label="CustomTwo" value={skills.customTwo} checked={checkedOccupationalSkillsChecked.includes("customTwo") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "customThree" label="CustomThree" value={skills.customThree} checked={checkedOccupationalSkillsChecked.includes("CustomThree") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "languageOwn" label="Language (Own)" value={skills.languageOwn} checked={checkedOccupationalSkillsChecked.includes("languageOwn") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "law" label="Law" value={skills.law} checked={checkedOccupationalSkillsChecked.includes("law") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "libraryUse" label="Library Use" value={skills.libraryUse} checked={checkedOccupationalSkillsChecked.includes("libraryUse") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "listen" label="Listen" value={skills.listen} checked={checkedOccupationalSkillsChecked.includes("listen") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "locksmith" label="Locksmith" value={skills.locksmith} checked={checkedOccupationalSkillsChecked.includes("locksmith") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "mechRepair" label="Mech. Repair" value={skills.mechRepair} checked={checkedOccupationalSkillsChecked.includes("mechRepair") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "medicine" label="Medicine" value={skills.medicine} checked={checkedOccupationalSkillsChecked.includes("medicine") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "naturalWorld" label="Natural World" value={skills.naturalWorld} checked={checkedOccupationalSkillsChecked.includes("naturalWorld") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "navigate" label="Navigate" value={skills.navigate} checked={checkedOccupationalSkillsChecked.includes("navigate") } onChange = {handleOccupationCheck} onAllocate={handleAllocate}/>  
            <Skill keyName = "occult" label="Occult" value={skills.occult} checked={checkedOccupationalSkillsChecked.includes("occult") } onChange = {handleOccupationCheck} onAllocate={handleAllocate}/>

        </div>

        <div className="characteristicsColumn">

            <Skill keyName = "persuade" label="Persuade" value={skills.persuade} checked={checkedOccupationalSkillsChecked.includes("persuade") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "pilotCustom" label="Pilot (Custom)" value={skills.customFour} checked={checkedOccupationalSkillsChecked.includes("pilotCustom") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} /> 
            <Skill keyName = "psychoanalysis" label="Psychoanalysis" value={skills.psychoanalysis} checked={checkedOccupationalSkillsChecked.includes("psychoanalysis") } onChange = {handleOccupationCheck} onAllocate={handleAllocate}/>
            <Skill keyName = "psychology" label="Psychology" value={skills.psychology} checked={checkedOccupationalSkillsChecked.includes("psychology") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "ride" label="Ride" value={skills.ride} checked={checkedOccupationalSkillsChecked.includes("ride") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "scienceCustom" label="Science" value={skills.scienceCustom} checked={checkedOccupationalSkillsChecked.includes("scienceCustom") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "customFour" label="CustomFour" value={skills.customFour} checked={checkedOccupationalSkillsChecked.includes("customFour") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "customFive" label="CustomFive" value={skills.customFifth} checked={checkedOccupationalSkillsChecked.includes("CustomFive") } onChange = {handleOccupationCheck} onAllocate={handleAllocate}/>
            <Skill keyName = "sleightOfHand" label="Sleight of Hand" value={skills.sleightOfHand} checked={checkedOccupationalSkillsChecked.includes("sleightOfHand") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "spotHidden" label="Spot Hidden" value={skills.spotHidden} checked={checkedOccupationalSkillsChecked.includes("spotHidden") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "stealth" label="Stealth" value={skills.stealth} checked={checkedOccupationalSkillsChecked.includes("stealth") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "survivalCustom" label="Survival" value={skills.survivalCustom} checked={checkedOccupationalSkillsChecked.includes("survivalCustom") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "swim" label="Swim" value={skills.swim} checked={checkedOccupationalSkillsChecked.includes("swim") } onChange = {handleOccupationCheck} onAllocate={handleAllocate}/>
            <Skill keyName = "throw" label="Throw" value={skills.throw} checked={checkedOccupationalSkillsChecked.includes("throw") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "track" label="Track" value={skills.track} checked={checkedOccupationalSkillsChecked.includes("track") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "customSix" label="CustomSix" value={skills.customSix} checked={checkedOccupationalSkillsChecked.includes("CustomSix") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "customSeven" label="CustomSeven" value={skills.customSeven} checked={checkedOccupationalSkillsChecked.includes("CustomSeven") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />
            <Skill keyName = "customEight" label="CustomEight" value={skills.customEight} checked={checkedOccupationalSkillsChecked.includes("CustomEight") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />  
            <Skill keyName = "customNine" label="CustomNine" value={skills.customNine} checked={checkedOccupationalSkillsChecked.includes("CustomNine") } onChange = {handleOccupationCheck} onAllocate={handleAllocate} />

        </div>

      </div>
    </>
  );
}



export default Characteristics;
