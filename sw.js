// Service Worker for FB Audio
const CACHE_NAME = 'fb-audio-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/vendedores.html',
  '/sobre.html',
  '/contato.html',
  '/styles.css',
  '/script.js',
  '/assets/logo-vermelho.png',
  '/assets/img/1600-12.webp',
  '/assets/img/galeria1.jpg',
  '/assets/img/hero/01.webp',
  '/assets/img/linha.png',
  '/assets/img/linha.png',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap'
];

// Install Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch from cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

// Update Service Worker
self.addEventListener('activate', function(event) {
  var cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
