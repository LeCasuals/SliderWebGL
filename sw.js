// use a cacheName for cache versioning
var cacheName = 'v1:static';

// during the install phase you usually want to cache static assets
self.addEventListener('install', function(e) {
    console.log("test");
});

// when the browser fetches a url
self.addEventListener('fetch', function(event) {
    console.log("test");
});