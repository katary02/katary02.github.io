function ubicacion(){
    var texto1 = document.getElementById("lat");
    var texto2 = document.getElementById("lon");
 
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
			function(posicion){
				texto1.innerHTML=posicion.coords.latitude;
				texto2.innerHTML=posicion.coords.longitude;
			}
		)
	} else {
		console.log("Su navegador no soporta geolocalizacion")
	}
}