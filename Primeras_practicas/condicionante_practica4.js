//Condicionantes
//If if/else

var texto =  'Servidor ON';

if (texto == 'Servidor OFF'){
    console.log('Test pass')
} else {
    console.log('Test fail')
}




//¿Qué hace esto?
/*
if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

  if (last=0){
      if (variable =5){
          variable2 = 7
      }
  }

if( num <= num2 && foo > BarProp){
        num = 8
  }

if(num <= num2 || foo > BarProp){
    num = 8
}

if(true){
    num = 8
}

var notTrue =  false
if(notTrue){
    num = 8
}

if(!notTrue){
    num = 8
}
*/

// Switch

var rango = "Coronel";

switch(rango){
    case "Soldado razo":
        console.log("No autorizado")
        break;
    case "Comandante":
        console.log("Necesita autorización de su superior")
        break;
    case "Capitan":
        console.log("Necesita autorización de su superior capitan")
        break;
    case "Coronel":
        console.log("Autorizado")
        break;
    case "General":
        console.log("Usuario Autorizado")
        break;
    default:
        console.log("Respuesta Usuario no autorizado")
}

//Tarea

var opciones = 43

switch(this.opciones){
    case '2':
        console.log("No autorizado")
        break;
    case '43':
        console.log("Necesita autorización")
        break;
    case '54':
        console.log("Autorización requerida")
        break;
    default:
        console.log("Respuesta default: Usuario no autorizado")
        break;
}

var dealer = 4
var x = this.dealer;
switch (true) {
    case (x < 5):
        console.log("less than five");
        break;
    case (x < 9):
        console.log("between 5 and 8");
        break;
    case (x < 12):
        console.log("between 9 and 11");
        break;
    default:
        console.log("none");
        break;
}


//Ejercicio avanzado = Ordenar un arreglo con burbuja
var array1 =[1,111,2,23,4,1,26,300,1,8,5,19,3];
for(var x=0; x<array1.length;x++){
for(var i = 0; i<array1.length; i++){
    if(array1[i] >= array1[i+1]){
        temp = array1[i+1]
        array1[i+1] = array1[i]
        array1[i] = temp
    }
}
}
console.log(array1);