const doCache = true;

const CACHE_NAME = 'lmbr';

self.addEventListener('install', function(event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          fetch("asset-manifest.json")
            .then(response => {
              response.json()
            })
            .then(assets => {
              const urlsToCache = [
                "/",
                assets[
                  "main.js",
                  "main.css",
                ]
              ]
              cache.addAll(urlsToCache)
              console.log('Congrats! Your webpage has been cached locally!');
            })
        })
    );
  }
});


self.addEventListener('fetch', function(event) {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  }
});
