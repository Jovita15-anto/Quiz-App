const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];


self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then(async (cache) => {
      try {
        await cache.addAll(assets);
      } catch (err) {
        console.error("Caching failed:", err);
      }
    })
  );
});

// Serve cached assets if available
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
