const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  '/fallback.html',
  '/css/tic-tac-toe.css',
  '/js/tic-tac-toe.js'
]

self.addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener('activate', evt => {
  //console.log('service worker has been activated')
  evt.waitUntil(
      caches.keys().then(keys => {
          return Promise.all(keys
              .filter(key => key !== staticDevCoffee)
              .map(key => caches.delete(key))
          )
      })
  )
})

self.addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    }).catch(() => caches.match('/fallback.html'))
  )
})