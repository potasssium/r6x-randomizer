// server.js

// dynamic‐import wrapper so we can keep using the ESM‐only node‑fetch
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const express      = require('express');
const cors         = require('cors');
const htmlparser2  = require('htmlparser2');
const DomUtils     = require('domutils');
const operatorData = require('./operatorData.json');

const app = express();
app.use(cors());

app.get('/api/operators', async (req, res) => {
  try {
    // 1) grab the wiki’s parsed HTML
    const wikiRes = await fetch(
      'https://rainbowsix.fandom.com/api.php'
      + '?action=parse'
      + '&page=Operators_(Siege)'
      + '&prop=text'
      + '&format=json'
    );
    const json = await wikiRes.json();
    const html = json.parse.text['*'];

    // 2) parse into a DOM
    const dom = htmlparser2.parseDocument(html);

    // 3) find each <div class="gallerybox">
    const boxes = DomUtils.findAll(
      el => el.name === 'div' && el.attribs?.class === 'gallerybox',
      dom.children
    );

    // 4) extract name + icon from each
    const operators = boxes.map(box => {
      // find the first <img> inside
      const img = DomUtils.findOne(el => el.name === 'img', box.children, true);
      let icon = img.attribs['data-src'] || img.attribs.src || '';
      if (icon.startsWith('//')) icon = 'https:' + icon;

      // find the <a> inside the gallerytext div
      const textDiv = DomUtils.findOne(
        el => el.name === 'div' && el.attribs?.class === 'gallerytext',
        box.children,
        true
      );
      const aTag = DomUtils.findOne(el => el.name === 'a', textDiv.children, true);
      const name = aTag.children[0].data.trim();

      return { name, icon };
    });

    res.json(operators);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch operators' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API server running on port ${PORT}`));
