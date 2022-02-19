const impresion = require('./impresion');

//Validar que regrese un un texto
test('Validar que se imprima una cadena de texto', ()=>{
    expect(impresion.holaMundo()).toBe('¡Hola Mundo!');
})