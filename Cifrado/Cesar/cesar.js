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
	k = k % 26 || 0;
	
	if (k < 0) k += 26;
	
	var aux = this.split('');
	
	var enc = '';
	
	var lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	
	aux.forEach(function (c) {
		if (!c.isLowerCase() && !c.isUpperCase()) {
			enc += c;
			return;
		}
		
		var arr = c.isLowerCase() ? lowerAlphabet : upperAlphabet;
		
		enc += arr[(arr.indexOf(c) + k) % 26];
	}, enc);
	
	return enc;
};

String.prototype.decode = function (k) {
	return this.encode(-k);
};