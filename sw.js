self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/src/css/style.min.css',
                '/sw.js',
                '/src/js/pwa.js',
                '/src/js/app.js',
                '/src/img/de.webp',
                '/src/img/en.webp',
                '/src/img/fr.webp',
                '/src/img/avatar.webp',
                '/src/img/logo.webp',
                '/src/img/logo-gias.webp',
                '/src/img/logo-lefx.webp',
                '/src/img/logo-ovrlab.webp',
                '/src/img/logo-profesco.webp',
                '/src/img/logo-rosenau.webp',
                '/src/img/logo-velomotion.webp',
                '/src/img/logo-vrbits.webp',
                '/src/img/logo-anego-studios.webp',
                '/src/img/logo-aktivoase.webp',
                '/src/img/logo-velomotion.webp',
                '/src/img/logo-hotwire.webp',
                '/src/img/logo-adhoc.webp',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
        // caches.match() always resolves
        // but in case of success response will have value
        if (response !== undefined) {
            return response;
        } else {
            return fetch(event.request).then(function (response) {
                // response may be used only once
                // we need to save clone to put one copy in cache
                // and serve second one
                let responseClone = response.clone();

                caches.open('v1').then(function (cache) {
                    cache.put(event.request, responseClone);
                });
                return response;
            }).catch(function (e) {
                return caches.match(e.name);
            });
        }
    }));
});
