self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Escuta a mensagem enviada do index.html para disparar a notificação
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'NOTIFICACAO') {
        self.registration.showNotification(event.data.titulo, {
            body: event.data.corpo,
            icon: 'https://cdn-icons-png.flaticon.com/512/3074/3074058.png',
            badge: 'https://cdn-icons-png.flaticon.com/512/3074/3074058.png',
            vibrate: [200, 100, 200]
        });
    }
});