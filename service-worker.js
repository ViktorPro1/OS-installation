const CACHE_NAME = 'os-guide-cache';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js'
];

// Встановлення та кешування
self.addEventListener('install', event => {
    self.skipWaiting(); // активує SW одразу
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

// Активація
self.addEventListener('activate', event => {
    self.clients.claim(); // контролює всі вкладки одразу
});

// Fetch – мережа пріоритетна, кеш – запасний варіант
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .then(networkResponse => {
                // якщо успішно з мережі, оновлюємо кеш
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, networkResponse.clone());
                });
                return networkResponse;
            })
            .catch(() => {
                // якщо мережа недоступна, беремо з кешу
                return caches.match(event.request);
            })
    );
});

