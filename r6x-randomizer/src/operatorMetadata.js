// Centralized image functions
export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Operator picture mapping
const operatorPictureMap = {
  "Ace": `${process.env.PUBLIC_URL}/assets/operators/pictures/Ace_-_Full_Body.webp`,
  "Amaru": `${process.env.PUBLIC_URL}/assets/operators/pictures/Amaru.webp`,
  "Ash": `${process.env.PUBLIC_URL}/assets/operators/pictures/Ash_-_Full_Body.png`,
  "Blackbeard": `${process.env.PUBLIC_URL}/assets/operators/pictures/Blackbeard_Rework_-_Full.webp`,
  "Blitz": `${process.env.PUBLIC_URL}/assets/operators/pictures/Large-blitz.2e74d4b8.png`,
  "Buck": `${process.env.PUBLIC_URL}/assets/operators/pictures/Buck_-_Full_Body.png`,
  "Capitão": `${process.env.PUBLIC_URL}/assets/operators/pictures/Large-capitao.984e75b7.webp`,
  "Deimos": `${process.env.PUBLIC_URL}/assets/operators/pictures/R6S_Deimos_Full_Render.webp`,
  "Dokkaebi": `${process.env.PUBLIC_URL}/assets/operators/pictures/Dokkaebi_-_Full_Body.webp`,
  "Flores": `${process.env.PUBLIC_URL}/assets/operators/pictures/Flores_-_Full_Body.webp`,
  "Finka": `${process.env.PUBLIC_URL}/assets/operators/pictures/Finka_-_Full_Body.webp`,
  "Fuze": `${process.env.PUBLIC_URL}/assets/operators/pictures/Fuze_-_Full_Body.png`,
  "Glaz": `${process.env.PUBLIC_URL}/assets/operators/pictures/Glaz_-_Full_Body.png`,
  "Gridlock": `${process.env.PUBLIC_URL}/assets/operators/pictures/Gridlock_-_Full_Body.webp`,
  "Grim": `${process.env.PUBLIC_URL}/assets/operators/pictures/Grim_-_Full_Body.webp`,
  "Hibana": `${process.env.PUBLIC_URL}/assets/operators/pictures/Hibana_-_Full_Body.webp`,
  "Iana": `${process.env.PUBLIC_URL}/assets/operators/pictures/Iana_-_Full_Body.webp`,
  "IQ": `${process.env.PUBLIC_URL}/assets/operators/pictures/IQ_-_Full_Body.webp`,
  "Jackal": `${process.env.PUBLIC_URL}/assets/operators/pictures/Large-jackal.e7ec96e6.webp`,
  "Kali": `${process.env.PUBLIC_URL}/assets/operators/pictures/Kali_-_Full_Body.webp`,
  "Lion": `${process.env.PUBLIC_URL}/assets/operators/pictures/Lion_-_Full_Body.webp`,
  "Maverick": `${process.env.PUBLIC_URL}/assets/operators/pictures/Maverick_-_Full_Body.webp`,
  "Montagne": `${process.env.PUBLIC_URL}/assets/operators/pictures/Montagne_-_Full_Body.png`,
  "Nomad": `${process.env.PUBLIC_URL}/assets/operators/pictures/Nomad_-_Full_body.webp`,
  "Nøkk": `${process.env.PUBLIC_URL}/assets/operators/pictures/N_kk_-_Full_Body.webp`,
  "Osa": `${process.env.PUBLIC_URL}/assets/operators/pictures/Osa_-_Full_Body.webp`,
  "Ram": `${process.env.PUBLIC_URL}/assets/operators/pictures/Ram_R6_render.webp`,
  "Sens": `${process.env.PUBLIC_URL}/assets/operators/pictures/Sens_-_Full_Body.webp`,
  "Sledge": `${process.env.PUBLIC_URL}/assets/operators/pictures/Sledge_-_Full_Body.png`,
  "Thatcher": `${process.env.PUBLIC_URL}/assets/operators/pictures/Thatcher_-_Full_Body.webp`,
  "Thermite": `${process.env.PUBLIC_URL}/assets/operators/pictures/Thermite_-_Full_Body.webp`,
  "Twitch": `${process.env.PUBLIC_URL}/assets/operators/pictures/Twitch_-_Full_Body.png`,
  "Ying": `${process.env.PUBLIC_URL}/assets/operators/pictures/Ying_-_Full_Body.webp`,
  "Zofia": `${process.env.PUBLIC_URL}/assets/operators/pictures/Large-zofia.f9f7568b.webp`,
  "Zero": `${process.env.PUBLIC_URL}/assets/operators/pictures/Zero_Full.webp`,
  "Brava": `${process.env.PUBLIC_URL}/assets/operators/pictures/Brava_-_Full_Body.webp`,
  
  // Defenders
  "Alibi": `${process.env.PUBLIC_URL}/assets/operators/pictures/Alibi_-_Full_Body.webp`,
  "Aruni": `${process.env.PUBLIC_URL}/assets/operators/pictures/Aruni_Fullbody_cropped_resized_truecolor.webp`,
  "Azami": `${process.env.PUBLIC_URL}/assets/operators/pictures/Azami_Fullbody.webp`,
  "Bandit": `${process.env.PUBLIC_URL}/assets/operators/pictures/Large-bandit.463ee829.png`,
  "Castle": `${process.env.PUBLIC_URL}/assets/operators/pictures/Castle_-_Full_Body.png`,
  "Caveira": `${process.env.PUBLIC_URL}/assets/operators/pictures/Large-caveira.e4d82365.webp`,
  "Clash": `${process.env.PUBLIC_URL}/assets/operators/pictures/Clash_new_full_render.webp`,
  "Doc": `${process.env.PUBLIC_URL}/assets/operators/pictures/Doc_-_Full_Body.png`,
  "Echo": `${process.env.PUBLIC_URL}/assets/operators/pictures/Echo_-_Full_Body.webp`,
  "Ela": `${process.env.PUBLIC_URL}/assets/operators/pictures/Large-ela.a50c192d.webp`,
  "Fenrir": `${process.env.PUBLIC_URL}/assets/operators/pictures/Fenrir_-_Full_Body.webp`,
  "Frost": `${process.env.PUBLIC_URL}/assets/operators/pictures/Frost_Fullbody.webp`,
  "Goyo": `${process.env.PUBLIC_URL}/assets/operators/pictures/Goyo.webp`,
  "Jäger": `${process.env.PUBLIC_URL}/assets/operators/pictures/Large-jager.edd9f749.png`,
  "Kaid": `${process.env.PUBLIC_URL}/assets/operators/pictures/Kaid_-_Full_body.webp`,
  "Kapkan": `${process.env.PUBLIC_URL}/assets/operators/pictures/Kapkan_-_Full_Body.png`,
  "Lesion": `${process.env.PUBLIC_URL}/assets/operators/pictures/Large-lesion.d48d6d33.webp`,
  "Maestro": `${process.env.PUBLIC_URL}/assets/operators/pictures/Maestrorender2.webp`,
  "Melusi": `${process.env.PUBLIC_URL}/assets/operators/pictures/Melusi_-_Full_Body.webp`,
  "Mira": `${process.env.PUBLIC_URL}/assets/operators/pictures/Large-mira.0c9e3bd8.webp`,
  "Mozzie": `${process.env.PUBLIC_URL}/assets/operators/pictures/Mozzie_-_Full_Body.webp`,
  "Mute": `${process.env.PUBLIC_URL}/assets/operators/pictures/Mute_-_Full_Body.png`,
  "Oryx": `${process.env.PUBLIC_URL}/assets/operators/pictures/Oryx_-_Full_Body.webp`,
  "Pulse": `${process.env.PUBLIC_URL}/assets/operators/pictures/Pulse_-_Full_Body.webp`,
  "Rauora": `${process.env.PUBLIC_URL}/assets/operators/pictures/RAUORA_FULL_PORTRAIT.webp`,
  "Rook": `${process.env.PUBLIC_URL}/assets/operators/pictures/Rook_-_Full_Body.png`,
  "Sentry": `${process.env.PUBLIC_URL}/assets/operators/pictures/Sentry.webp`,
  "Solis": `${process.env.PUBLIC_URL}/assets/operators/pictures/Solis_-_Full_Body.webp`,
  "Skopós": `${process.env.PUBLIC_URL}/assets/operators/pictures/R6Skopos_render.webp`,
  "Smoke": `${process.env.PUBLIC_URL}/assets/operators/pictures/Smoke_-_Full_Body.png`,
  "Tachanka": `${process.env.PUBLIC_URL}/assets/operators/pictures/Tachanka_Rework_Fullbody.png`,
  "Striker": `${process.env.PUBLIC_URL}/assets/operators/pictures/Striker_Portrait.webp`,
  "Thorn": `${process.env.PUBLIC_URL}/assets/operators/pictures/Thorn_full.webp`,
  "Thunderbird": `${process.env.PUBLIC_URL}/assets/operators/pictures/Thunderbird_Fullbody.webp`,
  "Tubarão": `${process.env.PUBLIC_URL}/assets/operators/pictures/R6S_Tubar_o_Full_Render.webp`,
  "Valkyrie": `${process.env.PUBLIC_URL}/assets/operators/pictures/Large-valkyrie.c1f143fb.webp`,
  "Vigil": `${process.env.PUBLIC_URL}/assets/operators/pictures/Vigil_-_Full_Body.webp`,
  "Wamai": `${process.env.PUBLIC_URL}/assets/operators/pictures/Wamai_-_Full_Body.webp`,
  "Warden": `${process.env.PUBLIC_URL}/assets/operators/pictures/Warden_-_Full_Body.webp`
};

