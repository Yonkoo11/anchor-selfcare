const sharp = require('../node_modules/sharp'); const fs = require('fs');
const CREAM='#FAF8F5';
const field=`<defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
  <stop offset="0%" stop-color="#7D8B7A"/><stop offset="100%" stop-color="#6B7B6A"/></linearGradient></defs>
  <rect width="512" height="512" fill="url(#g)"/>`;
const wrap=(inner,sw=34)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  ${field}<g fill="none" stroke="${CREAM}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${inner}</g></svg>`;
const V={};

// 1 - open ring (current)
V.r1 = wrap(`<circle cx="256" cy="132" r="36"/><path d="M256 168 L256 420"/><path d="M168 214 L344 214"/>
  <path d="M142 316 C142 384 192 422 256 422 C320 422 370 384 370 316"/>`);

// 2 - solid head: calmer, heavier, survives small sizes better
V.r2 = wrap(`<circle cx="256" cy="128" r="42" fill="${CREAM}" stroke="none"/><path d="M256 168 L256 420"/>
  <path d="M168 216 L344 216"/><path d="M142 316 C142 384 192 422 256 422 C320 422 370 384 370 316"/>`);

// 3 - wider, shallower cradle: more bowl than hook, more holding than gripping
V.r3 = wrap(`<circle cx="256" cy="128" r="42" fill="${CREAM}" stroke="none"/><path d="M256 168 L256 412"/>
  <path d="M162 216 L350 216"/><path d="M124 332 C124 392 180 414 256 414 C332 414 388 392 388 332"/>`);
const circ=s=>Buffer.from(`<svg width="${s}" height="${s}"><circle cx="${s/2}" cy="${s/2}" r="${s/2}" fill="#fff"/></svg>`);
(async()=>{const ids=Object.keys(V);
for(const id of ids){fs.writeFileSync(`round3/${id}.svg`,V[id]);
  for(const s of [512,48,24,16]) await sharp(Buffer.from(V[id])).resize(s,s).composite([{input:circ(s),blend:'dest-in'}]).png().toFile(`round3/${id}-${s}.png`);
  await sharp(`round3/${id}-16.png`).resize(128,128,{kernel:'nearest'}).png().toFile(`round3/${id}-16x8.png`);
  await sharp(`round3/${id}-24.png`).resize(128,128,{kernel:'nearest'}).png().toFile(`round3/${id}-24x5.png`);
  await sharp(`round3/${id}-512.png`).resize(260,260).png().toFile(`round3/${id}-260.png`);}
const W=330,comp=[];
ids.forEach((id,i)=>{comp.push({input:`round3/${id}-260.png`,left:i*W+35,top:16});
  comp.push({input:`round3/${id}-48.png`,left:i*W+30,top:305});
  comp.push({input:`round3/${id}-24x5.png`,left:i*W+95,top:290});
  comp.push({input:`round3/${id}-16x8.png`,left:i*W+235,top:290});});
await sharp({create:{width:W*ids.length,height:440,channels:4,background:'#FAF8F5'}}).composite(comp).png().toFile('round3/sheet.png');
console.log('round 3:',ids.join(' '));})();
