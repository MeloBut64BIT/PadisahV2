const CACHE_NAME = "padisah-v2"; // Updated version to break old cache
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./game.js",
  "./manifest.json",
  "./data/events.js",
  "./assets/bg.jpg",
  "./assets/padisah.png",
  "./assets/vezir.png",
  "./assets/serdar.png",
  "./assets/hazine.png",
  "./assets/icon.png"
];

self.addEventListener("install", (e) => {
  self.skipWaiting(); // Force the new service worker to take over immediately
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch(err => console.log('Cache error', err));
    })
  );
});

// Clear old caches when a new version is activated
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim()) // Take control of all clients immediately
  );
});

// Network First Strategy: Always try to get the newest files from GitHub.
// If offline (no internet), fall back to the cached files.
self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        return response;
      })
      .catch(() => {
        return caches.match(e.request);
      })
  );
});