// Operator icon mapping
const operatorIconMap = {
  "Nøkk": `${process.env.PUBLIC_URL}/assets/operators/icons/nokk.png`,
  "Skopós": `${process.env.PUBLIC_URL}/assets/operators/icons/skopos.png`,
  "Capitão": `${process.env.PUBLIC_URL}/assets/operators/icons/capitao.png`,
  "Jäger": `${process.env.PUBLIC_URL}/assets/operators/icons/jager.png`,
  "Tubarão": `${process.env.PUBLIC_URL}/assets/operators/icons/tubarao.png`
};

export const getOperatorIcon = name => {
  // check if we have a specific mapping for this operator icon
  if (operatorIconMap[name]) {
    return operatorIconMap[name];
  }
  
  // Fallback to the old method if no specific mapping exists
  return `${process.env.PUBLIC_URL}/assets/operators/icons/${slugify(name)}.png`;
};

export const getOperatorPicture = name => {
  // First check if we have a specific mapping for this operator
  if (operatorPictureMap[name]) {
    return operatorPictureMap[name];
  }
  
  // Fallback to the old method if no specific mapping exists
  const slug = slugify(name);
  const extensions = ['.webp', '.png'];
  for (const ext of extensions) {
    const path = `${process.env.PUBLIC_URL}/assets/operators/pictures/${slug}${ext}`;
    if (ext === '.webp') return path; // Prefer webp for pictures
  }
  return `${process.env.PUBLIC_URL}/assets/operators/pictures/${slug}.webp`; // Default fallback
};

