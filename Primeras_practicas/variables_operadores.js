let a = 1 ;
var b = 45;
var c = 6;
var d = a + b;

console.log(d)
console.log("A + B = " + d)
console.log(a+b)
console.log(a*b)
console.log(a/b)
console.log(a-b)
console.log(a%b)
console.log(a++)
//concatenar
console.log("cadena"+576+'9')
console.log('cadena1'+'cadena2')
console.log('cadena1','cadena2')

const cinco = 5;
const diez = 10;
console.log("Quince es " + (cinco+diez) + " y no " + (2 * diez + 2))

//operadores de asignacion
var numero = 8;
console.log("Variable: ", numero += 2)
console.log("Variable: ", numero /= 2)
console.log("Variable: ", numero /= 2)
console.log("Variable: ", numero *= 25)
console.log("Variable: ", numero = 5)
console.log("Variable: ", numero %= 10)

let text1 = "Jhon";
let text2 = "Smith";
let text3 = text1 + ' ' + text2;
console.log(text3);

let mycadena = 'alfa';
mycadena += 'beto';
console.log(mycadena);

const x = 5 + 5;
let y = '5' + 5;
let z = 'hello' + 5
console.log(x,y,z)

//Desestructuracion

var foo = ['one','two','three'];
console.log(foo)

var one = foo[0];
var two = foo[1];
var three = foo[2];
console.log(one,two,three);

var [one,two,three] = foo;
console.log([one,two,three]);
console.log([one]);
console.log([three]);

//operadores de comparacion

var var1 = 3;
var var2 = 5;

console.log(var1 == 3);
console.log("3" == var1);
console.log(3 == '3');
console.log(3 === '3');
console.log(var1 != 4);
console.log(var2 != 3);
console.log(var2 != '3');
console.log(var2 != '5');

//Operadores logicos
