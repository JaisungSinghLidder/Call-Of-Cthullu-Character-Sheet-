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
    return coreStats.intelligence * 2;
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

  //reusable function to make the creation more modular and cleaner
  function Skill({ name, value, checked, onChange }) {
        return (
            <div className="skill-div">
            <label>
                <input type="checkbox"
                 checked={checked} 
                 onChange={() => onChange(name)}
                />
                {name} {value + "%"}
            </label>
            <div className="skill-boxes">
                <input type="number" className="box" value={value} readOnly />
                <input type="number" className="box" value={Math.floor(value / 2)} readOnly />
                <input type="number" className="box" value={Math.floor(value / 5)} readOnly />
            </div>
            </div>
        );
    }


  return (
    <>
      <div className="pointBox">


      </div>

      <div className="characteristics">

        <div className="characteristicsColumn">

            <Skill name="Accounting" value={skills.accounting} checked={checkedOccupationalSkillsChecked.includes("Accounting") } onChange = {handleOccupationCheck} />
            <Skill name="Anthropology" value={skills.anthropology} checked={checkedOccupationalSkillsChecked.includes("Anthropology") } onChange = {handleOccupationCheck} /> 
            <Skill name="Appraise" value={skills.appraise} checked={checkedOccupationalSkillsChecked.includes("Appraise") } onChange = {handleOccupationCheck} />
            <Skill name="Archaeology" value={skills.archaeology} checked={checkedOccupationalSkillsChecked.includes("Archaeology") } onChange = {handleOccupationCheck} />
            <Skill name="CustomArt" value={skills.customArt} checked={checkedOccupationalSkillsChecked.includes("CustomArt") } onChange = {handleOccupationCheck} />
            <Skill name="CustomOne" value={skills.customOne} checked={checkedOccupationalSkillsChecked.includes("CustomOne") } onChange = {handleOccupationCheck} />
            <Skill name="Charm" value={skills.charm} checked={checkedOccupationalSkillsChecked.includes("Charm") } onChange = {handleOccupationCheck} />
            <Skill name="Climb" value={skills.climb} checked={checkedOccupationalSkillsChecked.includes("Climb") } onChange = {handleOccupationCheck} />
            <Skill name="Credit Rating" value={skills.creditRating} checked={checkedOccupationalSkillsChecked.includes("Credit Rating") } onChange = {handleOccupationCheck} />
            <Skill name="Cthulhu Mythos" value={skills.cthulluMythos} checked={checkedOccupationalSkillsChecked.includes("Cthulhu Mythos") } onChange = {handleOccupationCheck} />
            <Skill name="Disguise" value={skills.disguise} checked={checkedOccupationalSkillsChecked.includes("Disguise") } onChange = {handleOccupationCheck} />
            <Skill name="Dodge" value={skills.dodge} checked={checkedOccupationalSkillsChecked.includes("Dodge") } onChange = {handleOccupationCheck} />
            <Skill name="Drive Auto" value={skills.driveAuto} checked={checkedOccupationalSkillsChecked.includes("Drive Auto") } onChange = {handleOccupationCheck} />
            <Skill name="Elec. Repair" value={skills.elecRepair} checked={checkedOccupationalSkillsChecked.includes("Elec. Repair") } onChange = {handleOccupationCheck} />
            <Skill name="Fast Talk" value={skills.fastTalk} checked={checkedOccupationalSkillsChecked.includes("Fast Talk") } onChange = {handleOccupationCheck} />
            <Skill name="Fighting(Brawl)" value={skills.fightingBrawl} checked={checkedOccupationalSkillsChecked.includes("Fighting(Brawl)") } onChange = {handleOccupationCheck} />
            <Skill name="CustomeFightingOne" value={skills.fightingCustomOne} checked={checkedOccupationalSkillsChecked.includes("CustomeFightingOne") } onChange = {handleOccupationCheck} />
            <Skill name="CustomFightingTwo" value={skills.fightingCustomTwo} checked={checkedOccupationalSkillsChecked.includes("CustomFightingTwo") } onChange = {handleOccupationCheck} />  
            <Skill name="Firearms(Handgun)" value={skills.firearmsHandgun} checked={checkedOccupationalSkillsChecked.includes("Firearms(Handgun)") } onChange = {handleOccupationCheck} />
            
        </div>

        <div className="characteristicsColumn">

            <Skill name="Firearms (Rifle/Shotgun)" value={skills.fireArmsRifle} checked={checkedOccupationalSkillsChecked.includes("Firearms (Rifle/Shotgun)") } onChange = {handleOccupationCheck} />
            <Skill name="CustomFirearms" value={skills.firearmsCustom} checked={checkedOccupationalSkillsChecked.includes("CustomFirearms") } onChange = {handleOccupationCheck} /> 
            <Skill name="First Aid" value={skills.firstAid} checked={checkedOccupationalSkillsChecked.includes("First Aid") } onChange = {handleOccupationCheck} />
            <Skill name="History" value={skills.history} checked={checkedOccupationalSkillsChecked.includes("History") } onChange = {handleOccupationCheck} />
            <Skill name="Intimidate" value={skills.intimidate} checked={checkedOccupationalSkillsChecked.includes("Intimidate") } onChange = {handleOccupationCheck} />
            <Skill name="Jump" value={skills.jump} checked={checkedOccupationalSkillsChecked.includes("Jump") } onChange = {handleOccupationCheck} />
            <Skill name="Language(Other)" value={skills.languageOther} checked={checkedOccupationalSkillsChecked.includes("Language(Other)") } onChange = {handleOccupationCheck} />
            <Skill name="CustomTwo" value={skills.customTwo} checked={checkedOccupationalSkillsChecked.includes("CustomTwo") } onChange = {handleOccupationCheck} />
            <Skill name="CustomThree" value={skills.customThree} checked={checkedOccupationalSkillsChecked.includes("CustomThree") } onChange = {handleOccupationCheck} />
            <Skill name="Language (Own)" value={skills.languageOwn} checked={checkedOccupationalSkillsChecked.includes("Language (Own)") } onChange = {handleOccupationCheck} />
            <Skill name="Law" value={skills.law} checked={checkedOccupationalSkillsChecked.includes("Law") } onChange = {handleOccupationCheck} />
            <Skill name="Library Use" value={skills.libraryUse} checked={checkedOccupationalSkillsChecked.includes("Library Use") } onChange = {handleOccupationCheck} />
            <Skill name="Listen" value={skills.listen} checked={checkedOccupationalSkillsChecked.includes("Listen") } onChange = {handleOccupationCheck} />
            <Skill name="Locksmith" value={skills.locksmith} checked={checkedOccupationalSkillsChecked.includes("Locksmith") } onChange = {handleOccupationCheck} />
            <Skill name="Mech. Repair" value={skills.mechRepair} checked={checkedOccupationalSkillsChecked.includes("Mech. Repair") } onChange = {handleOccupationCheck} />
            <Skill name="Medicine" value={skills.medicine} checked={checkedOccupationalSkillsChecked.includes("Medicine") } onChange = {handleOccupationCheck} />
            <Skill name="Natural World" value={skills.naturalWorld} checked={checkedOccupationalSkillsChecked.includes("Natural World") } onChange = {handleOccupationCheck} />
            <Skill name="Navigate" value={skills.navigate} checked={checkedOccupationalSkillsChecked.includes("Navigate") } onChange = {handleOccupationCheck}/>  
            <Skill name="Occult" value={skills.occult} checked={checkedOccupationalSkillsChecked.includes("Occult") } onChange = {handleOccupationCheck}/>

        </div>

        <div className="characteristicsColumn">

            <Skill name="Persuade" value={skills.persuade} checked={checkedOccupationalSkillsChecked.includes("Persuade") } onChange = {handleOccupationCheck} />
            <Skill name="CustomFour" value={skills.customFour} checked={checkedOccupationalSkillsChecked.includes("CustomFour") } onChange = {handleOccupationCheck} /> 
            <Skill name="Psychoanalysis" value={skills.psychoanalysis} checked={checkedOccupationalSkillsChecked.includes("Psychoanalysis") } onChange = {handleOccupationCheck}/>
            <Skill name="Psychology" value={skills.psychology} checked={checkedOccupationalSkillsChecked.includes("Psychology") } onChange = {handleOccupationCheck} />
            <Skill name="Ride" value={skills.ride} checked={checkedOccupationalSkillsChecked.includes("Ride") } onChange = {handleOccupationCheck} />
            <Skill name="Science" value={skills.scienceCustom} checked={checkedOccupationalSkillsChecked.includes("Science") } onChange = {handleOccupationCheck} />
            <Skill name="CustomFour" value={skills.customFour} checked={checkedOccupationalSkillsChecked.includes("CustomFour") } onChange = {handleOccupationCheck} />
            <Skill name="CustomFifth" value={skills.customFifth} checked={checkedOccupationalSkillsChecked.includes("CustomFifth") } onChange = {handleOccupationCheck}/>
            <Skill name="Sleight of Hand" value={skills.sleightOfHand} checked={checkedOccupationalSkillsChecked.includes("Sleight of Hand") } onChange = {handleOccupationCheck} />
            <Skill name="Spot Hidden" value={skills.spotHidden} checked={checkedOccupationalSkillsChecked.includes("Spot Hidden") } onChange = {handleOccupationCheck} />
            <Skill name="Stealth" value={skills.stealth} checked={checkedOccupationalSkillsChecked.includes("Stealth") } onChange = {handleOccupationCheck} />
            <Skill name="Survival" value={skills.survivalCustom} checked={checkedOccupationalSkillsChecked.includes("Survival") } onChange = {handleOccupationCheck} />
            <Skill name="Swim" value={skills.swim} checked={checkedOccupationalSkillsChecked.includes("Swim") } onChange = {handleOccupationCheck}/>
            <Skill name="Throw" value={skills.throw} checked={checkedOccupationalSkillsChecked.includes("Throw") } onChange = {handleOccupationCheck} />
            <Skill name="Track" value={skills.track} checked={checkedOccupationalSkillsChecked.includes("Track") } onChange = {handleOccupationCheck} />
            <Skill name="CustomSix" value={skills.customSix} checked={checkedOccupationalSkillsChecked.includes("CustomSix") } onChange = {handleOccupationCheck} />
            <Skill name="CustomSeven" value={skills.customSeven} checked={checkedOccupationalSkillsChecked.includes("CustomSeven") } onChange = {handleOccupationCheck} />
            <Skill name="CustomEight" value={skills.customEight} checked={checkedOccupationalSkillsChecked.includes("CustomEight") } onChange = {handleOccupationCheck} />  
            <Skill name="CustomNine" value={skills.customNine} checked={checkedOccupationalSkillsChecked.includes("CustomNine") } onChange = {handleOccupationCheck} />

        </div>

      </div>
    </>
  );
}

export default Characteristics;