// Weapon image mapping
const weaponImageMap = {
  // Primary Weapons
  "AK-12": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_AK-12.png`,
  "AK-74M": `${process.env.PUBLIC_URL}/assets/weapons/R6S_Weapon_AK-74M_lightmode.png`,
  "AR-15.50": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_AR-15.50.png`,
  "AR33": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_AR33.png`,
  "ARX200": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_ARX200.png`,
  "AUG A2": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_AUG_A2.png`,
  "AUG A3": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_AUG_A3.png`,
  "BOSG.12.2": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_BOSG.12.2.png`,
  "C7E": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_C7E.png`,
  "C8-SFW": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_C8-SFW.png`,
  "CAMRS": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_CAMRS.png`,
  "CSRX 300": `${process.env.PUBLIC_URL}/assets/weapons/R6S_CSRX_300.png`,
  "Extendable Shield": `${process.env.PUBLIC_URL}/assets/weapons/shields/Extendable-Shield.png`,
  "F2": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_F2.png`,
  "F90": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_F90.png`,
  "FMG-9": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_FMG-9.png`,
  "G36C": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_G36C.png`,
  "G52-Tactical Shield": `${process.env.PUBLIC_URL}/assets/weapons/shields/G52-Tactical_Shield.webp`,
  "G8A1": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_G8A1.png`,
  "ITA12L": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_ITA12L.png`,
  "L85A2": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_L85A2.png`,
  "LMG-E": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_LMG-E.png`,
  "M1014": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_M1014.png`,
  "M249": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_M249.png`,
  "M249 SAW": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_M249_SAW.png`,
  "M4": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_M4.png`,
  "M590A1": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_M590A1.png`,
  "M762": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_M762.png`,
  "MK 14 EBR": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_Mk_14_EBR.png`,
  "Mk 14 EBR": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_Mk_14_EBR.png`,
  "MK17 CQB": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_MK17_CQB.png`,
  "MP7": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_MP7.png`,
  "OTs-03": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_OTs-03.png`,
  "PARA-308": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_PARA-308.png`,
  "PDW9": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_PDW9.png`,
  "POF-9": `${process.env.PUBLIC_URL}/assets/weapons/POF9.png`,
  "R4-C": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_R4-C.png`,
  "SC3000K": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_SC3000K.png`,
  "SG-CQB": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_SG-CQB.png`,
  "Six12 SD": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_SIX12_SD.png`,
  "SIX12": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_SIX12.png`,
  "SIX12 SD": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_SIX12_SD.png`,
  "Spear .308": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_SPEAR_.308.png`,
  "SR-25": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_SR-25.png`,
  "Supernova": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_SUPERNOVA.png`,
  "SuperNova": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_SUPERNOVA.png`,
  "T-95 LSW": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_T-95_LSW.png`,
  "Type-89": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_TYPE-89.png`,
  "V308": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_V308.png`,
  "556XI": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_556XI.png`,
  "552 Commando": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_552_Commando.png`,
  "417": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_417.png`,
  "6P41": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_6P41.png`,
  "SASG-12": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_SASG-12.png`,
  "Ballistic Shield": `${process.env.PUBLIC_URL}/assets/weapons/shields/Ballistic_Shield.webp`,
  
  // Defender Primary Weapons
  "Mx4 Storm": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_Mx4_Storm.png`,
  "ACS12": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_ACS12.png`,
  "P-10 RONI": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_P10_RONI.png`,
  "P10 RONI": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_P10_RONI.png`,
  "9x19VSN": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_9x19VSN.png`,
  "M870": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_M870.png`,
  "M12": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_M12.png`,
  "SPAS-15": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_SPAS-15.png`,
  "MP5": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_MP5.png`,
  "P90": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_P90.png`,
  "MP5SD": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_MP5SD.png`,
  "Scorpion EVO 3 A1": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_Scorpion_EVO_3_A1.png`,
  "FO-12": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_FO-12.png`,
  "9mm C1": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_9mm_C1.png`,
  "Super 90": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_Super_90.png`,
  "Vector .45 ACP": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_Vector_.45_ACP.png`,
  "TCSG12": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_TCSG12.png`,
  "416-C Carbine": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_416-C_Carbine.png`,
  "UMP45": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_UMP45.png`,
  "SPAS-12": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_SPAS-12.png`,
  "T-5 SMG": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_T-5_SMG.png`,
  "ALDA 5.56": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_ALDA_5.56.png`,
  "MP5K": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_MP5K.png`,
  "DP27": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_DP27.png`,
  "UZK50GI": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_UZK50GI.png`,
  "K1A": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_K1A.png`,
  "MPX": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_MPX.png`,
  "Commando 9": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_Commando_9.png`,
  "PCX-33": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_PCX-33.png`,
  
  // Secondary Weapons
  "5.7 USG": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_5.7_USG.png`,
  "1911 TACOPS": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_1911_TACOPS.png`,
  "D-50": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_D-50.png`,
  "GSH-18": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_GSH-18.png`,
  "Gonne-6": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_Gonne-6.png`,
  "ITA12S": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_ITA12S.png`,
  "M45 MEUSOC": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_M45_MEUSOC.png`,
  "MK1 9mm": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_MK1_9mm.png`,
  "P12": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_P12.png`,
  "P9": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_P9.png`,
  "PMM": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_PMM.png`,
  "P229": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_P229.png`,
  "PRB92": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_PRB92.png`,
  "Q-929": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_Q-929.png`,
  "RG15": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_RG15.png`,
  "SDP 9mm": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_SDP_9mm.png`,
  "SMG-11": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_SMG-11.png`,
  "SMG-12": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_SMG-12.png`,
  "SPSMG9": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_SPSMG9.png`,
  "Super Shorty": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_Super_Shorty.png`,
  "USP40": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_USP40.png`,
  "P226 MK 25": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_P226_MK_25.png`,
  "C75 Auto": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_C75_Auto.png`,
  "Bearing 9": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_BEARING_9.png`,
  "M1911": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_M1911.png`,
  ".44 VENDETTA": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_.44_Mag_Semi-Auto.png`,
  "GHS-18": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_GSH-18.png`,
  "Reaper MK2": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_Reaper_MK2.png`,
  
  // Defender Secondary Weapons
  "Bailiff 410": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_Bailiff_410.png`,
  "Keratos .357": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_Keratos_.357.png`,
  "KERATOS .357": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_Keratos_.357.png`,
  "LFP586": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_LFP586.png`,
  "Luison": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_Luison.png`,
  "P-10C": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_P-10C.png`,
  ".44 Mag Semi-Auto": `${process.env.PUBLIC_URL}/assets/weapons/R6S_wpn_.44_Mag_Semi-Auto.png`
};

export const getWeaponImage = (name, type) => {
  // check if we have a specific mapping for this weapon
  if (weaponImageMap[name]) {
    return weaponImageMap[name];
  }
  
  // Fallback to the old method if no specific mapping exists
  return `${process.env.PUBLIC_URL}/assets/weapons/${type}/${slugify(name)}.png`;
};

export const getGadgetImage = (name) => {
  // Special case
  if (name === "It's your lucky day, pick your own gadget") {
    return null;
  }
  
  // check if we have a specific mapping for this gadget
  if (gadgetImageMap[name]) {
    return gadgetImageMap[name];
  }
  
  // Fallback to slugified path if no specific mapping exists
  return `${process.env.PUBLIC_URL}/assets/gadgets/${slugify(name)}.webp`;
};

export const getSightImage = name => `${process.env.PUBLIC_URL}/assets/attachments/sights/${slugify(name)}.png`;
export const getBarrelImage = name => `${process.env.PUBLIC_URL}/assets/attachments/barrels/${slugify(name)}.png`;
export const getLaserImage = name => `${process.env.PUBLIC_URL}/assets/attachments/lasers/${slugify(name)}.png`;

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

// Defender playstyles
export const defensePlaystyles = {
  playstyles: {
    playstyle: ["Intel / Camera Op", "Roamer", "Anchor", "Support / Utility", "Flank / Rotator"]
  }
};

