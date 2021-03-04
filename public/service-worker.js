importScripts("/precache-manifest.a614b39cbb32bb48809bf51831316a95.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

workbox.core.setCacheNameDetails({ prefix: "b15" })

<<<<<<< Updated upstream
importScripts(
  "/precache-manifest.1ae09e7186e7c4f09325c674ef572068.js"
);
=======
self.__precacheManifest = [].concat(self.__precacheManifest || [])
self.addEventListener('install', e => {
  self.skipWaiting()
})
>>>>>>> Stashed changes

workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerRoute(
  new RegExp('/statics/plat15/'),
  new workbox.strategies.NetworkOnly()
)

workbox.routing.registerNavigationRoute('/index.html')
