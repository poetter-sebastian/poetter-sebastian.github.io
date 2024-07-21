window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the mini-infobar from appearing on mobile.
    event.preventDefault();
    console.log('👍', 'beforeinstallprompt', event);
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the installation button container.
    if (typeof divInstall != 'undefined') {
        divInstall.classList.toggle('hidden', false);
    }
});

// register service worker

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.min.js', { scope: '/' }).then(function(reg) {

        if(reg.installing) {
            console.log('Service worker installing');
        } else if(reg.waiting) {
            console.log('Service worker installed');
        } else if(reg.active) {
            console.log('Service worker active');
        }

    }).catch(function(error) {
        // registration failed
        console.log('Registration failed with ' + error);
    });
}

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches
            .open("v1")
            .then((cache) =>
                cache.addAll([
                    '/',
                    '/index.html',
                    '/favicon.ico',
                    '/src/css/style.min.css',
                    '/src/js/app.js',
                    '/src/img/logo.webp',
                    '/src/img/de.webp',
                    '/src/img/en.webp',
                    '/src/img/fr.webp',
                    'https://code.jquery.com/jquery-3.7.1.slim.min.js',
                    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css',
                    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.cs',
                    'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js',
                    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js'
                ]),
            ),
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // caches.match() always resolves
            // but in case of success response will have value
            if (response !== undefined) {
                return response;
            } else {
                return fetch(event.request)
                    .then((response) => {
                        // response may be used only once
                        // we need to save clone to put one copy in cache
                        // and serve second one
                        let responseClone = response.clone();

                        caches.open('v1').then((cache) => {
                            cache.put(event.request, responseClone);
                        });
                        return response;
                    });
            }
        }),
    );
});

// Try to get data from the cache, but fall back to fetching it live.
async function getData() {
    const cacheVersion = 1;
    const cacheName = `sebapp-${cacheVersion}`;
    const url = 'https://poetter-sebastian.github.io/';
    let cachedData = await getCachedData(cacheName, url);

    if (cachedData) {
        console.log('Retrieved cached data');
        return cachedData;
    }

    console.log('Fetching fresh data');

    const cacheStorage = await caches.open(cacheName);
    await cacheStorage.add(url);
    cachedData = await getCachedData(cacheName, url);
    await deleteOldCaches(cacheName);

    return cachedData;
}

// Get data from the cache.
async function getCachedData(cacheName, url) {
    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);

    if (!cachedResponse || !cachedResponse.ok) {
        return false;
    }

    return await cachedResponse.json();
}


// Delete any old caches to respect user's disk space.
async function deleteOldCaches(currentCache) {
    const keys = await caches.keys();

    for (const key of keys) {
        const isOurCache = key.startsWith('sebapp-');
        if (currentCache === key || !isOurCache) {
            continue;
        }
        await caches.delete(key);
    }
}

try {
    let data = getData();
    console.log({ data });
} catch (error) {
    console.error({ error });
}