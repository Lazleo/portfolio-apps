// src/components/CombatantTurn.tsx
import React, { useState } from "react";
import { Combatant } from "../types/Combatant";

interface CombatantTurnProps {
  combatant: Combatant;
  updateCombatant: (combatant: Combatant) => void;
}

const CombatantTurn: React.FC<CombatantTurnProps> = ({
  combatant,
  updateCombatant,
}) => {
  const [action, setAction] = useState(combatant.actions);
  const [bonusAction, setBonusAction] = useState(combatant.bonusAction);
  const [movement, setMovement] = useState(0);

  const handleUpdate = () => {
    updateCombatant({
      ...combatant,
      actions: action,
      bonusAction,
      notes: combatant.notes,
    });
  };

  return (
    <div>
      <h3>{combatant.name}'s Turn</h3>
      <input
        value={action}
        onChange={(e) => setAction(e.target.value)}
        placeholder="Action"
      />
      <input
        value={bonusAction}
        onChange={(e) => setBonusAction(e.target.value)}
        placeholder="Bonus Action"
      />
      <input
        value={movement}
        onChange={(e) => setMovement(Number(e.target.value))}
        type="number"
        placeholder="Movement"
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default CombatantTurn;
