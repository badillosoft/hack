# Cifrado César

## Introducción

El Cifrado César permite cifrar (codificar) una cadena de texto
cambiando los caracterés por sus sucesivos (o anteriores) k-veces.
Entonces se considera a __k__ como la clave de encriptación.

Por ejemplo:

> Texto original: Hola Mundo?

> Texto cifrado con _k = 3_: Krod Pxqgr?

## Uso

El archivo _cesar.js_ extiende métodos sobre el objeto _String_ que nos permitirán
encriptar (o desencriptar) una cadena.

Para utilizar las funciones de encriptación debemos incluir el archivo en ```<head>```.

> HTML

~~~html
<head>
	...
	<script src="cesar.js"></script>
</head>
~~~

Luego en nuestro código javascript podemos utilizar los métodos _encode(k)_ y
_decode(k)_ sobre cualquier objeto string, por ejemplo:

> JavaScript

~~~js
console.log( "Hola Mundo?".encode(3) );

var str = 'Jxyj jx zs rjsxfoj XJHWJYT utw kfatw st qt inkzsif';

console.log( str.decode(5) );
~~~

## Notas

* El cifrado sólo sirve para letras de a-z y A-Z, los demás caracteres quedan
igual incluyendo números y acentos (_Reto 1_, _Reto 2_).

* El cifrado se limita a 26 caracteres de alfabeto inglés, no incluye ñ (_Reto 3_).

## Retos

1. Hacer que los números se cifren también.
2. Transformar una cadena con acentos a una cadena sin acentos, por ejemplo
	"Adiós" -> "Adios"
3. Usar un diccionario de mapeo que diga que caracter va a que caracter, por ejemplo
	{a: "Z", Z: "3", 3: "a"}