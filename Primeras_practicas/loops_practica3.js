//while
var cervezas = 99;

while(cervezas > 0 ){
    console.log("Aun hay " + cervezas + " en el refri, sigue la fiesta")
    cervezas -=2;
}

//For
for(var i=0; i<3; i++){
    console.log("El valor de i = ", i);
}

for(var i=99; i>0; i-=2){
    console.log("Aun hay " + i + " en el refri, sigue la fiesta")
}

let arreglo = ['a','b','c'];
var text = 'javaScript';

for(var i=0; i < arreglo.length; i++){
    console.log("El elemento del arreglo", arreglo[i],"con indice",i);
}

//Ejercicio avanzado

/*
array al revez
Entrada = [4,5,6,7]
Salida = [7,6,5,4]
** no solo numerico
** 10 elementos
Entrada = [4,true,"hola"]
Salida = ["hola",true,4]
*/
//
// var array1 = [4,true,'hola']
// console.log(array1.reverse());

var entrada = [4,true,"hola",5,'test']
var salida = []
for(var i=0;i<entrada.length; i++)
{
    salida.unshift(entrada[i]);
}
console.log(salida);