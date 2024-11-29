// src/components/CombatantsList.tsx
import React from "react";
import { Combatant } from "../types/Combatant";

interface CombatantsListProps {
  combatants: Combatant[];
  currentTurn: number;
}

const CombatantsList: React.FC<CombatantsListProps> = ({
  combatants,
  currentTurn,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Initiative</th>
          <th>HP</th>
          <th>AC</th>
          <th>Actions</th>
          <th>Bonus Action</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {combatants.map((combatant, index) => (
          <tr
            key={combatant.name}
            style={{
              backgroundColor:
                index === currentTurn ? "lightblue" : "transparent",
            }}
          >
            <td>{combatant.name}</td>
            <td>{combatant.initiative}</td>
            <td>{combatant.hp}</td>
            <td>{combatant.ac}</td>
            <td>{combatant.actions}</td>
            <td>{combatant.bonusAction}</td>
            <td>{combatant.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CombatantsList;
