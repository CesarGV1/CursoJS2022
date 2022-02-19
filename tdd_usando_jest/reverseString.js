const reverseString = (cadena) => {
    if(typeof cadena === 'string'){
            var cadena2='';
            cadena = cadena.toString()
            for(var i = cadena.length-1; i>=0;i--){
                cadena2 += cadena.charAt(i);
            }
            return cadena2.toLowerCase();
    }
}

module.exports = reverseString;