importScripts("/precache-manifest.ff386d368ce71e652443d9755ba1d40e.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

workbox.core.setCacheNameDetails({ prefix: "b15" })

self.__precacheManifest = [].concat(self.__precacheManifest || [])
self.addEventListener('install', e => {
  self.skipWaiting()
})

workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerRoute(
  new RegExp('/statics/plat15/'),
  new workbox.strategies.NetworkOnly()
)

workbox.routing.registerNavigationRoute('/index.html')
