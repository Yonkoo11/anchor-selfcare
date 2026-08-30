const sharp=require('../node_modules/sharp');const fs=require('fs');
const CREAM='#FAF8F5',SAGE='#7D8B7A',MOSS='#6B7B6A',P='../public/';

// LOCKED MARK (round 5, x3): barbless anchor, solid head, SHORT crossbar, wide open cradle.
const mark=(sw)=>`<g fill="none" stroke="${CREAM}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
    <path d="M256 168 L256 412"/><path d="M196 216 L316 216"/>
    <path d="M124 332 C124 392 180 414 256 414 C332 414 388 392 388 332"/>
  </g><circle cx="256" cy="128" r="42" fill="${CREAM}"/>`;
const tile=({rx=0,sw=34}={})=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
   <stop offset="0%" stop-color="${SAGE}"/><stop offset="100%" stop-color="${MOSS}"/></linearGradient></defs>
  <rect width="512" height="512" rx="${rx}" fill="url(#g)"/>${mark(sw)}</svg>`;

const square=tile(), rounded=tile({rx:96}), chunky=tile({rx:96,sw:40});
(async()=>{
  fs.writeFileSync('anchor-avatar.svg',square);
  await sharp(Buffer.from(square)).resize(800,800).png().toFile('anchor-avatar-800.png');
  await sharp(Buffer.from(square)).resize(400,400).png().toFile('anchor-avatar-400.png');
  fs.writeFileSync(P+'icon.svg',rounded); fs.writeFileSync(P+'apple-touch-icon.svg',rounded);
  fs.writeFileSync(P+'favicon-32x32.svg',chunky); fs.writeFileSync(P+'favicon-16x16.svg',chunky);
  await sharp(Buffer.from(rounded)).resize(192,192).png().toFile(P+'icon-192.png');
  await sharp(Buffer.from(rounded)).resize(512,512).png().toFile(P+'icon-512.png');
  await sharp(Buffer.from(rounded)).resize(180,180).png().toFile(P+'apple-touch-icon.png');
  // 1024 native for any store use
  await sharp(Buffer.from(rounded)).resize(1024,1024).png().toFile('anchor-icon-1024.png');

  const circ=s=>Buffer.from(`<svg width="${s}" height="${s}"><circle cx="${s/2}" cy="${s/2}" r="${s/2}" fill="#fff"/></svg>`);
  const comp=[];
  for(const s of [400,128,48,32,16]){
    await sharp(Buffer.from(square)).resize(s,s).composite([{input:circ(s),blend:'dest-in'}]).png().toFile(`proof-${s}.png`);
    if(s<=48) await sharp(`proof-${s}.png`).resize(160,160,{kernel:'nearest'}).png().toFile(`proof-${s}-big.png`);
  }
  comp.push({input:'proof-400.png',left:20,top:20},{input:'proof-128.png',left:450,top:20});
  let x=620; for(const s of [48,32,16]){comp.push({input:`proof-${s}-big.png`,left:x,top:20});x+=180;}
  let x2=450; for(const s of [128,48,32,16]){comp.push({input:`proof-${s}.png`,left:x2,top:250});x2+=90;}
  await sharp({create:{width:1160,height:440,channels:4,background:'#FAF8F5'}}).composite(comp).png().toFile('proof-sizes.png');
  console.log('locked mark exported');
})();