// Gadget image mapping
const gadgetImageMap = {
  // Attacker Gadgets
  "Breach Charge": `${process.env.PUBLIC_URL}/assets/gadgets/R6S_Breach_Charge.webp`,
  "Claymore": `${process.env.PUBLIC_URL}/assets/gadgets/R6S_Claymore.webp`,
  "Frag Grenade": `${process.env.PUBLIC_URL}/assets/gadgets/R6S_Frag_Grenade.webp`,
  "Hard Breach Charge": `${process.env.PUBLIC_URL}/assets/gadgets/R6S_Hard_Breach_Charge.webp`,
  "Smoke Grenade": `${process.env.PUBLIC_URL}/assets/gadgets/R6S_Smoke_Grenade.webp`,
  "Stun Grenade": `${process.env.PUBLIC_URL}/assets/gadgets/R6S_Stun_Grenade.webp`,
  "Flashbang": `${process.env.PUBLIC_URL}/assets/gadgets/R6S_Stun_Grenade.webp`,
  "Gonne-6": `${process.env.PUBLIC_URL}/assets/gadgets/R6S_GONNE-6.webp`,
  
  // Defender Gadgets
  "Barbed Wire": `${process.env.PUBLIC_URL}/assets/gadgets/R6S_Barbed_Wire.webp`,
  "Bulletproof Camera": `${process.env.PUBLIC_URL}/assets/gadgets/R6S_Bulletproof_Camera.webp`,
  "Deployable Shield": `${process.env.PUBLIC_URL}/assets/gadgets/R6S_Deployable_Shield_v2.webp`,
  "Impact Grenade": `${process.env.PUBLIC_URL}/assets/gadgets/R6S_Impact_Grenade.webp`,
  "Nitro Cell": `${process.env.PUBLIC_URL}/assets/gadgets/R6S_Nitro_Cell.webp`,
  "Observation Blocker": `${process.env.PUBLIC_URL}/assets/gadgets/R6S_Observation_Blocker.webp`,
  "Proximity Alarm": `${process.env.PUBLIC_URL}/assets/gadgets/R6S_Proximity_Alarm.webp`,
  "EMP Grenade": `${process.env.PUBLIC_URL}/assets/gadgets/EMP_Grenade_2.webp`
};

