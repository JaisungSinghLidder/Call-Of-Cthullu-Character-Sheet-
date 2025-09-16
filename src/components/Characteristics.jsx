import React, { useContext, useState } from "react";
import "./Characteristics.css";
import { CharacterContext } from "./CharacterContext";
import occupationData from "./occupations.json";

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
      return coreStats.education * 4;
    } else {
      const values = Object.values(coreStats);
      const maxCoreStat = Math.max(...values);
      return coreStats.education * 2 + maxCoreStat * 2;
    }
  }

  function calculatePersonalPoints() {
    return coreStats.intelligence * 2;
  }

  function Skill({ name, value }) {
  return (
    <div className="skill-div">
      <label>
        <input type="checkbox" />
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

            <Skill name="Accounting" value={skills.accounting} />
            <Skill name="Anthropology" value={skills.anthropology} /> 
            <Skill name="Appraise" value={skills.appraise} />
            <Skill name="Archaeology" value={skills.archaeology} />
            <Skill name="CustomArt" value={skills.customArt} />
            <Skill name="CustomOne" value={skills.customOne} />
            <Skill name="Charm" value={skills.charm} />
            <Skill name="Climb" value={skills.climb} />
            <Skill name="Credit Rating" value={skills.creditRating} />
            <Skill name="Cthulhu Mythos" value={skills.cthulluMythos} />
            <Skill name="Disguise" value={skills.disguise} />
            <Skill name="Dodge" value={skills.dodge} />
            <Skill name="Drive Auto" value={skills.driveAuto} />
            <Skill name="Elec. Repair" value={skills.elecRepair} />
            <Skill name="Fast Talk" value={skills.fastTalk} />
            <Skill name="Fighting(Brawl)" value={skills.fightingBrawl} />
            <Skill name="CustomeFightingOne" value={skills.fightingCustomOne} />
            <Skill name="CustomFightingTwo" value={skills.fightingCustomTwo} />  
            <Skill name="Firearms(Handgun)" value={skills.firearmsHandgun} />
            
        </div>

        <div className="characteristicsColumn">Hello World</div>
        <div className="characteristicsColumn">Hello World</div>
      </div>
    </>
  );
}

export default Characteristics;
