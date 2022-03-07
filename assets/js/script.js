console.log('Mensaje enviado por consola');
alert();
prompt();
confirm();
document.write();
console.warn('error amarillo');
console.error('error crítico');

//declarar variable: reservar un espacio en memoria para guardar
//se declaran con var (hasta el momento)
//estandar lowerCamelCase
var cadenaDeTexto = 'Hola Mundo!';
console.log(cadenaDeTexto);
//tipos de datos: string, number, null, boolean, undefined

var dato;
console.log('tipo de dato de la variable "dato": ' + typeof dato);

//precauciones con el bajamente tipado
var numeroUno = prompt('Ingresa primer número');
var numeroDos = prompt('Ingresa segundo número');
console.log('la suma de los números es: ' + (numeroUno + numeroDos));
// El problema con este codigo es que en lugar de sumar, contatena.
// Esto se produce por que lo ingresa como string. 

// Este problema se corrige con el siguiente codigo:
var numeroUno = parseInt(numeroUno);
var numeroDos = parseInt(numeroDos);
