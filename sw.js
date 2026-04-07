self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('tareaflow-v1').then(cache =>
      cache.addAll([
  './',
  './index.html',
  './tareas.html',
  './ayuda.html',
  './styles.css',
  './app.js'
])
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});