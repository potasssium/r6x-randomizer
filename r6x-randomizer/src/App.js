import React, { useState, useEffect } from 'react';
import './App.css';
// Import everything from operatorMetadata
import operatorData, {
  primaryDefaults,
  secondaryDefault,
  getOperatorIcon,
  getOperatorPicture,
  getWeaponImage,
  getSightImage,
  getBarrelImage,
  getLaserImage,
  getGadgetImage,
  slugify
} from './operatorMetadata';

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function RandomizedOperatorDisplay() {
  // Pick a random operator
  const operator = getRandomElement(operatorData);
  // Pick a random primary weapon
  const primary = getRandomElement(operator.primaryWeapons);
  // For demo, assume all attachments are available (customize as needed)
  const sights = operator.primaryDefaults?.sights?.magnifying?.concat(operator.primaryDefaults?.sights?.nonmagnifying || [], operator.primaryDefaults?.sights?.nosight || []) || [];
  const barrels = operator.primaryDefaults?.barrels || [];
  const lasers = operator.primaryDefaults?.lasers || [];
  const sight = getRandomElement(sights);
  const barrel = getRandomElement(barrels);
  const laser = getRandomElement(lasers);

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8, maxWidth: 400 }}>
      <h2>Random Operator: {operator.name}</h2>
      <img src={getOperatorPicture(operator.name)} alt={operator.name + ' picture'} style={{ width: 200, height: 300, objectFit: 'cover' }} />
      <h3>Primary Weapon: {primary.name}</h3>
      <img src={getWeaponImage(primary.name, 'primary')} alt={primary.name + ' image'} style={{ width: 128, height: 32 }} />
      <div>
        <h4>Sight: {sight}</h4>
        <img src={getSightImage(sight)} alt={sight + ' image'} style={{ width: 64, height: 32 }} />
      </div>
      <div>
        <h4>Barrel: {barrel}</h4>
        <img src={getBarrelImage(barrel)} alt={barrel + ' image'} style={{ width: 64, height: 32 }} />
      </div>
      <div>
        <h4>Laser: {laser}</h4>
        <img src={getLaserImage(laser)} alt={laser + ' image'} style={{ width: 64, height: 32 }} />
      </div>
    </div>
  );
}

// Example usage in your App component:
// <RandomizedOperatorDisplay />

// Utility to pick random element
const randomFrom = arr => arr[Math.floor(Math.random() * arr.length)];

// Function to remove duplicate operators and ensure equal distribution
const getUniqueOperators = (role) => {
  const pool = operatorData.filter(op => op.role === role);
  const uniqueOperators = [];
  const seenNames = new Set();
  const duplicates = [];
  
  for (const op of pool) {
    if (!seenNames.has(op.name)) {
      seenNames.add(op.name);
      uniqueOperators.push(op);
    } else {
      duplicates.push(op.name);
    }
  }
  
  if (duplicates.length > 0) {
    console.error(`DUPLICATE OPERATORS FOUND for ${role}s:`, duplicates);
  }
  
  return uniqueOperators;
};

// Function to analyze all operators and find duplicates
const analyzeOperators = () => {
  console.log("=== OPERATOR ANALYSIS ===");
  console.log("Total operators in data:", operatorData.length);
  
  // Check for duplicate names
  const allNames = operatorData.map(op => op.name);
  const nameCounts = {};
  allNames.forEach(name => {
    nameCounts[name] = (nameCounts[name] || 0) + 1;
  });
  
  const duplicates = Object.entries(nameCounts).filter(([name, count]) => count > 1);
  
  if (duplicates.length > 0) {
    console.error("DUPLICATE OPERATOR NAMES FOUND:");
    duplicates.forEach(([name, count]) => {
      console.error(`  ${name}: appears ${count} times`);
    });
  }
  
  // Count by role
  const attackers = operatorData.filter(op => op.role === 'attacker');
  const defenders = operatorData.filter(op => op.role === 'defender');
  
  console.log(`Attackers: ${attackers.length}`);
  console.log(`Defenders: ${defenders.length}`);
  
  // List all operators by role
  console.log("All attackers:", attackers.map(op => op.name).sort());
  console.log("All defenders:", defenders.map(op => op.name).sort());
  
  console.log("=== END ANALYSIS ===");
};


