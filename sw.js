// Service worker: guarda la app (y los mapas ya vistos) en el dispositivo para abrirla sin conexión.
const C='sst-v2',TC='sst-tiles',ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./vendor/pdf.min.js','./vendor/pdf.worker.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C&&x!==TC).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
if(u.hostname==='tile.openstreetmap.org'){e.respondWith(caches.open(TC).then(c=>c.match(r).then(m=>m||fetch(r).then(res=>{if(res.ok)c.put(r,res.clone());return res}))));return}
if(u.origin!==location.origin)return;
const key=r.mode==='navigate'?'./index.html':r;
e.respondWith(caches.match(key).then(m=>{const net=fetch(r).then(res=>{if(res.ok)caches.open(C).then(c=>c.put(key,res.clone()));return res}).catch(()=>m);e.waitUntil(net.catch(()=>{}));return m||net}))});
