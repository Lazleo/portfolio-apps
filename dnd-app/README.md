# D&D Battle Score App

two parts:
    1. initiative (form + table): "new player" + "initiative order"
    2. battle score (table + form): "statblock" + "battle rounds"

### new player

form:
    1. initiative: INPUT - initiative score
    2. name: INPUT - PC, NPC or monster name
    3. perception: INPUT - perception check modifier
    4. stealth: INPUT - stealth check modifier
    5. AC: INPUT - armour class
    6. max HP: INPUT - maximum health points

button:
    1. add: add new player to the initiative order tanble + reorder table rows in descending order by initiative score
    2. start: hide "new player" table + focus on "battle score"

### initiative order

columns:
    1. initiative: CALC - initiative score from the "new player form"
    2. turn: CALC - generated from 1 to nr. of players / monsters + active: highlight
    3. name: CALC - PC, NPC or monster name from the "new player form"
    4. reaction: CALC - generated based on the input from the "battle round" form
    5. condition: CALC - generated based on the input from the "battle round" form
    6. perception: CALC - perception check modifier from the "new player form"
    7. stealth: CALC - stealth check modifier from the "new player form"
    8. AC: CALC - armour class from the "new player form"
    9. max HP: CALC - maximum health points from the "new player form"
    10. current HP: CALC - maximum health minus the total damage score from the "battle rounds" form

### statblock

columns:
    1. 

### battle rounds