//Instalar el Service Worker
self.addEventListener("install", evt => {console.log("El Service Worker se instaló");});

//Activar el Service Worker.
self.addEventListener("activate", evt => {console.log("El Service Worker se activó");});


//Eventos Fetch (fetch request o pedido de busqueda).
self.addEventListener("fetch", evt => {console.log("Se atrapó el evento: ", evt);});
