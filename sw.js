self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('time-v1').then(cache => cache.addAll([
            '/breastfeeding_tracker/',
            '/breastfeeding_tracker/index.html'
        ]))
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => response || fetch(e.request))
    );
});
