const sharp=require('../node_modules/sharp');const fs=require('fs');
const CREAM='#FAF8F5';
const f=`<defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stop-color="#7D8B7A"/><stop offset="100%" stop-color="#6B7B6A"/></linearGradient></defs>
 <rect width="512" height="512" fill="url(#g)"/>`;
const w=(inner,head=true,cy=128,r=42)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">${f}
 <g fill="none" stroke="${CREAM}" stroke-width="34" stroke-linecap="round" stroke-linejoin="round">${inner}</g>
 ${head?`<circle cx="256" cy="${cy}" r="${r}" fill="${CREAM}"/>`:''}</svg>`;
const CRADLE=`<path d="M124 332 C124 392 180 414 256 414 C332 414 388 392 388 332"/>`;
const V={};
V.x1=w(`<path d="M256 168 L256 412"/><path d="M162 216 L350 216"/>${CRADLE}`);           // control
V.x2=w(`<path d="M256 168 L256 412"/>${CRADLE}`);                                        // no crossbar
V.x3=w(`<path d="M256 168 L256 412"/><path d="M196 216 L316 216"/>${CRADLE}`);           // short crossbar
V.x4=w(`<path d="M256 176 L256 412"/><path d="M162 216 L350 216"/>${CRADLE}`,true,120,54);// heavier head
const circ=s=>Buffer.from(`<svg width="${s}" height="${s}"><circle cx="${s/2}" cy="${s/2}" r="${s/2}" fill="#fff"/></svg>`);
(async()=>{const ids=Object.keys(V);
for(const id of ids){fs.writeFileSync(`round5/${id}.svg`,V[id]);
 for(const s of [512,48,16]) await sharp(Buffer.from(V[id])).resize(s,s).composite([{input:circ(s),blend:'dest-in'}]).png().toFile(`round5/${id}-${s}.png`);
 await sharp(`round5/${id}-16.png`).resize(128,128,{kernel:'nearest'}).png().toFile(`round5/${id}-16x.png`);
 await sharp(`round5/${id}-512.png`).resize(250,250).png().toFile(`round5/${id}-250.png`);}
const W=300,comp=[];
ids.forEach((id,i)=>{comp.push({input:`round5/${id}-250.png`,left:i*W+25,top:14});
 comp.push({input:`round5/${id}-48.png`,left:i*W+45,top:290});
 comp.push({input:`round5/${id}-16x.png`,left:i*W+120,top:275});});
await sharp({create:{width:W*ids.length,height:420,channels:4,background:'#FAF8F5'}}).composite(comp).png().toFile('round5/sheet.png');
console.log('round 5:',ids.join(' '));})();
