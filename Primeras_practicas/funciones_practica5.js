//Funciones
var nombre;
nombre = 'Cesar';

console.log(miNombre(nombre));

function miNombre(name)
{
    return 'Hola ' + name;

}


function suma(num1,num2)
{
    return num1 + num2;
}
console.log(suma(4,5));


function cuadrado(num1)
{
    return num1 * num1;
}
console.log(cuadrado(2));

function checkANumber(num)
{
    if(num === 40){
        //console.log('Correcto');
        return 'Correcto';
    }else{
        //console.log('Incorrecto');
        return 'Incorrecto';
    }
}


console.log(checkANumber(3))
checkANumber(40);

//Funcion que diga si un numero es impar o par

function parOImpar(num){
    if (num % 2){
        return 'Es Impar';    
    }
    return 'Es par';
}
console.log(parOImpar(5));

//Tarea encontrar numeros impares y pares en un arreglo con 100 numeros
function generateArray(){
    var array1 = [];
        for(var i=0; i<=100; i++)
        {
            array1[i] = Math.floor(Math.random() * (100-1)+1);
        }
        return array1;
}

function parOImparArray(array1){
    for(var i = 0; i<=array1.length; i++)
    {
        if(array1[i]%2 == 0){
            console.log(array1[i] + ' es par');
        }else{
        console.log(array1[i] + ' es impar');
        }
    }
}

parOImparArray(generateArray());


//Invertir un array con una funcion
var entrada = [4,true,"hola",5,'test']

function invertirArray(entrada)
{   
    var salida = []
        for(var i=0;i<entrada.length; i++)
        {
            salida.unshift(entrada[i]);
        }   
        return salida;
}

console.log(invertirArray(entrada));
//Tarea: The Three company input asd output aaasssddd
function theTreeCompany(cadena){
    var cadena2=''; 
    for(var i=0; i<=cadena.length; i++){
    caracter = cadena.charAt(i)
    cadena2 += caracter + caracter + caracter;
    }
    return cadena2;
}
console.log('\n','######### The Three company #########');
console.log(theTreeCompany('Cesar'));



//Opcionales **

//TAREA: Palindromo "ana", "oso", "casa"
var palabra = 'uwu';

function isAPalindrome(palabra){
    var cadena2='';
    for(var i = palabra.length; i>=0;i--){
        cadena2 += palabra.charAt(i);
    }
    if(cadena2.toLowerCase() === palabra.toLowerCase()){
        console.log(palabra + ' es un palindromo')
    }else{
        console.log(palabra + ' no es un palindromo')
    }
}
console.log('\n','######### Palindromo #########');
isAPalindrome(palabra);
/*
input   output
casa    No es un palindromo
oso     Si es un palindromo
ana     Si es un palindromo
*/


/*Tarea: Crear una funcion que regrese la siguente cadena
input       output
Marcia      una manzana para Marcia y una manzana para mi
Paco        una manzana para Paco y una manzana para mi
""          una manzana para ti y una manzana para mi
87987       Error
*/
function manzanasPara(persona){
    switch(persona){
        case 'marcia': 
        case 'Marcia':
            console.log('una manzana para Marcia y una manzana para mi');
            break;
        case 'paco':
        case 'Paco':     
            console.log('una manzana para Paco y una manzana para mi');
            break;
        case '': 
            console.log('una manzana para ti y una manzana para mi');
            break;
        default:
            console.log('Error');
    }
}
console.log('\n','######### Regresar un texto #########');
manzanasPara('Marcia');

//Una funcion dentro de una funcion

function ejecutar(algunaFuncion, valor){
    algunaFuncion(valor);
}

function decir(palabra){
    console.log(palabra);
}

//ejecutar(decir,'hola');