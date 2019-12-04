const nombreCache="sitio-Cache";
const elementos=["/","/.html","/css/estilo.css","/js/accion.js"];



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
self.addEventListener("activate", evt => {console.log("El Service Worker se activó");});


//Eventos Fetch (fetch request o pedido de busqueda).
self.addEventListener("fetch", evt => {console.log("Se atrapó el evento: ", evt);});
