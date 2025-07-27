

// one‑time script (e.g. writeOperatorJson.js)
const fs = require('fs');
const operatorData = require('./operatorData').default;  // or module.exports if you converted it
fs.writeFileSync(__dirname + '/operatorData.json',
                 JSON.stringify(operatorData, null, 2));
console.log('→ operatorData.json written');