function App() {
  const [selectedOp, setSelectedOp] = useState(null);
  const [roleFilter, setRoleFilter] = useState('attacker');
  const [mode, setMode] = useState('normal'); // 'normal' or 'challenge'

  useEffect(() => {
    analyzeOperators();
    
    // Simple test to see what operators are loaded
    console.log("=== SIMPLE TEST ===");
    console.log("First 5 operators:", operatorData.slice(0, 5).map(op => op.name));
    console.log("Last 5 operators:", operatorData.slice(-5).map(op => op.name));
    console.log("=== END SIMPLE TEST ===");
  }, []);

  const pickRandom = (role = roleFilter) => {
    // Get unique operators for the role, equal distribution
    const pool = getUniqueOperators(role);
    console.log(`Available ${role}s:`, pool.length, pool.map(op => op.name));
    
    if (pool.length === 0) {
      console.log('No operators found for role:', role);
      return;
    }
    
    // random selection
    const randomIndex = Math.floor(Math.random() * pool.length);
    const op = pool[randomIndex];
    console.log('Selected operator:', op.name);
    
    // Check for custom playstyle overrides
    let availablePlaystyles = op.playstyles;
    if (op.playstyleOverrides) {
      if (op.playstyleOverrides.add) {
        availablePlaystyles = [...op.playstyles, ...op.playstyleOverrides.add];
      }
      if (op.playstyleOverrides.remove) {
        availablePlaystyles = availablePlaystyles.filter(style => 
          !op.playstyleOverrides.remove.includes(style)
        );
      }
      if (op.playstyleOverrides.replace) {
        availablePlaystyles = op.playstyleOverrides.replace;
      }
    }
    
    // Get challenge restrictions if in challenge mode
    let challengeRestrictions = [];
    if (mode === 'challenge') {
      challengeRestrictions = getChallengeRestrictions(op);
    
    }
    
    const playstyle = randomFrom(availablePlaystyles);
    console.log(`${op.name} selected playstyle:`, playstyle);

    // Randomly select one primary weapon
    const selectedPrimary = randomFrom(op.primaryWeapons);
    
    // Get available attachments for primary weapon (respecting overrides)
    const removeSections = selectedPrimary.overrides?.removeSections || [];
    
    // Properly concatenate sights arrays and handle overrides
    let primarySights = [];
    if (!removeSections.includes("sights")) {
      const magnifying = op.primaryDefaults.sights.magnifying || [];
      const nonmagnifying = op.primaryDefaults.sights.nonmagnifying || [];
      const nosight = op.primaryDefaults.sights.nosight || [];
      
      // Combine all sight types
      primarySights = [...magnifying, ...nonmagnifying, ...nosight];
      
      // Remove sights specified in overrides
      if (selectedPrimary.overrides?.sights?.remove) {
        primarySights = primarySights.filter(sight => 
          !selectedPrimary.overrides.sights.remove.includes(sight)
        );
      }
      
      // Add custom sights if specified
      if (selectedPrimary.overrides?.sights?.add) {
        primarySights = [...primarySights, ...selectedPrimary.overrides.sights.add];
      }
    }
    
    const primaryBarrels = removeSections.includes("barrels") ? [] :
      op.primaryDefaults.barrels.filter(barrel => 
        !selectedPrimary.overrides?.barrels?.remove?.includes(barrel)
      );
    
    const primaryGrips = removeSections.includes("grips") ? [] : op.primaryDefaults.grips;
    const primaryLasers = removeSections.includes("lasers") ? [] : op.primaryDefaults.lasers;

    // Randomly select one secondary weapon (check if array is not empty)
    const selectedSecondary = op.secondaryWeapons.length > 0 ? randomFrom(op.secondaryWeapons) : null;
    
    // Get available attachments for secondary weapon
    const secondaryRemoveSections = selectedSecondary?.overrides?.removeSections || [];
    
    // Properly concatenate secondary sights
    let secondarySights = [];
    if (!secondaryRemoveSections.includes("sights")) {
      const nonmagnifying = op.secondaryDefault.sights.nonmagnifying || [];
      const nosight = op.secondaryDefault.sights.nosight || [];
      secondarySights = [...nonmagnifying, ...nosight];
    }
    
    const secondaryBarrels = secondaryRemoveSections.includes("barrels") ? [] : op.secondaryDefault.barrels;
    const secondaryLasers = secondaryRemoveSections.includes("lasers") ? [] : op.secondaryDefault.lasers;

    // Randomly select primary weapon attachments (only if arrays are not empty)
    const selectedPrimarySight = primarySights.length > 0 ? randomFrom(primarySights) : null;
    const selectedPrimaryBarrel = primaryBarrels.length > 0 ? randomFrom(primaryBarrels) : null;
    const selectedPrimaryGrip = primaryGrips.length > 0 ? randomFrom(primaryGrips) : null;
    const selectedPrimaryLaser = primaryLasers.length > 0 ? randomFrom(primaryLasers) : null;

    const primaryLoadout = {
      name: selectedPrimary.name,
      imageUrl: getWeaponImage(selectedPrimary.name, 'primary'),
      attachments: {
        sight: selectedPrimarySight ? { name: selectedPrimarySight } : null,
        barrel: selectedPrimaryBarrel ? { name: selectedPrimaryBarrel } : null,
        grip: selectedPrimaryGrip ? { name: selectedPrimaryGrip } : null,
        laser: selectedPrimaryLaser ? { name: selectedPrimaryLaser } : null
      }
    };

    // Randomly select secondary weapon attachments (only if arrays are not empty)
    const selectedSecondarySight = secondarySights.length > 0 ? randomFrom(secondarySights) : null;
    const selectedSecondaryBarrel = secondaryBarrels.length > 0 ? randomFrom(secondaryBarrels) : null;
    const selectedSecondaryLaser = secondaryLasers.length > 0 ? randomFrom(secondaryLasers) : null;

    const secondaryLoadout = selectedSecondary ? {
      name: selectedSecondary.name,
      imageUrl: getWeaponImage(selectedSecondary.name, 'secondary'),
      attachments: {
        sight: selectedSecondarySight ? { name: selectedSecondarySight } : null,
        barrel: selectedSecondaryBarrel ? { name: selectedSecondaryBarrel } : null,
        laser: selectedSecondaryLaser ? { name: selectedSecondaryLaser } : null
      }
    } : null;

    // Randomly select one gadget (check if array is not empty)
    const selectedGadget = op.gadgets.length > 0 ? randomFrom(op.gadgets) : null;

    setSelectedOp({
      ...op,
      playstyle,
      primaryLoadout,
      secondaryLoadout,
      selectedGadget,
      challengeRestrictions
    });
  };

  const handleRoleChange = (newRole) => {
    setRoleFilter(newRole);
    pickRandom(newRole);
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    if (selectedOp) {
      pickRandom(roleFilter); // Re-randomize with new mode
    }
  };

  // Challenge mode restrictions
  const getChallengeRestrictions = (operator) => {
    const restrictions = [];
    
    // Separate challenge pools for attackers and defenders with descriptions
    const attackerChallenges = [
      { name: "Entry Fragger Only", description: "You must be the first one to enter site and get kills" },
      { name: "Crawl Only", description: "You must crawl everywhere - no walking or running" },
      { name: "Walk Only", description: "You can only walk - no running or sprinting allowed" },
      { name: "Running Only", description: "You must always be running - no walking or stopping" },
      { name: "Pistol Party", description: "Your only weapon is your sidearm—go full John Wick" },
      { name: "Window Licker", description: "Doors are for the weak. You may only enter the objective through windows or hatches" },
      { name: "Frag Fest", description: "Your only \"weapons\" are throwables: frag grenades, impact nades, breach charges, claymores, etc", requires: ["throwables"] },
      { name: "Melee Maestro", description: "Keep it up close and personal—no bullets, only blades" },
      { name: "Upside‑Down Rappel Rodeo", description: "Only rappel inverted (face into the wall) whenever possible—and try to shoot while upside‑down"},
      { name: "Thermite's Light Show", description: "Equip only flashbangs and Thermite charges—no frag grenades. Every breach must be immediately followed by a flash", requires: ["thermite", "stun_grenades"]},
      { name: "Shovel Salvage", description: "No aiming down sights—only hip‑fire melees (knife or shield bash)", requires: ["montagne"]},
      { name: "Gadget Hoarder", description: "You may only reload if you've deployed at least one gadget (breach charge, claymore, etc.) since your last kill"},
    ];
    
    const defenderChallenges = [
      { name: "Melee Mayhem", description: "Let the attackers bring bullets—you bring fists"},
      { name: "Crawl Only", description: "You must crawl everywhere - no walking or running"},
      { name: "Walk Only", description: "You can only walk - no running or sprinting allowed" },
      { name: "Running Only", description: "You must always be running - no walking or stopping"},
      { name: "Crouch Commando", description: "You may never stand up. Crouch or go prone only"},
      { name: "Pistol Party", description: "Your only weapon is your sidearm—go full John Wick" },
      { name: "Reinforcement Rambo", description: "Reinforce everything you can"},
      { name: "Trap Happy", description: "You may only use traps and gadget damage—no shooting. Think Kapkan, Frost, Lesion, Goyo… even Ela mines counts", requires: ["traps"]},
      { name: "Camera Commander", description: "Guns are overrated—kill strictly via cameras or automated gadgets: Bulletproof cams, Maestro turrets…"},
      { name: "Spawn Peekathon", description: "The battlefield begins the moment they spawn"},
      { name: "Mute Jam‑athon", description: "Place all jammers on one wall and refuse to move more than two meters from them", objective: "Deny three breaches from that wall without crossing the two‑meter radius", requires: ["mute"]},
      { name: "Doorframe Doom", description: "Before firing through any door or window, stand in the frame for a full 3 seconds—give them a \"warning peek\""},
      { name: "Alternate Entrances", description: "Exactly half of the barricadable doorframes/windows on site must be barricaded at round start—no more, no less"},
      { name: "Hip‑Fire Hero", description: "No aiming down sights—hip‑fire only"},
      { name: "Bait & Switch", description: "You cannot open fire until an enemy shoots at you first"},
      { name: "Lockdown Logic", description: "You may only open rotation hatches and holes—no bullet holes in soft walls"},
      { name: "Door‑Marathon", description: "Every time you go through a reinforced door, you must hit it with your melee ('hammer') gadget before passing", objective: "Reinforce all doors you touch, melee them, then still win the round"},
    ];
    
    // Choose challenge pool based on operator role
    let challengeTypes = operator.role === 'attacker' ? attackerChallenges : defenderChallenges;
    
    // Filter challenges based on operator capabilities
    challengeTypes = challengeTypes.filter(challenge => {
      if (!challenge.requires) return true; // No requirements
      
      // Handle multiple requirements (all must be met)
      return challenge.requires.every(requirement => {
        switch (requirement) {
          case "throwables":
            const throwableGadgets = ["Frag Grenade", "Impact Grenade", "Breach Charge", "Claymore", "Hard Breach Charge", "EMP Grenade", "Smoke Grenade", "Stun Grenade", "Flashbang"];
            return operator.gadgets.some(gadget => throwableGadgets.includes(gadget));
          
          case "thermite":
            return operator.name === "Thermite";
          
          case "stun_grenades":
            return operator.gadgets.includes("Stun Grenade") || operator.gadgets.includes("Flashbang");
          
          case "montagne":
            return operator.name === "Montagne";
          
          case "traps":
            const trapGadgets = ["Barbed Wire", "Proximity Alarm", "Observation Blocker", "Bulletproof Camera"];
            return operator.gadgets.some(gadget => trapGadgets.includes(gadget));
          
          case "mute":
            return operator.name === "Mute";
          
          default:
            return true;
        }
      });
    });
    
    // Apply 1-2 random restrictions
    const numRestrictions = Math.floor(Math.random() * 2) + 1;
    const selectedChallenges = [];
    
    // Define mutually exclusive challenge groups
    const movementChallenges = ["Crawl Only", "Walk Only", "Running Only", "Crouch Commando", "Upside‑Down Rappel Rodeo"];
    const weaponChallenges = ["Frag Fest", "Pistol Party", "Knife Only", "Melee Maestro", "Melee Mayhem", "Shovel Salvage"];
    
    for (let i = 0; i < numRestrictions; i++) {
      const availableChallenges = challengeTypes.filter(challenge => {
        // Don't select if already chosen
        if (selectedChallenges.includes(challenge.name)) return false;
        
        // Don't select movement challenges if one is already selected
        if (movementChallenges.includes(challenge.name)) {
          return !selectedChallenges.some(selected => movementChallenges.includes(selected));
        }
        
        // Don't select weapon challenges if one is already selected
        if (weaponChallenges.includes(challenge.name)) {
          return !selectedChallenges.some(selected => weaponChallenges.includes(selected));
        }
        
        return true;
      });
      
      if (availableChallenges.length > 0) {
        const randomChallenge = randomFrom(availableChallenges);
        selectedChallenges.push(randomChallenge.name);
        restrictions.push(randomChallenge);
      }
    }
    
    return restrictions;
  };

  return (
    <div className="App">
      <header>
        <h1>R6 Siege Randomizer</h1>
        
        {/* Mode Selection */}
        <div className="controls">
          <button 
            className={`mode-button ${mode === 'normal' ? 'active' : ''}`}
            onClick={() => handleModeChange('normal')}
          >
            NORMAL MODE
          </button>
          <button 
            className={`mode-button ${mode === 'challenge' ? 'active' : ''}`}
            onClick={() => handleModeChange('challenge')}
          >
            CHALLENGE MODE
          </button>
        </div>
        
        {/* Role Selection */}
        <div className="controls">
          <button 
            className={`role-button ${roleFilter === 'attacker' ? 'active' : ''}`}
            onClick={() => handleRoleChange('attacker')}
          >
            ATTACKER
          </button>
          <button 
            className={`role-button ${roleFilter === 'defender' ? 'active' : ''}`}
            onClick={() => handleRoleChange('defender')}
          >
            DEFENDER
          </button>
        </div>
      </header>

      {selectedOp && (
        <main className="operator-card">
          <div className="operator-header">
            <div className="operator-images">
              <img 
                src={selectedOp.picture || getOperatorPicture(selectedOp.name)} 
                alt={selectedOp.name + ' picture'} 
                className="operator-picture"
              />
            </div>
            
            <div className="operator-info">
              <h2 className="operator-name">
                {selectedOp.name}
                <img 
                  src={getOperatorIcon(selectedOp.name)} 
                  alt={selectedOp.name + ' icon'} 
                  className="operator-icon"
                />
              </h2>
              <span className="operator-role">{selectedOp.role}</span>
              
              <div className="playstyle">
                <strong>Playstyle:</strong> {selectedOp.playstyle}
              </div>

              {mode === 'challenge' && (
                <div className="challenge-restrictions">
                  <strong>Challenge Restrictions:</strong>
                  <ul>
                    {selectedOp.challengeRestrictions.map((restriction, index) => (
                      <li key={index}>
                        <div className="challenge-name">{restriction.name}</div>
                        <div className="challenge-description">{restriction.description}</div>
                        {restriction.objective && (
                          <div className="challenge-objective">Objective: {restriction.objective}</div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <section>
                <div className="weapon-loadout">
                  <h3>Primary Weapon</h3>
                  <img 
                    src={selectedOp.primaryLoadout.imageUrl} 
                    alt={selectedOp.primaryLoadout.name + ' image'} 
                    className={`weapon-image ${selectedOp.primaryLoadout.name.includes('Shield') ? 'weapon-shield' : ''} ${selectedOp.primaryLoadout.name === 'Ballistic Shield' ? 'weapon-ballistic-shield' : ''}`}
                  />
                  <p className="weapon-name">{selectedOp.primaryLoadout.name}</p>
                  <ul className="attachments-list">
                    {selectedOp.primaryLoadout.attachments.sight && (
                      <li>
                        Sight: {selectedOp.primaryLoadout.attachments.sight.name}
                      </li>
                    )}
                    {selectedOp.primaryLoadout.attachments.barrel && (
                      <li>
                        Barrel: {selectedOp.primaryLoadout.attachments.barrel.name}
                      </li>
                    )}
                    {selectedOp.primaryLoadout.attachments.grip && (
                      <li>
                        <span>Grip: {selectedOp.primaryLoadout.attachments.grip.name}</span>
                      </li>
                    )}
                    {selectedOp.primaryLoadout.attachments.laser && (
                      <li>
                        Laser: {selectedOp.primaryLoadout.attachments.laser.name}
                      </li>
                    )}
                  </ul>
                </div>
              </section>

              {selectedOp.secondaryLoadout && (
                <section>
                  <div className="weapon-loadout">
                    <h3>Secondary Weapon</h3>
                    <img 
                      src={selectedOp.secondaryLoadout.imageUrl} 
                      alt={selectedOp.secondaryLoadout.name + ' image'} 
                      className={`weapon-image ${selectedOp.secondaryLoadout.name.includes('Shield') ? 'weapon-shield' : ''} ${selectedOp.secondaryLoadout.name === 'Ballistic Shield' ? 'weapon-ballistic-shield' : ''}`}
                    />
                    <p className="weapon-name">{selectedOp.secondaryLoadout.name}</p>
                    <ul className="attachments-list">
                      {selectedOp.secondaryLoadout.attachments.sight && (
                        <li>
                          Sight: {selectedOp.secondaryLoadout.attachments.sight.name}
                        </li>
                      )}
                      {selectedOp.secondaryLoadout.attachments.barrel && (
                        <li>
                          Barrel: {selectedOp.secondaryLoadout.attachments.barrel.name}
                        </li>
                      )}
                      {selectedOp.secondaryLoadout.attachments.laser && (
                        <li>
                          Laser: {selectedOp.secondaryLoadout.attachments.laser.name}
                        </li>
                      )}
                    </ul>
                  </div>
                </section>
              )}

              {selectedOp.selectedGadget && (
                <section>
                  <div className="gadget-loadout">
                    <h3>Gadget</h3>
                    {getGadgetImage(selectedOp.selectedGadget) && (
                      <img 
                        src={getGadgetImage(selectedOp.selectedGadget)} 
                        alt={selectedOp.selectedGadget + ' image'} 
                        className={`gadget-image ${selectedOp.selectedGadget === 'EMP Grenade' ? 'gadget-EMP' : ''} ${selectedOp.selectedGadget === 'Deployable Shield' ? 'gadget-shield' : ''}`}
                      />
                    )}
                    <span className="gadget-name">{selectedOp.selectedGadget}</span>
                  </div>
                </section>
              )}
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
