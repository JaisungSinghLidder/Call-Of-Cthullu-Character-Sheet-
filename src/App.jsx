import { useState } from "react";
import CharacterSheet from "./components/CharacterSheet";
import Notes from "./components/Notes";

function App() {
  const [activeTab, setActiveTab] = useState("sheet");

  return (
    <div className="app">
      <nav className="tabs">
        <button onClick={() => setActiveTab("sheet")}>Character Sheet</button>
        <button onClick={() => setActiveTab("notes")}>Notes</button>
      </nav>

      {activeTab === "sheet" && <CharacterSheet />}
      {activeTab === "notes" && <Notes />}
    </div>
  );
}

export default App;
