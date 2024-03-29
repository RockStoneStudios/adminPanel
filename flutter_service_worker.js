'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7cedb76306f088418504ce8161c9abae",
".git/config": "53d28ea1f80412f6c8884da2d8d562b7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c13c78b22b7c67e6c193f30d98b69c68",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "51c8ae275d20f40b41668eb351377324",
".git/logs/refs/heads/main": "a5571fa5b5bec12e06022f9c2aa889ed",
".git/logs/refs/remotes/origin/main": "c82789a492fc3e8c7b14e934fc3eb6cd",
".git/objects/02/566f40e4627f331cfce1aa10fe98df87fabf17": "59d847d278e0a70090c793851b9f886e",
".git/objects/02/d7f76ee1a2b5c6d21f9954e9659fdbb231856a": "b5decd4e52a4d4253207d6a5d8078523",
".git/objects/04/60533984443b712f97990a0078523209553100": "b705437e0975fab58f07aab5d9fd26db",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/9d3f324a15165f9560b42340abf0d55fbc7a55": "c842778f8eff4e5132631bc11002d500",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/12/af7580c958e82ebf78f3acb289d0ac28468927": "8aed3475c1f1a548d6b846865a20b832",
".git/objects/1c/e042d6d278654d5fcba6c109962285bc26087f": "489dcefe29dc4f046f4277fc7ca00698",
".git/objects/1e/cd0d6d4322d31a36d5188acd466aa72653bca8": "ae9f821ceb72cdd573aab2f3387f6c9b",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/5d0b0cceb637bd499feec1c462f03ae2123711": "d2ab0c608a677e726289e34767a4d1c1",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/35/a977c082dd9422b9c919df359bcd32f8537370": "cd7aeeb0b9224ddeb2f3a7035b9cc840",
".git/objects/35/f56b084c32ba4862f80366819003a844261cf6": "9840646acefa608646cee8fbe51e649e",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/412801a1f0d2a29949aa0fd503b44509770c32": "57ab36de13d83432b021ec41ec5c6ca5",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/8ec9c491ce8e7b3ccbdd9283aa0d7f7b935951": "b07ea3ca9d67124920296bcd23079ef6",
".git/objects/4b/de1d6365ec168f91b83a30fb3092691ed452fc": "c93d7446232be516418485d12c4bb4ba",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/75/8b5e873f86e7715a6fbab3052115cc9429709f": "309c833fe07e1875717bec15fb751457",
".git/objects/76/37a2509f10cbdb0ee6b1e2a6bea10c867b8119": "0f14cb529f448ed3c0cfa2d027d8903a",
".git/objects/7d/427b6bced4018561c5562fd527ebc40a8c62fb": "1b5f3b91ba6613cab0762b9ab7da227e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/11d3e7bbe19478ddad5e7763947eb1653eb6b3": "703853526b8cd12d35919f6606650b37",
".git/objects/90/976be6d425a2aa4fb7feada57484bdbfc84f49": "5984352a5f0e5c1983e54f5538ed19d0",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/96/744021503f0b3683e282ea355cfc4a33890675": "d719821451d0cd8b61e3a626dacf04e8",
".git/objects/9b/98a7f7c840e4c38f7635ea46bd374b83bf1239": "1f5c24c2565ef267af81903a8e86584b",
".git/objects/a6/c8348c3fac321c7b41bbab0edc9262e44c3c6a": "20fee094de334d48ce94a28651b55455",
".git/objects/ab/a1af7abe82681ce5d39d8534ea40c7f700ff1e": "83494cc87567fad3bd7c719ce95d6b1b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c4/d13fd72c7acd7b86d248479e34bf056ab3c1bd": "93a98a98739c71b774cc6fda4f95b807",
".git/objects/c7/a133be3d4dbf37e70b5c91e4808611af589d3d": "94478da2bb0c06ee22c74fe6d3733d1e",
".git/objects/cc/e715aad256a89f6a3650b61358164f8fe2a80e": "d2a0fa473f9d9686c02d530247d9d30a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/597df34c2ce1b5674c240869d9615984b23656": "cb60e5dd0b3d5b984225367c400e6bed",
".git/objects/e6/cf582253e0ba9ac371defeb45eb8a07119ecb8": "5c0fda3777e120672d8d3514a2bcac13",
".git/objects/e7/55315cf3b496ad85aa936c99746f2f7b8a028c": "7137d28372767a415189368d5acd4010",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/2fc4c57f7ab30e7b876766582f5a17dec0d55b": "042c6251f03430ed119174715103b3eb",
".git/objects/fc/89b3d049be4349c777402a6d69f36dd910c9df": "045531489d2fdff1ce33b0cf42fe6b84",
".git/refs/heads/main": "0994a01d3f10a16dccad07246fcac300",
".git/refs/remotes/origin/main": "0994a01d3f10a16dccad07246fcac300",
"assets/AssetManifest.bin": "409429e31b937bc0a3504f0ab205d1d2",
"assets/AssetManifest.bin.json": "a47b383e41afc5040b3ccd55f7922f1b",
"assets/AssetManifest.json": "b35cf0f92eca315d184c2061457c96ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7c77cc1b70b898df57757ddb8a936638",
"assets/images/dashboard.webp": "1194e957bb4668e9eb3416c04cf201a2",
"assets/NOTICES": "bcf5d953777e9640edf52f84b44fcdfd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1846311aab71d8466abf43d16c153951",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a79f95a6e2ca5de17381b625cbe50a34",
"/": "a79f95a6e2ca5de17381b625cbe50a34",
"main.dart.js": "4a07c53810e47904f5ce35703368f8e6",
"manifest.json": "93a58a42ee30cc585e4fb14a23d46ffc",
"version.json": "2f1cf4579d47665c0ed20e1ad33cdfc4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
