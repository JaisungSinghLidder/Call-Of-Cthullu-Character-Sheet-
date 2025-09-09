import React from "react";
import { useState } from "react";
import "./Characteristics.css";

function Characteristics()
{

    function Skills() {
        const [skills, setSkills] = useState({
            accounting : 5,
            anthropology : 1,
            appraise : 5,
            archaeology : 1, 
            customArt : 5, 
            customOne : 0, 
            charm : 15, 
            climb : 20, 
            creditRating : 0, 
            cthulluMythos : 0, 
            disguise : 5, 
            dodge : 0, 
            driveAuto : 20, 
            elecRepair : 10, 
            fastTalk : 5, 
            fightingBrawl : 25,
            fightingCustomOne : 0,
            fightingCustomTwo : 0, 
            firearmsHandgun : 20, 
            fireArmsRifle: 25, 
            firearmsCustom : 0, 
            firstAid : 30,
            history : 5, 
            intimidate  : 15, 
            jump : 20, 
            languageOther : 1, 
            customTwo : 0,
            customThree : 0,
            languageOwn : 0, 
            law : 5, 
            libraryUse : 20,
            listen : 20, 
            locksmith: 1,
            mechRepair : 10,
            medicine : 1, 
            naturalWorld : 10, 
            navigate : 10,
            occult : 5, 
            persuade : 10,
            pilotCustom : 1, 
            psychoanalysis: 1, 
            psychology : 10,
            ride : 5, 
            scienceCustom : 1,
            customFour : 0,
            customFive : 0,
            sleightOfHand : 10, 
            spotHidden : 25, 
            stealth : 20, 
            survivalCustom : 10, 
            swim : 20,
            throw : 20, 
            track : 20, 
            customSix : 0,
            customSeven : 0,
            customEight : 0,
            customNine : 0 
    });
    

    return(
        <div className="characterisitics">
            <div className="characteristicsColumn">
                Hello World
            </div>
            <div className="characteristicsColumn">
                Hello World
            </div>
            <div className="characteristicsColumn">
                Hello World
            </div>
        </div>
    );
}


}



export default Characteristics;