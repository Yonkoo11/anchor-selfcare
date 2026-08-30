const sharp = require('../node_modules/sharp');
const fs = require('fs');

const CREAM = '#FAF8F5';
const field = `<defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
  <stop offset="0%" stop-color="#7D8B7A"/><stop offset="100%" stop-color="#6B7B6A"/></linearGradient></defs>
  <rect width="512" height="512" fill="url(#g)"/>`;

const wrap = (inner, sw = 32) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  ${field}<g fill="none" stroke="${CREAM}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${inner}</g></svg>`;

// a damped oscillation: amplitude decays to nothing, then a resting point
const V = {};

// v1 - drift settling left to right, resolving on a point
V.v1 = wrap(`
  <path d="M 92 300 C 112 232 132 232 152 300 C 170 360 190 360 210 300
           C 226 256 242 256 258 300 C 272 334 286 334 300 300 L 340 300"/>
  <circle cx="396" cy="300" r="30" fill="${CREAM}" stroke="none"/>`);

// v2 - the same descent, vertical: it sinks and comes to rest
V.v2 = wrap(`
  <path d="M 256 84 C 324 104 324 124 256 144 C 196 162 196 182 256 202
           C 300 218 300 234 256 250 C 222 264 222 278 256 292 L 256 336"/>
  <circle cx="256" cy="400" r="34" fill="${CREAM}" stroke="none"/>`);

// v3 - held: a weight resting in a shallow cradle
V.v3 = wrap(`
  <circle cx="256" cy="222" r="62" fill="${CREAM}" stroke="none"/>
  <path d="M 128 300 C 128 384 184 420 256 420 C 328 420 384 384 384 300"/>`, 34);

// v4 - drift resolving into stillness, no point: the flat line IS the rest
V.v4 = wrap(`
  <path d="M 84 256 C 108 176 132 176 156 256 C 178 328 202 328 226 256
           C 244 202 262 202 280 256 C 294 298 308 298 322 256 L 428 256"/>`, 34);

// v5 - a single weight come to rest on solid ground
V.v5 = wrap(`
  <circle cx="256" cy="236" r="70" fill="${CREAM}" stroke="none"/>
  <path d="M 140 366 L 372 366"/>`, 34);

const circle = (s) => Buffer.from(`<svg width="${s}" height="${s}"><circle cx="${s/2}" cy="${s/2}" r="${s/2}" fill="#fff"/></svg>`);

(async () => {
  const ids = Object.keys(V);
  for (const id of ids) {
    fs.writeFileSync(`round1/${id}.svg`, V[id]);
    for (const s of [512, 48, 16]) {
      await sharp(Buffer.from(V[id])).resize(s, s)
        .composite([{input: circle(s), blend: 'dest-in'}])
        .png().toFile(`round1/${id}-${s}.png`);
    }
    // 16px blown up with no smoothing, so the size floor is actually inspectable
    await sharp(`round1/${id}-16.png`).resize(128, 128, {kernel: 'nearest'}).png().toFile(`round1/${id}-16x8.png`);
  }
  // contact sheet: the mark at 240, the real 48px avatar, and 16px magnified 8x
  for (const id of ids) await sharp(`round1/${id}-512.png`).resize(240,240).png().toFile(`round1/${id}-240.png`);
  const W = 300;
  const comp = [];
  ids.forEach((id, i) => {
    comp.push({input: `round1/${id}-240.png`,  left: i * W + 30, top: 16});
    comp.push({input: `round1/${id}-48.png`,   left: i * W + 60, top: 300});
    comp.push({input: `round1/${id}-16x8.png`, left: i * W + 140, top: 280});
  });
  await sharp({create: {width: W * ids.length, height: 430, channels: 4, background: '#FAF8F5'}})
    .composite(comp).png().toFile('round1/sheet.png');
  console.log('round 1 rendered:', ids.join(' '));
})();
