import React, { useState } from "react";
import { Combatant } from "../types/Combatant";

interface AddCombatantFormProps {
  addCombatant: (combatant: Combatant) => void;
}

const AddCombatantForm: React.FC<AddCombatantFormProps> = ({
  addCombatant,
}) => {
  const [name, setName] = useState("");
  const [hp, setHp] = useState(0);
  const [ac, setAc] = useState(0);
  const [initiative, setInitiative] = useState(0);
  const [actions, setActions] = useState("");
  const [bonusAction, setBonusAction] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCombatant: Combatant = {
      name,
      hp,
      ac,
      initiative,
      actions,
      bonusAction,
      notes,
    };
    addCombatant(newCombatant);
    // Clear the form
    setName("");
    setHp(0);
    setAc(0);
    setInitiative(0);
    setActions("");
    setBonusAction("");
    setNotes("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        value={hp}
        onChange={(e) => setHp(Number(e.target.value))}
        type="number"
        placeholder="HP"
        required
      />
      <input
        value={ac}
        onChange={(e) => setAc(Number(e.target.value))}
        type="number"
        placeholder="AC"
        required
      />
      <input
        value={initiative}
        onChange={(e) => setInitiative(Number(e.target.value))}
        type="number"
        placeholder="Initiative"
        required
      />
      <textarea
        value={actions}
        onChange={(e) => setActions(e.target.value)}
        placeholder="Actions"
      />
      <textarea
        value={bonusAction}
        onChange={(e) => setBonusAction(e.target.value)}
        placeholder="Bonus Action"
      />
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Notes"
      />
      <button type="submit">Add Combatant</button>
    </form>
  );
};

export default AddCombatantForm;
