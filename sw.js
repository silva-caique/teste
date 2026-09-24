self.addEventListener('install', (event) => {
    console.log('App pronta a ser instalada!');
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});