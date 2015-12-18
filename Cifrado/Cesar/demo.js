// Alan Badillo Salas | badillo.soft@hotmail.com | @badillosoft
// JavaScript: demo.js

/*
	Define un método llamado cifrar, que toma los valores
	de la interfaz y cifra el texto del <textarea> según la
	clave del <input> al pulsar <button>.
	
	Requiere cesar.js 
*/

// Guardamos la clave original
var k_original = 0;

function cifrar() {
	//Obtenermos los elementos de la interfaz
	var text_area = document.getElementById('text');
	var k_input = document.getElementById("k");
	var k_ori = document.getElementById("k_ori");
	
	// Obtenemos el texto y la clave
	var text = text_area.value || 'Hola Mundo';
	var k = Number(k_input.value) || 0;
	
	// Decidimos cual es la clave para decifrar el original
	k_original -= (k % 26);
	
	// Mostramos la clave para regresar al original en la interfaz
	k_ori.innerHTML = (k_original % 26).toString();
	
	// Ciframos el texto y lo colocamos en el textarea
	text_area.value = text.encode(k);
}