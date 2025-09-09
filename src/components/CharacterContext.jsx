import React, { createContext, useState } from "react";

export const CharacterContext = createContext();

export function CharacterProvider({ children }) {
  const [coreStats, setCoreStats] = useState({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    appearance: 0,
    power: 0,
    size: 0,
    education: 0,
    luck: 0
  });

  return (
    <CharacterContext.Provider value={{ coreStats, setCoreStats }}>
      {children}
    </CharacterContext.Provider>
  );
}
