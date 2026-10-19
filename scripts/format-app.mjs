// Mechanical app-only rewrite; never touches protected mobile runtime files.
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const file=path.join(root,'src/Prototype.tsx');
let source=fs.readFileSync(file,'utf8');
source=source.replace('<div className="trip-app">','<div className="trip-app" style={{"--trip-safe-top":device.device.geometry.safeArea.top+"px"} as CSSProperties}>');
for (const name of ['Today','Schedule','MapPage','Tickets','Checklist','More']) source=source.replaceAll('<'+name+'/>',name+'()');
fs.writeFileSync(file,source);
const css=path.join(root,'src/prototype.css');
fs.writeFileSync(css,fs.readFileSync(css,'utf8').replaceAll('var(--mobile-safe-area-top,54px)','var(--trip-safe-top,54px)'));
