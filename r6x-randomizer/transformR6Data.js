// transformR6Data.js
// Generates operatorData.js with shared defaults and no repeated blocks

const fs = require('fs');
const path = require('path');
const { OPERATORS } = require('r6data');

// ---- Shared Defaults ----
const primaryDefaults = {
  sights: {
    magnifying: ["Magnified A","Magnified B","Magnified C"],
    nonmagnifying: [
      "Red Dot A","Red Dot B","Red Dot C",
      "Holo A","Holo B","Holo C","Holo D",
      "Reflex A","Reflex B","Reflex C"
    ],
    nosight: ["Iron Sight"]
  },
  barrels: [
    "No Barrel","Suppressor","Flash Hider",
    "Compensator","Muzzle Brake","Extended Barrel"
  ],
  grips: ["Vertical Grip","Angled Grip","Horizontal Grip"],
  lasers: ["Laser","No Laser"]
};

const secondaryDefault = {
  sights: {
    nonmagnifying: [
      "Red Dot A","Red Dot B","Red Dot C",
      "Holo A","Holo B","Holo C","Holo D",
      "Reflex A","Reflex B","Reflex C"
    ],
    nosight: ["Iron Sight"]
  },
  barrels: ["Muzzle Brake","Suppressor"],
  lasers: ["Laser","No Laser"]
};

const attackPlaystyles = {
  playstyles: {
    playstyle: [
      "Intel / Drone Op","Rush","Slow Push",
      "Support / Utility","Flank / Split Pusher","Site Anchor / Plantholder"
    ]
  }
};

const defendPlaystyles = {
  playstyles: {
    playstyle: ["Anchor","Roamer","Intel / Denial","Support"]
  }
};

// ---- Build Operator Entries ----
const entriesData = OPERATORS.map(op => {
  return {
    name: op.name,
    role: op.side === 'attack' ? 'attacker' : 'defender',
    icon: '',
    primaryWeapons: op.weapons.primary.map(w => ({ name: w.slug, overrides: {} })),
    secondaryWeapons: op.weapons.secondary.map(w => ({ name: w.slug, overrides: {} })),
    gadgets: op.gadgets.secondary,
    isAttacker: op.side === 'attack'
  };
});

// ---- Generate operatorData.js Content ----
let output = '';
output += '// operatorData.js - generated file\n';
output += '// Shared defaults at top, entries reference them by name\n\n';

// Export shared constants
output += 'export const primaryDefaults = ' + JSON.stringify(primaryDefaults, null, 2) + ';\n\n';
output += 'export const secondaryDefault = ' + JSON.stringify(secondaryDefault, null, 2) + ';\n\n';
output += 'export const attackPlaystyles = ' + JSON.stringify(attackPlaystyles, null, 2) + ';\n\n';
output += 'export const defendPlaystyles = ' + JSON.stringify(defendPlaystyles, null, 2) + ';\n\n';

// Build operatorData array
output += 'const operatorData = [\n';
entriesData.forEach(entry => {
  // Determine playstyles reference
  const psRef = entry.isAttacker
    ? 'attackPlaystyles.playstyles.playstyle'
    : 'defendPlaystyles.playstyles.playstyle';

  output += '  {\n';
  output += `    name: ${JSON.stringify(entry.name)},\n`;
  output += `    role: ${JSON.stringify(entry.role)},\n`;
  output += '    icon: "",\n';
  output += '    primaryDefaults,\n';
  output += '    primaryWeapons: ' + JSON.stringify(entry.primaryWeapons, null, 2) + ',\n';
  output += '    secondaryDefault,\n';
  output += '    secondaryWeapons: ' + JSON.stringify(entry.secondaryWeapons, null, 2) + ',\n';
  output += '    gadgets: ' + JSON.stringify(entry.gadgets, null, 2) + ',\n';
  output += `    playstyles: ${psRef}\n`;
  output += '  },\n';
});
output += '];\n\n';
output += 'export default operatorData;\n';

// ---- Write File ----
fs.writeFileSync(path.join(__dirname, 'operatorData.js'), output);
console.log('✓ operatorData.js generated successfully');
