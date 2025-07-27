export const primaryDefaults = {
  sights: {
    magnifying: [
      "Magnified A", "Magnified B", "Magnified C"
    ],
    nonmagnifying: [
      "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C"
    ],
    nosight: ["Iron Sight"]
  },
  barrels: [
    "No Barrel", "Suppressor", "Flash Hider", "Compensator", "Muzzle Brake", "Extended Barrel"
  ],
  grips: ["Vertical Grip", "Angled Grip", "Horizontal Grip"],
  lasers: ["Laser", "No Laser"]
};

// Shared default attachments for secondary weapons
export const secondaryDefault = {
  sights: {
    nonmagnifying: [
      "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C"
    ],
    nosight: ["Iron Sight"]
  },
  barrels: ["Muzzle Brake", "Suppressor"],
  lasers: ["Laser", "No Laser"]
};

// Attacker playstyles
export const attackPlaystyles = {
  playstyles: {
    playstyle: ["Intel / Drone Op", "Rush", "Slow Push", "Support / Utility", "Flank / Split Pusher", "Site Anchor / Plantholder"]
  }
};

// ATTACKERS
const operatorData = [
  { name: "Ace",        role: "attacker", icon: "", primaryDefaults, primaryWeapons: [ 
    { name: "AK-12", overrides: {barrels: { remove: ["Extended Barrel"]}},
      name: "M1014", overrides: {removeSections: ["magnifying", "barrels"]}}], secondaryDefault, secondaryWeapons: [
            { name: "P9", overrides: {removeSections: ["sights", "barrels"]}}], gadgets: ["Claymore", "Breach Charge"], playstyles: attackPlaystyles.playstyles.playstyle },
            
  { name: "Amaru",      role: "attacker", icon: "", primaryDefaults, primaryWeapons: [
    { name: "G8A1", overrides: {barrels: { remove: ["Extended Barrel"]}},
      name: "Supernova", overrides: {removeSections: ["magnifying"], barrels: { remove: ["Flash Hider", "Compensator", "Muzzle Brake", "Extended Barrel"]}}}], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Ash",        role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Blackbeard", role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Blitz",      role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Buck",       role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Capitão",    role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Deimos",     role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Dokkeabi",   role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Dokkaebi",   role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Flores",     role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Finka",      role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Fuze",       role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Glaz",       role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Gridlock",   role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Grim",       role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Hibana",     role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Iana",       role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "IQ",         role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Jackal",     role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Kali",       role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Lion",       role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Maverick",   role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Montagne",   role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Nomad",      role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Nøkk",       role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Osa",        role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Rauora",     role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [], gadgets: [], playstyles: attackPlaystyles.playlists.playstyle },
  { name: "Sens",       role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [],gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Skopós",     role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [],gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Striker",    role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [],gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Sledge",     role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [],gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Thatcher",   role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [],gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Thermite",   role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [],gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Twitch",     role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [],gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Ying",       role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [],gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Zofia",      role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [],gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },
  { name: "Zero",       role: "attacker", icon: "", primaryDefaults, primaryWeapons: [], secondaryDefault, secondaryWeapons: [],gadgets: [], playstyles: attackPlaystyles.playstyles.playstyle },  
];

export default operatorData;