// ATTACKERS
const operatorData = [
  { name: "Ace",        role: "attacker", unit: "NIGHTHAVEN", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/ace.png`, primaryDefaults, primaryWeapons: [ 
    { name: "AK-12", overrides: {barrels: { remove: ["Extended Barrel"]}}},
    { name: "M1014", overrides: {removeSections: ["magnifying"], barrels: { remove: ["Flash Hider", "Compensator", "Muzzle Brake", "Extended Barrel"]}}}
  ], secondaryDefault, secondaryWeapons: [
    { name: "P9", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Claymore", "Breach Charge"], playstyles: attackPlaystyles.playstyles.playstyle },
            
  { name: "Amaru",      role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/amaru.png`, primaryDefaults, primaryWeapons: [
    { name: "G8A1", overrides: {barrels: { remove: ["Extended Barrel"]}}},
    { name: "Supernova", overrides: {removeSections: ["magnifying"], barrels: { remove: ["Flash Hider", "Compensator", "Muzzle Brake", "Extended Barrel"]}}}
  ], secondaryDefault, secondaryWeapons: [
    { name: "ITA12S", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Stun Grenade", "Breach Charge"], playstyles: attackPlaystyles.playstyles.playstyle,
  playstyleOverrides: { add: ["GET YOUR ASS THROUGH SITE WINDOW NOW!!!!!"] } },
  
  { name: "Ash", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/ash.png`, primaryDefaults, primaryWeapons: [
    { name: "R4-C", overrides: { barrels: { remove: ["Extended Barrel"] } } },
    { name: "G36C", overrides: {} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "5.7 USG", overrides: {removeSections: ["sights", "grips"]} },
    { name: "M45 MEUSOC", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Breach Charge", "Flashbang"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Blackbeard", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "MK17 CQB", overrides: { sights: { remove: ["Magnified A", "Magnified B", "Magnified C"] } } },
    { name: "SR-25", overrides: { 
      sights: { 
        add: ["Telescopica A", "Telescopica B"] 
      }
    }}
  ], secondaryDefault, secondaryWeapons: [
    { name: "D-50", overrides: {} }
  ], gadgets: ["Frag Grenade", "Claymore"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Blitz", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "G52-Tactical Shield", overrides: {} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P12", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]}}}
  ], gadgets: ["Smoke Grenade", "Breach Charge"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Buck", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "C8-SFW", overrides: {removeSections: ["grips"]} },
    { name: "CAMRS", overrides: { 
      sights: { add: ["Telescopica A", "Telescopica B"]},
      barrels: {remove: ["Flash Hider", "Extended Barrel", "Compensator"]}, 
      removeSections: ["grips"]
    }}
  ], secondaryDefault, secondaryWeapons: [
    { name: "MK1 9mm", overrides: {removeSections: ["sights", "grips"]}},
    { name: "Gonne-6", overrides: {removeSections: ["sights", "barrels", "lasers", "grips"]}}
  ], gadgets: ["Stun Grenade", "Claymore"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Capitão", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "PARA-308", overrides: {} },
    { name: "M249", overrides: {barrels: { remove: ["Extended Barrel", "Suppressor"]}}}
  ], secondaryDefault, secondaryWeapons: [
    { name: "PRB92", overrides: {removeSections: ["sights", "grips"]}},
    { name: "Gonne-6", overrides: {removeSections: ["sights", "barrels", "lasers", "grips"]}}
  ], gadgets: ["Hard Breach Charge", "EMP Grenade", "Claymore"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Deimos", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "AK-74M", overrides: {barrels: { remove: ["Extended Barrel"]}}},
    { name: "M590A1", overrides: {removeSections: ["grips", "barrels"], sights: { remove: ["magnifying"]}}}
  ], secondaryDefault, secondaryWeapons: [
    { name: ".44 VENDETTA", overrides: {removeSections: ["sights", "grips", "barrels"]}}
  ], gadgets: ["Frag Grenade", "Stun Grenade"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Dokkaebi", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "MK 14 EBR", overrides: { 
      barrels: { remove: ["Extended Barrel"] },
      sights: { add: ["Telescopica A", "Telescopica B"] }
    }},
    { name: "BOSG.12.2", overrides: { 
      sights: { 
        remove: ["Magnified C"],
        add: ["Telescopica A", "Telescopica B"]
      } 
    }}
  ], secondaryDefault, secondaryWeapons: [
    { name: "Gonne-6", overrides: {removeSections: ["sights", "barrels", "lasers", "grips"]}},
    { name: "SMG-12", overrides: {} },
    { name: "C75 Auto", overrides: {} }
  ], gadgets: ["Smoke Grenade", "Stun Grenade"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Flores", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "AR33", overrides: {barrels: { remove: ["Extended Barrel"]}} },
    { name: "SR-25", overrides: { 
      barrels: { remove: ["Extended Barrel", "Flash Hider", "Compensator"] },
      sights: { add: ["Telescopica A", "Telescopica B"] }
    }}
  ], secondaryDefault, secondaryWeapons: [
    { name: "GSH-18", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]} } }
  ], gadgets: ["Stun Grenade", "Claymore"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Finka", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "Spear .308", overrides: {} },
    { name: "6P41", overrides: {barrels: { remove: ["Extended Barrel"]}} },
    { name: "SASG-12", overrides: {removeSections: ["magnifying"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "PMM", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]} } },
    { name: "GSH-18", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]} } }
  ], gadgets: ["Stun Grenade", "Frag Grenade", "Smoke Grenade"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Fuze", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "AK-12", overrides: {barrels: { remove: ["Extended Barrel"]}} },
    { name: "6P41", overrides: {barrels: { remove: ["Extended Barrel"]}} },
    { name: "Ballistic Shield", overrides: {removeSections: ["grips", "sights", "barrels", "lasers"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "PMM", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]} } },
    { name: "GSH-18", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]} } }
  ], gadgets: ["Smoke Grenade", "Hard Breach Charge", "Breach Charge"], playstyles: attackPlaystyles.playstyles.playstyle },
  
  { name: "Glaz",       role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/glaz.png`, primaryDefaults, primaryWeapons: [
    { name: "OTs-03", overrides: { 
      sights: { 
        remove: ["magnifying"],
      }, 
      barrels: { remove: ["Extended Barrel", "Flash Hider", "Compensator"] } 
    }}
  ], secondaryDefault, secondaryWeapons: [
    { name: "PMM", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]} } },
    { name: "Bearing 9", overrides: {removeSections: ["grips", "magnifying"]}},
    { name: "Gonne-6", overrides: {removeSections: ["sights", "grips", "lasers", "barrels"] } }
  ], gadgets: ["Smoke Grenade", "Frag Grenade", "Claymore"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Gridlock",   role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/gridlock.png`, primaryDefaults, primaryWeapons: [
    { name: "F90", overrides: {} },
    { name: "M249 SAW", overrides: {barrels: { remove: ["Extended Barrel", "Suppressor"]}} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "Super Shorty", overrides: {removeSections: ["magnifying", "grips", "barrels"]} },
    { name: "SDP 9mm", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]} } }
  ], gadgets: ["Smoke Grenade", "Frag Grenade", "EMP Grenade"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Grim",       role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/grim.png`, primaryDefaults, primaryWeapons: [
    { name: "552 Commando", overrides: {} },
    { name: "SG-CQB", overrides: {removeSections: ["magnifying", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "Bailiff 410", overrides: {removeSections: ["sights", "barrels","grips"]} },
    { name: "P229", overrides: {removeSections: ["sights","grips"], barrels: { remove: ["Flash Hider", "Extended Barrel", "Compensator"]} }}
  ], gadgets: ["Hard Breach Charge", "Claymore", "EMP Grenade"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Hibana",     role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "Type-89", overrides: {barrels: { remove: ["Extended Barrel", "Flash Hider", "Compensator", "Muzzle Brake"]} } },
    { name: "SuperNova", overrides: { barrels: { remove: ["Flash Hider", "Compensator", "Muzzle Brake", "Extended Barrel"] } } }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P229", overrides: {removeSections: ["sights","grips"], barrels: { remove: ["Flash Hider", "Extended Barrel", "Compensator"]} } },
    { name: "Bearing 9", overrides: {removeSections: ["magnifying", "grips"]} }
  ], gadgets: ["Stun Grenade", "Breach Charge"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Iana",       role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/iana.png`, primaryDefaults, primaryWeapons: [
    { name: "ARX200", overrides: {} },
    { name: "G36C", overrides: {} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "MK1 9mm", overrides: {} }
  ], gadgets: ["Smoke Grenade", "Frag Grenade"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "IQ",         role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/iq.png`, primaryDefaults, primaryWeapons: [
    { name: "AUG A2", overrides: {barrels: { remove: ["Extended Barrel"]}} },
    { name: "552 Commando", overrides: {} },
    { name: "G8A1", overrides: {removeSections: ["magnifying", "sights", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P12", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]} } }
  ], gadgets: ["Breach Charge", "Claymore"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Jackal",     role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/jackal.png`, primaryDefaults, primaryWeapons: [
    { name: "C7E", overrides: {barrels: {remove: ["Extended Barrel"]}} },
    { name: "PDW9", overrides: {} },
    { name: "ITA12L", overrides: {removeSections: ["magnifying", "sights", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "USP40", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]} } },
    { name: "ITA12S", overrides: {removeSections: ["magnifying", "sights", "barrels"]} }
  ], gadgets: ["Smoke Grenade", "Claymore"], playstyles: attackPlaystyles.playstyles.playstyle,
  playstyleOverrides: { add: ["Start smelling feet you freak"] } },

  { name: "Kali",       role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/kali.png`, primaryDefaults, primaryWeapons: [
    { name: "CSRX 300", overrides: {removeSections: ["sights", "barrels", "lasers", "grips"]}}
  ], secondaryDefault, secondaryWeapons: [
    { name: "SPSMG9", overrides: {} },
    { name: "C75 Auto", overrides: {} },
    { name: "P226 MK 25", overrides: {} }
  ], gadgets: ["Breach Charge", "Claymore", "Smoke Grenade"], playstyles: attackPlaystyles.playstyles.playstyle,
  playstyleOverrides: { add: ["Window Pew Pew Pew"] } },

  { name: "Lion",       role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/lion.png`, primaryDefaults, primaryWeapons: [
    { name: "V308", overrides: { barrels: { remove: ["Extended Barrel"]} } },
    { name: "417", overrides: { 
      barrels: { remove: ["Extended Barrel", "Flash Hider", "Compensator"] },
      sights: { add: ["Telescopica A", "Telescopica B"] }
    }},
    { name: "SG-CQB", overrides: {removeSections: ["magnifying", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P9", overrides: {} },
    { name: "LFP586", overrides: {removeSections: ["sights", "barrels", "grips"]} }
  ], gadgets: ["Stun Grenade", "Claymore", "Frag Grenade"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Maverick",   role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/maverick.png`, primaryDefaults, primaryWeapons: [
    { name: "M4", overrides: {} },
    { name: "AR-15.50", overrides: { 
      sights: { 
        add: ["Telescopica A", "Telescopica B"]
      } 
    }}
  ], secondaryDefault, secondaryWeapons: [
    { name: "1911 TACOPS", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Claymore", "Smoke Grenade", "Stun Grenade"], playstyles: attackPlaystyles.playstyles.playstyle },
  
  { name: "Montagne", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/montagne.png`, primaryDefaults, primaryWeapons: [
    { name: "Extendable Shield", overrides: {} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P9", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]}} },
    { name: "LFP586", overrides: {removeSections: ["sights", "grips", "barrels"]} }
  ], gadgets: ["Smoke Grenade", "Hard Breach Charge", "EMP Grenade"], playstyles: attackPlaystyles.playstyles.playstyle },
  
  { name: "Nomad", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/nomad.png`, primaryDefaults, primaryWeapons: [
    { name: "AK-74M", overrides: {barrels: { remove: ["Extended Barrel"]}} },
    { name: "ARX200", overrides: {barrels: { remove: ["Extended Barrel"]} } }
  ], secondaryDefault, secondaryWeapons: [
    { name: "PRB92", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]} } },
    { name: ".44 Mag Semi-Auto", overrides: {removeSections: ["sights", "grips", "barrels"]} }
  ], gadgets: ["Stun Grenade", "Breach Charge"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Nøkk", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/nokk.png`, primaryDefaults, primaryWeapons: [
    { name: "FMG-9", overrides: {} },
    { name: "Six12 SD", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "5.7 USG", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]}} },
    { name: "D-50", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]}} }
  ], gadgets: ["Frag Grenade", "Hard Breach Charge", "EMP Grenade"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Osa", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/osa.png`, primaryDefaults, primaryWeapons: [
    { name: "556XI", overrides: {barrels: { remove: ["Extended Barrel"]}} },
    { name: "PDW9", overrides: {} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "PMM", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]}} }
  ], gadgets: ["Frag Grenade", "Claymore", "EMP Grenade"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Ram", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/ram.png`, primaryDefaults, primaryWeapons: [
    { name: "R4-C", overrides: {} },
    { name: "LMG-E", overrides: {barrels: { remove: ["Extended Barrel"]}} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "MK1 9mm", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]}} }
  ], gadgets: ["Stun Grenade", "Smoke Grenade"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Sens", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/sens.png`, primaryDefaults, primaryWeapons: [
    { name: "POF-9", overrides: {} },
    { name: "417", overrides: { 
      barrels: { remove: ["Extended Barrel", "Flash Hider", "Compensator"] },
      sights: { add: ["Telescopica A", "Telescopica B"] }
    }}
  ], secondaryDefault, secondaryWeapons: [
    { name: "SDP 9mm", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]}} }
  ], gadgets: ["Claymore", "Frag Grenade", "Hard Breach Charge"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Sledge", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/sledge.png`, primaryDefaults, primaryWeapons: [
    { name: "L85A2", overrides: {barrels: { remove: ["Extended Barrel"]}} },
    { name: "M590A1", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P226 MK 25", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]}} }
  ], gadgets: ["Frag Grenade", "Stun Grenade"], playstyles: attackPlaystyles.playstyles.playstyle,
  playstyleOverrides: { add: ["Smash your friends"] } },

  { name: "Thatcher", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/thatcher.png`, primaryDefaults, primaryWeapons: [
    { name: "AR33", overrides: {barrels: { remove: ["Extended Barrel"]}} },
    { name: "L85A2", overrides: {barrels: { remove: ["Extended Barrel"]}} },
    { name: "M590A1", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P226 MK 25", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]}} }
  ], gadgets: ["Breach Charge", "Claymore"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Thermite", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/thermite.png`, primaryDefaults, primaryWeapons: [
    { name: "556XI", overrides: {barrels: { remove: ["Extended Barrel"]}} },
    { name: "M1014", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "M45 MEUSOC", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]}} },
    { name: "5.7 USG", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]}} }
  ], gadgets: ["Smoke Grenade", "Stun Grenade"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Twitch", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/twitch.png`, primaryDefaults, primaryWeapons: [
    { name: "F2", overrides: {} },
    { name: "417", overrides: { 
      barrels: { remove: ["Extended Barrel", "Flash Hider", "Compensator"] },
      sights: { add: ["Telescopica A", "Telescopica B"] }
    }},
    { name: "SG-CQB", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P9", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]}} }
  ], gadgets: ["Breach Charge", "Claymore"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Ying", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/ying.png`, primaryDefaults, primaryWeapons: [
    { name: "T-95 LSW", overrides: {barrels: { remove: ["Extended Barrel"]}} },
    { name: "SIX12", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "Q-929", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]}} }
  ], gadgets: ["Smoke Grenade", "Hard Breach Charge"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Zofia", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/zofia.png`, primaryDefaults, primaryWeapons: [
    { name: "LMG-E", overrides: {barrels: { remove: ["Extended Barrel"]}} },
    { name: "M762", overrides: {barrels: { remove: ["Extended Barrel"]}} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "RG15", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]}} }
  ], gadgets: ["Breach Charge", "Claymore"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Zero", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/zero.png`, primaryDefaults, primaryWeapons: [
    { name: "SC3000K", overrides: {} },
    { name: "MP7", overrides: {removeSections: ["grips"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "5.7 USG", overrides: {removeSections: ["sights", "grips", "barrels"]} },
    { name: "Gonne-6", overrides: {removeSections: ["sights", "barrels", "lasers", "grips"]}}
  ], gadgets: ["Claymore", "Hard Breach Charge"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Brava", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/brava.png`, primaryDefaults, primaryWeapons: [
    { name: "PARA-308", overrides: {} },
    { name: "CAMRS", overrides: { sights: { add: ["Telescopica A", "Telescopica B"] }, barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"] } } }
  ], secondaryDefault, secondaryWeapons: [
    { name: "USP40", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"]}} },
    { name: "Super Shorty", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], gadgets: ["Smoke Grenade", "Claymore"], playstyles: attackPlaystyles.playstyles.playstyle },
  
  // DEFENDERS
  { name: "Alibi", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/alibi.png`, primaryDefaults, primaryWeapons: [
    { name: "Mx4 Storm", overrides: {removeSections: ["magnifying"]} },
    { name: "ACS12", overrides: {removeSections: ["barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "Bailiff 410", overrides: {removeSections: ["sights", "grips", "barrels"]} },
    { name: "Keratos .357", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Proximity Alarm", "Observation Blocker"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Aruni", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/aruni.png`, primaryDefaults, primaryWeapons: [
    { name: "P-10 RONI", overrides: {removeSections: ["magnifying"]} },
    { name: "Mk 14 EBR", overrides: { barrels: { remove: ["Extended Barrel", "Flash Hider", "Compensator"] } } }
  ], secondaryDefault, secondaryWeapons: [
    { name: "PRB92", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Barbed Wire", "Bulletproof Camera"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Azami", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/azami.png`, primaryDefaults, primaryWeapons: [
    { name: "9x19VSN", overrides: {removeSections: ["magnifying"]} },
    { name: "ACS12", overrides: {removeSections: ["barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "D-50", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Barbed Wire", "Impact Grenade"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Bandit", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "MP7", overrides: {removeSections: ["magnifying"]} },
    { name: "M870", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P12", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Barbed Wire", "Nitro Cell"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Castle", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "UMP45", overrides: {} },
    { name: "M1014", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "Super Shorty", overrides: {removeSections: ["magnifying", "grips", "barrels"]} },
    { name: "5.7 USG", overrides: {removeSections: ["sights", "grips"]} },
    { name: "M45 MEUSOC", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Bulletproof Camera", "Proximity Alarm"], playstyles: defensePlaystyles.playstyles.playstyle,
  playstyleOverrides: { add: ["Baricade everyone in site"] } },

  { name: "Caveira", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "M12", overrides: {removeSections: ["magnifying", "grips"]} },
    { name: "SPAS-15", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "Luison", overrides: {removeSections: ["sights", "grips", "barrels"]} }
  ], gadgets: ["Impact Grenade", "Proximity Alarm", "Observation Blocker"], playstyles: defensePlaystyles.playstyles.playstyle,
  playstyleOverrides: { add: ["SNEAK SNEAK SNEAK SNEAK"] } },

  { name: "Clash", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "SPSMG9", overrides: {removeSections: ["magnifying", "grips"], barrels: { add: ["Flash Hider", "Compensator", "Extended Barrel"] } } }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P-10C", overrides: {removeSections: ["sights", "grips"]} },
    { name: "Super Shorty", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], gadgets: ["Impact Grenade", "Barbed Wire"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Doc", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "MP5", overrides: {} },
    { name: "P90", overrides: {} },
    { name: "SG-CQB", overrides: {removeSections: ["magnifying", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P9", overrides: {removeSections: ["sights", "grips"]} },
    { name: "LFP586", overrides: {removeSections: ["sights", "grips", "barrels"]} },
    { name: "Bailiff 410", overrides: {removeSections: ["sights", "grips", "barrels"]} }
  ], gadgets: ["Bulletproof Camera", "Barbed Wire"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Echo", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "MP5SD", overrides: {removeSections: ["barrels"]} },
    { name: "Supernova", overrides: {removeSections: ["magnifying", "grips"], barrels: { remove: ["Muzzle Brake"] } } }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P229", overrides: {removeSections: ["sights", "grips"]} },
    { name: "Bearing 9", overrides: {removeSections: ["sights", "grips"], barrels: { add: ["Flash Hider", "Compensator", "Extended Barrel"] } } }
  ], gadgets: ["Impact Grenade", "Deployable Shield"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Ela", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "Scorpion EVO 3 A1", overrides: {removeSections: ["magnifying"], barrels: { remove: ["Extended Barrel", "Flash Hider", "Compensator"] } } },
    { name: "FO-12", overrides: {removeSections: ["magnifying"], barrels: { remove: [ "Flash Hider", "Compensator", "Muzzle Brake"] } } }
  ], secondaryDefault, secondaryWeapons: [
    { name: "RG15", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Barbed Wire", "Deployable Shield", "Impact Grenade"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Fenrir", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "MP7", overrides: {removeSections: ["magnifying"]} },
    { name: "SASG-12", overrides: {removeSections: ["magnifying"], barrels: { remove: ["Extended Barrel", "Flash Hider", "Compensator", "Muzzle Brake"] } } }
  ], secondaryDefault, secondaryWeapons: [
    { name: "Bailiff 410", overrides: {removeSections: ["sights", "grips", "barrels"]} },
    { name: "5.7 USG", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Bulletproof Camera", "Observation Blocker"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Frost", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "9mm C1", overrides: {} },
    { name: "Super 90", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "ITA12S", overrides: {removeSections: ["magnifying", "grips", "barrels"]} },
    { name: "MK1 9mm", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Bulletproof Camera", "Deployable Shield"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Goyo", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "Vector .45 ACP", overrides: {} },
    { name: "TCSG12", overrides: {barrels: { remove: ["Extended Barrel", "Flash Hider", "Compensator", "Muzzle Brake"] } } }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P229", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Impact Grenade", "Bulletproof Camera", "Proximity Alarm"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Jäger", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "416-C Carbine", overrides: {removeSections: ["magnifying"]} },
    { name: "M870", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P12", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Bulletproof Camera", "Observation Blocker"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Kaid", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "AUG A3", overrides: {removeSections: ["magnifying"]} },
    { name: "TCSG12", overrides: {barrels: { remove: ["Extended Barrel", "Flash Hider", "Compensator", "Muzzle Brake"] } } }
  ], secondaryDefault, secondaryWeapons: [
    { name: ".44 Mag Semi-Auto", overrides: {removeSections: ["sights", "grips", "barrels"]} },
    { name: "LFP586", overrides: {removeSections: ["sights", "grips", "barrels"]} }
  ], gadgets: ["Barbed Wire", "Nitro Cell", "Observation Blocker"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Kapkan", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "9x19VSN", overrides: {removeSections: ["magnifying"]} },
    { name: "SASG-12", overrides: {removeSections: ["magnifying"], barrels: { remove: ["Extended Barrel", "Flash Hider", "Compensator", "Muzzle Brake"] } } }
  ], secondaryDefault, secondaryWeapons: [
    { name: "GSH-18", overrides: {removeSections: ["sights", "grips"]} },
    { name: "PMM", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Bulletproof Camera", "Barbed Wire"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Lesion", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "T-5 SMG", overrides: {removeSections: ["magnifying"]} },
    { name: "SIX12 SD", overrides: {removeSections: ["magnifying", "barrels"] } }
  ], secondaryDefault, secondaryWeapons: [
    { name: "Q-929", overrides: {removeSections: ["sights", "grips"]} },
    { name: "Super Shorty", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], gadgets: ["Observation Blocker", "Bulletproof Camera"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Maestro", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "ALDA 5.56", overrides: {removeSections: ["magnifying"], barrels: { remove: ["Extended Barrel"] } } },
    { name: "ACS12", overrides: {removeSections: ["barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "Bailiff 410", overrides: {removeSections: ["sights", "grips", "barrels"]} },
    { name: "Keratos .357", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Barbed Wire", "Impact Grenade", "Observation Blocker"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Melusi", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "MP5", overrides: {removeSections: ["magnifying"]} },
    { name: "Super 90", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "RG15", overrides: {removeSections: ["sights", "grips"]} },
    { name: "ITA12S", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], gadgets: ["Bulletproof Camera", "Impact Grenade"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Mira", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "Vector .45 ACP", overrides: {removeSections: ["magnifying"]} },
    { name: "ITA12L", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "USP40", overrides: {removeSections: ["sights", "grips"]} },
    { name: "ITA12S", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], gadgets: ["Nitro Cell", "Proximity Alarm"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Mozzie", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "P10 RONI", overrides: {removeSections: ["magnifying"]} },
    { name: "Commando 9", overrides: {removeSections: ["magnifying"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "SDP 9mm", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Barbed Wire", "Nitro Cell", "Impact Grenade"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Mute", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "MP5K", overrides: {removeSections: ["magnifying"]} },
    { name: "M590A1", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P226 MK 25", overrides: {removeSections: ["sights", "grips"]} },
    { name: "SMG-11", overrides: {removeSections: ["magnifying", "barrels"]} }
  ], gadgets: ["Bulletproof Camera", "Nitro Cell"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Oryx", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "T-5 SMG", overrides: {removeSections: ["magnifying"]} },
    { name: "SPAS-12", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "Bailiff 410", overrides: {removeSections: ["sights", "grips", "barrels"]} },
    { name: "USP40", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Barbed Wire", "Proximity Alarm"], playstyles: defensePlaystyles.playstyles.playstyle, 
  playstyleOverrides: { add: ["DESTROY EVERY WALL"] } },

  { name: "Pulse", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "UMP45", overrides: {removeSections: ["magnifying"]} },
    { name: "M1014", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "5.7 USG", overrides: {removeSections: ["sights", "grips"]} },
    { name: "M45 MEUSOC", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Nitro Cell", "Barbed Wire"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Rauora", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/rauora.png`, primaryDefaults, primaryWeapons: [
    { name: "417", overrides: {sights: { add: ["Telescopic A", "Telescopic B"], barrels: { remove: ["Extended Barrel", "Flash Hider", "Compensator"] } } } },
    { name: "M249", overrides: {removeSections: ["magnifying"], barrels: { remove: ["Extended Barrel", "Suppressor"] } } }
  ], secondaryDefault, secondaryWeapons: [
    { name: "GHS-18", overrides: {removeSections: ["sights", "grips"] } }
  ], gadgets: ["Smoke Grenade", "Breach Charge"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Rook", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "MP5", overrides: {} },
    { name: "P90", overrides: {removeSections: ["grips"]} },
    { name: "SG-CQB", overrides: {removeSections: ["magnifying", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P9", overrides: {removeSections: ["sights", "grips"]} },
    { name: "LFP586", overrides: {removeSections: ["sights", "grips", "barrels"]} }
  ], gadgets: ["Impact Grenade", "Proximity Alarm", "Observation Blocker"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Striker", role: "attacker", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "M4", overrides: {} },
    { name: "M249", overrides: {removeSections: ["magnifying"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "ITA12S", overrides: {removeSections: ["magnifying", "grips", "barrels"]} },
    { name: "5.7 USG", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["It's your lucky day, pick your own gadget", "Claymore", "Hard Breach Charge", "Frag Grenade", "Smoke Grenade", "Breach Charge", "Stun Grenade"], playstyles: attackPlaystyles.playstyles.playstyle },

  { name: "Sentry", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "Commando 9", overrides: {removeSections: ["magnifying"]} },
    { name: "M870", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "C75 Auto", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Muzzle Brake"]}} },
    { name: "Super Shorty", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], gadgets: ["It's your lucky day, pick your own gadget", "Observation Blocker", "Impact Grenade", "Barbed Wire", "Nitro Cell", "Proximity Alarm", "Deployable Shield"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Thorn", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "UZK50GI", overrides: {removeSections: ["magnifying"]} },
    { name: "M870", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "C75 Auto", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Muzzle Brake"]} } },
    { name: "ITA12S", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], gadgets: ["Barbed Wire", "Deployable Shield"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Thunderbird", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "Spear .308", overrides: {removeSections: ["magnifying"]} },
    { name: "SPAS-15", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "Bearing 9", overrides: {removeSections: ["magnifying", "grips"], barrels: { add: ["Flash Hider", "Compensator", "Extended Barrel"] } } },
    { name: "ITA12S", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], gadgets: ["Barbed Wire", "Bulletproof Camera", "Deployable Shield"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Tubarão", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "AR-15.50", overrides: { removeSections: ["magnifying"] } },
    { name: "MPX", overrides: {barrels: { remove: ["Flash Hider", "Compensator", "Extended Barrel"] } } }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P226 MK 25", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Nitro Cell", "Proximity Alarm"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Valkyrie", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "MPX", overrides: {removeSections: ["magnifying"]} },
    { name: "SPAS-12", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "D-50", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Nitro Cell", "Impact Grenade"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Vigil", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "K1A", overrides: {removeSections: ["magnifying"]} },
    { name: "BOSG.12.2", overrides: {removeSections: ["barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "C75 Auto", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Muzzle Brake"]} } },
    { name: "SMG-12", overrides: {removeSections: ["magnifying", "barrels"]} }
  ], gadgets: ["Bulletproof Camera", "Impact Grenade"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Wamai", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "MP5K", overrides: {removeSections: ["magnifying", "grips"]} },
    { name: "AUG A2", overrides: {removeSections: ["magnifying", "grips"], barrels: { remove: ["Extended Barrel"] } } }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P12", overrides: {removeSections: ["sights", "grips"]} },
    { name: "KERATOS .357", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Impact Grenade", "Proximity Alarm"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Warden", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "MPX", overrides: {removeSections: ["magnifying"]} },
    { name: "M590A1", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P-10C", overrides: {removeSections: ["sights", "grips"]} },
    { name: "SMG-12", overrides: {removeSections: ["magnifying", "barrels"]} }
  ], gadgets: ["Deployable Shield", "Nitro Cell", "Observation Blocker"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Solis", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "P90", overrides: {removeSections: ["magnifying"]} },
    { name: "ITA12L", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "SMG-11", overrides: {removeSections: ["magnifying", "barrels"]} }
  ], gadgets: ["Bulletproof Camera", "Proximity Alarm"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Skopós", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "PCX-33", overrides: {removeSections: ["magnifying"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P229", overrides: {removeSections: ["sights", "grips"]} }
  ], gadgets: ["Proximity Alarm", "Impact Grenade"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Smoke", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "FMG-9", overrides: {removeSections: ["magnifying"]} },
    { name: "M590A1", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "P226 MK 25", overrides: {removeSections: ["sights", "grips"]} },
    { name: "SMG-11", overrides: {removeSections: ["magnifying"], barrels: { add: ["Extended Barrel", "Flash Hider", "Compensator", "Muzzle Brake"] } } }
  ], gadgets: ["Barbed Wire", "Deployable Shield"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Tachanka", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "DP27", overrides: {removeSections: ["magnifying", "grips", "barrels"], sights: { add: ["Reflex D"] } } },
    { name: "9x19VSN", overrides: {} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "GSH-18", overrides: {removeSections: ["sights", "grips"]} },
    { name: "PMM", overrides: {removeSections: ["sights", "grips"]} },
    { name: "Bearing 9", overrides: {removeSections: ["magnifying", "grips"], barrels: { add: ["Flash Hider", "Compensator", "Extended Barrel"] } } }
  ], gadgets: ["Barbed Wire", "Deployable Shield", "Proximity Alarm"], playstyles: defensePlaystyles.playstyles.playstyle },

  { name: "Thorn", role: "defender", icon: `${process.env.PUBLIC_URL}/assets/operators/icons/$1.png`,  primaryDefaults, primaryWeapons: [
    { name: "UZK50GI", overrides: {removeSections: ["magnifying"]} },
    { name: "M870", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], secondaryDefault, secondaryWeapons: [
    { name: "C75 Auto", overrides: {removeSections: ["sights", "grips"], barrels: { remove: ["Muzzle Brake"]} } },
    { name: "ITA12S", overrides: {removeSections: ["magnifying", "grips", "barrels"]} }
  ], gadgets: ["Barbed Wire", "Deployable Shield"], playstyles: defensePlaystyles.playstyles.playstyle },
   
];

export default operatorData;
