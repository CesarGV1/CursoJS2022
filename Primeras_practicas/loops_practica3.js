//Ejercicio avanzado
var array1 = [1,2,3,4]
console.log(array1.reverse());

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