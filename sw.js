const nombreCache="sitio-Cache - v2";
const elementos=["https://joegon1.github.io/Ta-Te-Ti-PWA/","index.html","css/estilo.css","js/accion.js","js/app.js", "manifest.json"];



//Instalar el Service Worker
self.addEventListener("install", evt => 
	{
		//console.log("El Service Worker se instaló");
		evt.waitUntil(
			caches.open(nombreCache).then ((cache)=>
				{
					console.log("Definimos el cache predeterminado");
					cache.addAll(elementos);
				})
			);
	});

//Activar el Service Worker.
self.addEventListener("activate", evt =>{
		//console.log("El service worker se activo.");
		//3°-Chequearemos la version de cache, borraremos la version obsoleta.
		evt.waitUntil(
			caches.keys().then(keys => {
				console.log(keys);
				return Promise.all(keys
					.filter(key => key !== nombreCache)
					.map(key => caches.delete(key))
				)
			})
		);
	});


//Eventos Fetch (fetch request o pedido de busqueda).
self.addEventListener("fetch", evt =>{
	//console.log("Se atrapo el evento: ",evt);
	//2°-Atrapamos los pedidos, para que los busque en el cache.
	evt.respondWith(
		caches.match(evt.request).then(cacheRes => {
			return cacheRes || fetch(evt.request)
		})
	);
});