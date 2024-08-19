const CACHE_NAME = 'valhala-cache-v1'
const APP_SHELL_URLS = [
    '/',
    '/index.html',
    '/app-icon-192x192.png',
    '/app-icon-512x512.png',
    '/manifest.json',
    '/offline.html',
]

// This code executes in its own worker or thread
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((response) => {
            console.log('Opened cache')
            return response.addAll(APP_SHELL_URLS)
        })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                if (!event.request.url.startsWith('http')) {
                    return
                }

                const clone = response.clone()
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, clone)
                })
                return response
            })
            .catch(async () => {
                // Cache hit - return the response from the cache
                const getPageFromCache = await caches.match(event.request)
                if (getPageFromCache) {
                    return getPageFromCache
                }

                return caches.match('/offline.html')
            })
    )
})

self.addEventListener('activate', (event) => {
    console.log('asd', event)
})

self.addEventListener('push', (event) => {
    const data = event.data?.json() ?? {}
    const title = data.title || 'Rumbia Tech - Agustus  2024'
    const message = data.message || 'Error 500, message can be fetched'
    const icon = '/app-icon-192x192.png'

    const options = {
        body: message,
        icon,
        badge: icon,
        data: {
            url: data.url || '/',
        },
    }

    event.waitUntil(self.registration.showNotification(title, options))

    console.log('notification', event.data.json().title)
})
