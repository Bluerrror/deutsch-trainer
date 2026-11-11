/* Deutsch Trainer service worker — offline caching */
const CACHE = 'deutsch-trainer-v17';
const ASSETS = [
  './',
  './index.html',
  './vocab.js',
  './fa.js',
  './bank.js',
  './grammar.js',
  './advanced.js',
  './spoken.js',
  './exams.js',
  './goethe.js',
  './gram_a1.js',
  './gram_a2.js',
  './gram_b1.js',
  './gram_b2.js',
  './gram_c1.js',
  './kurs_a0.js',
  './kurs_a1.js',
  './kurs_a2.js',
  './kurs_b1.js',
  './kurs_b2.js',
  './kurs_c1.js',
  './kurs_c2.js',
  './read1.js',
  './gram_core.js',
  './drill_core.js',
  './verbs.js',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './fonts/nunito.woff2'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then((cached) =>
      cached ||
      fetch(e.request).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
        return res;
      }).catch(() => caches.match('./index.html'))
    )
  );
});
