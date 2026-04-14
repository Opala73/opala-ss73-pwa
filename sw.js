self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('opala-v2').then(cache => cache.addAll(['./','index.html','game.js','manifest.json']))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
