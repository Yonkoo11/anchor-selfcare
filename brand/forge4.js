const sharp=require('../node_modules/sharp');const fs=require('fs');
const CREAM='#FAF8F5';
const field=`<defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stop-color="#7D8B7A"/><stop offset="100%" stop-color="#6B7B6A"/></linearGradient></defs>
 <rect width="512" height="512" fill="url(#g)"/>`;

// the anchor, as a knockout: drawn in black inside a mask so it cuts through the stone
const cut = (sc, cy, sw) => `<g transform="translate(256,${cy}) scale(${sc}) translate(-256,-262)">
   <g fill="none" stroke="#000" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
     <path d="M256 168 L256 412"/><path d="M162 216 L350 216"/>
     <path d="M124 332 C124 392 180 414 256 414 C332 414 388 392 388 332"/>
   </g><circle cx="256" cy="128" r="42" fill="#000"/></g>`;

const PEBBLE = "M262 92 C352 88 424 150 420 244 C416 336 348 420 250 418 C158 416 92 344 94 246 C96 152 176 96 262 92 Z";

const build = (shape, sc, cy, sw) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
 ${field}
 <mask id="m"><rect width="512" height="512" fill="#000"/>
   <path d="${shape}" fill="#fff"/>${cut(sc,cy,sw)}</mask>
 <path d="${shape}" fill="${CREAM}" mask="url(#m)"/></svg>`;

const V={};
V.w1 = build("M256 76 A180 180 0 1 1 255.9 76 Z", 0.62, 262, 44);          // perfect circle
V.w2 = build(PEBBLE, 0.62, 258, 44);                                        // irregular pebble
V.w3 = build(PEBBLE, 0.72, 258, 52);                                        // bigger, heavier cut
// control: the stroke anchor from round 3
V.w4 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">${field}
 <g fill="none" stroke="${CREAM}" stroke-width="34" stroke-linecap="round" stroke-linejoin="round">
  <path d="M256 168 L256 412"/><path d="M162 216 L350 216"/>
  <path d="M124 332 C124 392 180 414 256 414 C332 414 388 392 388 332"/></g>
 <circle cx="256" cy="128" r="42" fill="${CREAM}"/></svg>`;

const circ=s=>Buffer.from(`<svg width="${s}" height="${s}"><circle cx="${s/2}" cy="${s/2}" r="${s/2}" fill="#fff"/></svg>`);
(async()=>{const ids=Object.keys(V);
for(const id of ids){fs.writeFileSync(`round4/${id}.svg`,V[id]);
 for(const s of [512,48,16]) await sharp(Buffer.from(V[id])).resize(s,s).composite([{input:circ(s),blend:'dest-in'}]).png().toFile(`round4/${id}-${s}.png`);
 await sharp(`round4/${id}-16.png`).resize(128,128,{kernel:'nearest'}).png().toFile(`round4/${id}-16x.png`);
 await sharp(`round4/${id}-512.png`).resize(250,250).png().toFile(`round4/${id}-250.png`);}
const W=300,comp=[];
ids.forEach((id,i)=>{comp.push({input:`round4/${id}-250.png`,left:i*W+25,top:14});
 comp.push({input:`round4/${id}-48.png`,left:i*W+45,top:290});
 comp.push({input:`round4/${id}-16x.png`,left:i*W+120,top:275});});
await sharp({create:{width:W*ids.length,height:420,channels:4,background:'#FAF8F5'}}).composite(comp).png().toFile('round4/sheet.png');
console.log('round 4:',ids.join(' '));})();
