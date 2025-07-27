import React, { useState } from 'react';
import './App.css';
// Import operator data and shared defaults
import operatorData, {
  primaryDefaults,
  secondaryDefault
} from './operatorData';

// Utility to pick random element
const randomFrom = arr => arr[Math.floor(Math.random() * arr.length)];

// Placeholder for images
const placeholder = '/placeholder.png';

function App() {
  const [selectedOp, setSelectedOp] = useState(null);
  const [roleFilter, setRoleFilter] = useState('attacker');

  const pickRandom = () => {
    const pool = operatorData.filter(op => op.role === roleFilter);
    if (pool.length === 0) return;
    const op = randomFrom(pool);
    const playstyle = randomFrom(op.playstyles);

    // Use shared defaults for attachments
    const primaryLoadouts = op.primaryWeapons.map(w => ({
      name: w.name,
      imageUrl: placeholder,
      attachments: {
        sight: placeholder, // primaryDefaults.sights[random index]
        barrel: placeholder, // primaryDefaults.barrels[random index]
        grip: placeholder, // primaryDefaults.grips[random index]
        laser: placeholder // primaryDefaults.lasers[random index]
      }
    }));

    const secondaryLoadouts = op.secondaryWeapons.map(w => ({
      name: w.name,
      imageUrl: placeholder,
      attachments: {
        sight: placeholder, // secondaryDefault.sights[random index]
        barrel: placeholder, // secondaryDefault.barrels[random index]
        laser: placeholder // secondaryDefault.lasers[random index]
      }
    }));

    const gadgetLoadouts = op.gadgets.map(name => ({ name, imageUrl: placeholder }));

    setSelectedOp({
      ...op,
      playstyle,
      primaryLoadouts,
      secondaryLoadouts,
      gadgetLoadouts
    });
  };

  return (
    <div className="App">
      <header>
        <h1>R6 Siege Randomizer</h1>
        <div className="controls">
          <label>Role:</label>
          <select value={roleFilter} onChange={e => setRoleFilter(e.target.value)}>
            <option value="attacker">Attacker</option>
            <option value="defender">Defender</option>
          </select>
          <button onClick={pickRandom}>🎲 Randomize</button>
        </div>
      </header>

      {selectedOp && (
        <main className="operator-card">
          <h2>{selectedOp.name} ({selectedOp.role})</h2>
          <p><strong>Playstyle:</strong> {selectedOp.playstyle}</p>

          <section>
            <h3>Primary Weapons</h3>
            {selectedOp.primaryLoadouts.map((w, i) => (
              <div key={i} className="weapon-loadout">
                <p>{w.name}</p>
                <ul>
                  <li>Sight: {w.attachments.sight || 'N/A'}</li>
                  <li>Barrel: {w.attachments.barrel || 'N/A'}</li>
                  <li>Grip: {w.attachments.grip || 'N/A'}</li>
                  <li>Laser: {w.attachments.laser || 'N/A'}</li>
                </ul>
              </div>
            ))}
          </section>

          <section>
            <h3>Secondary Weapons</h3>
            {selectedOp.secondaryLoadouts.map((w, i) => (
              <div key={i} className="weapon-loadout">
                <p>{w.name}</p>
                <ul>
                  <li>Sight: {w.attachments.sight || 'N/A'}</li>
                  <li>Barrel: {w.attachments.barrel || 'N/A'}</li>
                  <li>Laser: {w.attachments.laser || 'N/A'}</li>
                </ul>
              </div>
            ))}
          </section>

          <section>
            <h3>Gadgets</h3>
            {selectedOp.gadgetLoadouts.map((g, i) => (
              <div key={i} className="gadget-loadout">
                <p>{g.name}</p>
              </div>
            ))}
          </section>
        </main>
      )}
    </div>
  );
}

export default App;
