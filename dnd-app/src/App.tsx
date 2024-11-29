// src/App.tsx
import React, { useState, useEffect } from "react";
import { Combatant } from "./types/Combatant";
import AddCombatantForm from "./components/AddCombatantForm";
import CombatantsList from "./components/CombatantsList";
import CombatantTurn from "./components/CombatantTurn";

const App: React.FC = () => {
  const [combatants, setCombatants] = useState<Combatant[]>(
    JSON.parse(localStorage.getItem("combatants") || "[]")
  );
  const [currentTurn, setCurrentTurn] = useState(0);

  // Update localStorage whenever the combatants array changes
  useEffect(() => {
    localStorage.setItem("combatants", JSON.stringify(combatants));
  }, [combatants]);

  // Add a new combatant and sort them by initiative
  const addCombatant = (combatant: Combatant) => {
    setCombatants((prevCombatants) => {
      const updatedCombatants = [...prevCombatants, combatant];
      updatedCombatants.sort((a, b) => b.initiative - a.initiative); // Sort by initiative
      return updatedCombatants;
    });
  };

  // Update a combatant's data (e.g., actions, movement)
  const updateCombatant = (updatedCombatant: Combatant) => {
    setCombatants((prevCombatants) => {
      return prevCombatants.map((combatant) =>
        combatant.name === updatedCombatant.name ? updatedCombatant : combatant
      );
    });
  };

  // Move to the next turn in initiative order
  const nextTurn = () => {
    setCurrentTurn((prevTurn) => (prevTurn + 1) % combatants.length);
  };

  return (
    <div>
      <h1>Combat Tracker</h1>
      <AddCombatantForm addCombatant={addCombatant} />
      {combatants !== null && combatants.length > 0 && (
        <>
          <CombatantsList combatants={combatants} currentTurn={currentTurn} />

          <CombatantTurn
            combatant={combatants[currentTurn]}
            updateCombatant={updateCombatant}
          />
        </>
      )}
      <button onClick={nextTurn}>Next Turn</button>
    </div>
  );
};

export default App;
