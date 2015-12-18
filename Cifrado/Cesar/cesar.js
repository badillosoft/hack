// Alan Badillo Salas | badillo.soft@hotmail.com | @badillosoft
// JavaScript: cesar.js

/*
	El siguiente código extiende métodos de encriptación a cadenas.
	Se utiliza el Cifrado César el cual toma una cadena y un número k,
	luego desplaza k posiciones el caractér, si el caractér llega a 'z'
	entonces su siguiente es 'a'. Este algoritmo deja inmutables los carácteres
	no alfanuméricos y es sensible a minúsculas, mayúsculas y números. 
*/  

String.prototype.isNumber = function () {
	return this >= '0' && this <= '9';
};

String.prototype.isLowerCase = function () {
	return this >= 'a' && this <= 'z';
};

String.prototype.isUpperCase = function () {
	return this >= 'A' && this <= 'Z';
};

String.prototype.isSpecialCharacter = function () {
	return !(this.isNumber || this.isLowerCase || this.isUpperCase);
};

String.prototype.encode = function (k) {
	k = k || 0;
	
	k = k % 26;
	
	if (k < 0) k = 26 + k;
	
	var aux = this.split('');
	
	var enc = '';
	
	var lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var upperAlphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
	//var numbers = '01234567890123456789012345'.split('');
	
	aux.forEach(function (c) {
		enc = enc + (
			c.isLowerCase() ? lowerAlphabet[(lowerAlphabet.indexOf(c) + k) % 26] :
			(c.isUpperCase() ? upperAlphabet[(upperAlphabet.indexOf(c) + k) % 26] : c)
		);
	}, enc);
	
	return enc;
};

String.prototype.decode = function (k) {
	return this.encode(-k);
};