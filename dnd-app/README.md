
# D&D Battle Score App

## Two Parts:
1. **Initiative** (form + table): "new player" + "initiative order"
2. **Battle Score** (table + form): "statblock" + "battle rounds"

## 1. INITIATIVE

### 1.1. New Player

**Form:**
```
    1. initiative: INPUT - initiative score
    2. name: INPUT - PC, NPC or monster name
    3. speed: INPUT - distance in ft in one move action
    4. perception: INPUT - perception check modifier
    5. stealth: INPUT - stealth check modifier
    6. AC: INPUT - armour class
    7. max HP: INPUT - maximum health points
```

**Button:**
```
    1. add: add new player to the initiative order table + reorder table rows in descending order by initiative score
    2. start: hide "new player" table + focus on "battle score"
    //TODO: 3. save: save player / monster to database
```

### 1.2. Initiative Order

**Columns:**
```
    1. initiative: CALC - initiative score from the "new player form"
    2. turn: CALC - generated from 1 to the number of players / monsters + active: highlight
    3. name: CALC - PC, NPC or monster name from the "new player form"
    4. reaction: CALC - generated based on the input from the "battle round" form
    5. condition: CALC - generated based on the input from the "battle round" form
    6. perception: CALC - perception check modifier from the "new player form"
    7. stealth: CALC - stealth check modifier from the "new player form"
    8. AC: CALC - armour class from the "new player form"
    9. max HP: CALC - maximum health points from the "new player form"
    10. current HP: CALC - maximum health minus the total damage score from the "battle rounds" form
```

**Rows:**
```
    number of players
```

## 2. BATTLE SCORE

### 2.1. Statblock

**Columns:**
```
    1. NAME: CALC - PC, NPC or monster name from the "new player form"
    2. BASIC:
        1. AC: CALC - armour class from the "new player form"
        2. HP: CALC - maximum health points from the "new player form"
        3. SPEED: CALC - speed from the "new player form"
        4. INIT: CALC - initiative score from the "new player form"
    3. STATS:
        1. STR: NUM INPUT - strength modifier
        2. DEX: NUM INPUT - dexterity modifier
        3. CON: NUM INPUT - constitution modifier
        4. INT: NUM INPUT - intellect modifier
        5. WIS: NUM INPUT - wisdom modifier
        6. CHA: NUM INPUT - charisma modifier
    4. TRAITS:
        1. SAVES: TEXT INPUT - dex +6, int +4 etc.
        2. SKILLS: TEXT INPUT - acrobatics, deception etc.
            1. stealth: CALC - stealth from the "new player form"
            2. perception: CALC - perception from the "new player form"
            3. ... other: TEXT INPUT
        3. RESISTANCES: TEXT INPUT - poison etc.
        4. IMMUNITIES: TEXT INPUT - non-magical etc.
        5. SENSES: TEXT INPUT - passive perception, proficiency bonus, darkvision etc.
        6. LANGUAGES: TEXT INPUT
    5. FEATS: TEXT INPUT
    6. ACTIONS: TEXT INPUT
        1. ATTACK
        2. BONUS ATTACK
        3. SPELLS
        4. REACTION
        5. LEGENDARY
        6. OTHER
    7. INVENTORY: TEXT INPUT
```

### 2.2. Battle Rounds

**Columns:**
```
    1. ACTION
        1. EFFECT
        2. ATTACK
        //TODO: add BUTTON for extra attack columns
            1. HIT
            2. DMG
    2. BONUS ACTION
        1. EFFECT
        2. ATTACK
        //TODO: add BUTTON for extra attack columns
            1. HIT
            2. DMG
```

**Rows:**
```
    number of turns
```
