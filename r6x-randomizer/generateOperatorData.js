// generateOperatorData.js
// Scrapes R6 Siege operator info and writes operatorData.js

const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const baseUrl = "https://www.ubisoft.com/en-ca/game/rainbow-six/siege/game-info/operators";

  await page.goto(baseUrl, { waitUntil: "networkidle2" });

  // helper to extract operator list by role
  async function extractOperators(role) {
    await page.click(`button[data-role-asset="${role}"]`);
    await page.waitForTimeout(1000);
    return page.$$eval(".operator-tile a", links =>
      links.map(a => ({
        name: a.querySelector(".operator-name").innerText.trim(),
        url: a.href,
      }))
    );
  }

  const attackers = await extractOperators("Attacker");
  const defenders = await extractOperators("Defender");

  // shared defaults & playstyles
  const primaryDefaults = {
    sights: {
      magnifying: ["Magnified A", "Magnified B", "Magnified C"],
      nonmagnifying: [
        "Red Dot A", "Red Dot B", "Red Dot C",
        "Holo A", "Holo B", "Holo C", "Holo D",
        "Reflex A", "Reflex B", "Reflex C"
      ],
      nosight: ["Iron Sight"]
    },
    barrels: ["No Barrel", "Suppressor", "Flash Hider", "Compensator", "Muzzle Brake", "Extended Barrel"],
    grips: ["Vertical Grip", "Angled Grip", "Horizontal Grip"],
    lasers: ["Laser", "No Laser"]
  };
  const secondaryDefault = {
    sights: {
      nonmagnifying: [
        "Red Dot A", "Red Dot B", "Red Dot C",
        "Holo A", "Holo B", "Holo C", "Holo D",
        "Reflex A", "Reflex B", "Reflex C"
      ],
      nosight: ["Iron Sight"]
    },
    barrels: ["Muzzle Brake", "Suppressor"],
    lasers: ["Laser", "No Laser"]
  };
  const attackPlaystyles = {
    playstyles: {
      playstyle: ["Intel / Drone Op", "Rush", "Slow Push", "Support / Utility", "Flank / Split Pusher", "Site Anchor / Plantholder"]
    }
  };
  const defendPlaystyles = {
    playstyles: {
      playstyle: ["Anchor", "Roamer", "Intel / Denial", "Support"]
    }
  };

  const operatorData = [];

  // parse each operator’s detail page
  async function parseDetail(op, role) {
    await page.goto(op.url, { waitUntil: "networkidle2" });
    await page.waitForSelector(".loadout");

    const primaryWeapons = await page.$$eval(".loadout .primary-weapons .weapon", items =>
      items.map(el => ({ name: el.innerText.trim() }))
    );
    const secondaryWeapons = await page.$$eval(".loadout .secondary-weapons .weapon", items =>
      items.map(el => ({ name: el.innerText.trim() }))
    );
    const gadgets = await page.$$eval(".loadout .gadgets .gadget", items =>
      items.map(el => el.innerText.trim())
    );

    operatorData.push({
      name: op.name,
      role: role.toLowerCase(),
      icon: "",
      primaryDefaults,
      primaryWeapons,
      secondaryDefault,
      secondaryWeapons,
      gadgets,
      playstyles: role === "Attacker" 
        ? attackPlaystyles.playstyles.playstyle 
        : defendPlaystyles.playstyles.playstyle
    });
  }

  for (const op of attackers) await parseDetail(op, "Attacker");
  for (const op of defenders) await parseDetail(op, "Defender");

  // write out operatorData.js
  const output = `
export const primaryDefaults = ${JSON.stringify(primaryDefaults, null, 2)};
export const secondaryDefault = ${JSON.stringify(secondaryDefault, null, 2)};
export const attackPlaystyles = ${JSON.stringify(attackPlaystyles, null, 2)};
export const defendPlaystyles = ${JSON.stringify(defendPlaystyles, null, 2)};
const operatorData = ${JSON.stringify(operatorData, null, 2)};
export default operatorData;
`;
  fs.writeFileSync(path.join(__dirname, "operatorData.js"), output.trim());
  console.log("✓ operatorData.js generated");
  await browser.close();
})();
