// Bump this number whenever you upload a new index.html
const VERSION = 'shadow-hunter-v7';
const FILES = [
  './', './index.html', './manifest.json', './icon-192.png', './icon-512.png',
  './sprites/adder.png',
  './sprites/bellion.png',
  './sprites/bellion_1.png',
  './sprites/bellion_2.png',
  './sprites/bellion_3.png',
  './sprites/bellion_4.png',
  './sprites/beru.png',
  './sprites/beru_1.png',
  './sprites/beru_2.png',
  './sprites/beru_3.png',
  './sprites/beru_4.png',
  './sprites/chest_closed.png',
  './sprites/chest_closed_1.png',
  './sprites/chest_closed_2.png',
  './sprites/chest_closed_3.png',
  './sprites/chest_closed_4.png',
  './sprites/chest_closed_5.png',
  './sprites/chest_closed_6.png',
  './sprites/chest_open.png',
  './sprites/cur.png',
  './sprites/direwolf.png',
  './sprites/drake.png',
  './sprites/fragment.png',
  './sprites/fragment_1.png',
  './sprites/fragment_2.png',
  './sprites/fragment_3.png',
  './sprites/fragment_4.png',
  './sprites/igris.png',
  './sprites/igris_1.png',
  './sprites/igris_2.png',
  './sprites/igris_3.png',
  './sprites/igris_4.png',
  './sprites/iron.png',
  './sprites/iron_1.png',
  './sprites/iron_2.png',
  './sprites/iron_3.png',
  './sprites/iron_4.png',
  './sprites/rank_a.png',
  './sprites/rank_b.png',
  './sprites/rank_c.png',
  './sprites/rank_d.png',
  './sprites/rank_e.png',
  './sprites/rank_s.png',
  './sprites/ravenling.png',
  './sprites/sabre.png',
  './sprites/shard.png',
  './sprites/skitter.png',
  './sprites/stalker.png',
  './sprites/tank.png',
  './sprites/tank_1.png',
  './sprites/tank_2.png',
  './sprites/tank_3.png',
  './sprites/tank_4.png',
  './sprites/tusk.png',
  './sprites/tusk_1.png',
  './sprites/tusk_2.png',
  './sprites/tusk_3.png',
  './sprites/tusk_4.png',
  './sprites/tusker.png',
  './sprites/ursine.png',
  './sprites/wyrm.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network first so a new upload is picked up, cache as the offline fallback.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(VERSION).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then(hit => hit || caches.match('./index.html')))
  );
});
