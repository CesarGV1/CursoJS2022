//Variables
var var1;
console.log(var1)

var1 = "hola";
console.log(typeof var1);

var1 = true;
console.log(typeof var1);

var1 = 456;
console.log(typeof var1);

var1 = [5,6];
console.log(typeof var1);

var1 = {casa:4};
console.log(typeof var1);

//Constantes
const accesorio = "mouse"
console.log("Constante: ",accesorio);
console.log(accesorio + 67);
console.log("Constante: ",accesorio);
console.log("Longitud Constante: ",accesorio.length);

let ancho = 16;
let y = 5;
let x = 6;
let lastName = 'johnson';

console.log(ancho, y, x, lastName);
console.log(ancho, y+2, x+y, lastName);
console.log(ancho, y, x, lastName);

let respuesta1 = "it's all right"
console.log(respuesta1);

//Arrays
var dogs = ['boxer','rex','toby',9];
console.log(dogs);

dogs = ['boxer','rex','toby',9,98,,32];
console.log(dogs);
console.log(dogs[5]);

dogs.push('test');
dogs.push(78);
console.log(dogs);

dogs.pop();
console.log(dogs);

dogs.shift();
console.log(dogs);

var dosPerritos = dogs.splice(0,2)
console.log('dogs:',dogs);
console.log('dosPerritos:',dosPerritos);

dogs[6] = true;
console.log('dogs:',dogs);
console.log('dogs:',dogs[6]);
dogs.unshift('perro1')
console.log(dogs)

//Variables nulas
var emptyVar;
var undefindedVar;
console.log(emptyVar);
emptyVar = null;
console.log(emptyVar);

console.log(emptyVar + 1);
console.log(undefindedVar + 1);