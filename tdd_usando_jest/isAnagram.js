// const isAnagram = (cadena, cadena2) => {
//     var array1 = [];
//     var array2 = [];
//     for(var i=cadena.length-1; i>=0; i--){
//         array1[i] = cadena.charAt(i);
//         array2[i] = cadena2.charAt(i);
//     }
//     array1.sort()
//     array2.sort()
//     if(JSON.stringify(array1)== JSON.stringify(array2)){
//         console.log('true');
//         return true;
//     }else{
//         console.log('falso');
//         return false;
//     }
    
// }

const isAnagram = (cadena,cadena2) => {
    cadena = cadena.replace(/[^a-zA-Z 0-9.]+/g,'').replace(/\s+/g,'').split('').sort().join();
    cadena2 = cadena2.replace(/[^a-zA-Z 0-9.]+/g,'').replace(/\s+/g,'').split('').sort().join();
    if(cadena.toLowerCase() === cadena2.toLowerCase()){
        return true;
    }else{
        return false;
    }

}

module.exports = isAnagram;