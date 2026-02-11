// ANCHOR Service Worker
// Provides offline functionality for the PWA

const CACHE_NAME = 'anchor-v2';
const OFFLINE_URL = '/anchor-selfcare/';

// Assets to cache immediately on install
const PRECACHE_ASSETS = [
  '/anchor-selfcare/',
  '/anchor-selfcare/crisis',
  '/anchor-selfcare/baseline',
  '/anchor-selfcare/when-off',
  '/anchor-selfcare/mind',
  '/anchor-selfcare/movement',
  '/anchor-selfcare/quick-reference',
  '/anchor-selfcare/about',
  '/anchor-selfcare/manifest.json',
  '/anchor-selfcare/icon.svg',
  '/anchor-selfcare/icon-192.png',
  '/anchor-selfcare/icon-512.png',
];

// Install event - precache essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  // Activate immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  // Take control of all pages immediately
  self.clients.claim();
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200) {
            return response;
          }

          const responseToCache = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          return caches.match(OFFLINE_URL);
        });
    })
  );
});
