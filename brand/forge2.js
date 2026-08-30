const sharp = require('../node_modules/sharp'); const fs = require('fs');
const CREAM = '#FAF8F5';
const field = `<defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
  <stop offset="0%" stop-color="#7D8B7A"/><stop offset="100%" stop-color="#6B7B6A"/></linearGradient></defs>
  <rect width="512" height="512" fill="url(#g)"/>`;
const wrap = (inner, sw=34) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  ${field}<g fill="none" stroke="${CREAM}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${inner}</g></svg>`;
const V = {};

// a - the plumb: a still surface, one line down, one weight. anchoring without the anchor.
V.a = wrap(`<path d="M 132 150 L 380 150"/><path d="M 256 150 L 256 310"/>
  <circle cx="256" cy="368" r="52" fill="${CREAM}" stroke="none"/>`);

// b - settling stack: wavy, less wavy, still. the calming happens down the mark.
V.b = wrap(`<path d="M 120 168 C 154 120 188 216 222 168 C 256 120 290 216 324 168 C 358 132 380 180 392 168"/>
  <path d="M 120 256 C 160 228 200 284 240 256 C 280 230 320 278 392 256"/>
  <path d="M 120 344 L 392 344"/>`, 30);

// c - the weighted ring: an open circle with a heavy base. it always rights itself.
V.c = wrap(`<path d="M 256 108 A 148 148 0 1 1 152 348" />
  <path d="M 140 392 L 372 392" stroke-width="52"/>`, 34);

// d - the waterline: a circle resting at rest level, half held.
V.d = wrap(`<circle cx="256" cy="256" r="150"/><path d="M 118 316 L 394 316"/>`, 34);

// e - CONTROL: the refined anchor, smooth, no barbs.
V.e = wrap(`<g transform="translate(256,259) scale(1.06) translate(-256,-259)">
  <circle cx="256" cy="132" r="36"/><path d="M256 168 L256 420"/><path d="M168 214 L344 214"/>
  <path d="M142 316 C142 384 192 422 256 422 C320 422 370 384 370 316"/></g>`);

const circ = s => Buffer.from(`<svg width="${s}" height="${s}"><circle cx="${s/2}" cy="${s/2}" r="${s/2}" fill="#fff"/></svg>`);
(async () => {
  const ids = Object.keys(V);
  for (const id of ids) {
    fs.writeFileSync(`round2/${id}.svg`, V[id]);
    for (const s of [512,48,16]) await sharp(Buffer.from(V[id])).resize(s,s).composite([{input:circ(s),blend:'dest-in'}]).png().toFile(`round2/${id}-${s}.png`);
    await sharp(`round2/${id}-16.png`).resize(128,128,{kernel:'nearest'}).png().toFile(`round2/${id}-16x8.png`);
    await sharp(`round2/${id}-512.png`).resize(240,240).png().toFile(`round2/${id}-240.png`);
  }
  const W=300, comp=[];
  ids.forEach((id,i)=>{comp.push({input:`round2/${id}-240.png`,left:i*W+30,top:16});
    comp.push({input:`round2/${id}-48.png`,left:i*W+60,top:300});
    comp.push({input:`round2/${id}-16x8.png`,left:i*W+140,top:280});});
  await sharp({create:{width:W*ids.length,height:430,channels:4,background:'#FAF8F5'}}).composite(comp).png().toFile('round2/sheet.png');
  console.log('round 2:', ids.join(' '));
})();
