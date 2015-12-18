/* global $ */

// Alan Badillo Salas | badillo.soft@hotmail.com | @badillosoft
// JavaScript: get_json.js

/*
	El siguiente código extiende métodos a un objeto String
	que suponemos es la url, para
	obtener un json de un servidor de manera fácil.
	Suponemos que el servidor recibe como entrada un objeto
	JSON y devuelve como salida otro objeto JSON.
	
	Requiere: jquery.js
*/

String.prototype.getJSON = function(data, sucess, error) {
	$.ajax({
		url: this,
		type: 'POST',
		data: JSON.stringify(data),
		dataType: 'json',
		success: sucess,
		error: error
	});
};

// TEST
var url = "http://localhost/";

url.getJSON(
	{ message: 'Hola' },
	function (data) {
		console.log('Se ha recibido un json:');
		console.log(data);
	}, 
	function (e) {
		console.log('Ocurrio un error:');
		console.error(e);
	}
);