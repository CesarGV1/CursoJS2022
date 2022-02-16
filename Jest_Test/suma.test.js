const suma = require('./suma');

test('Comparar que la suma de 3 y 2 es igual a 5',()=>{
    expect(suma(3,2)).toBe(5);
});

test('Comparar que la suma de 3 y 2 NO es igual a 10',()=>{
    expect(suma(3,2)).not.toBe(10);
});

test('Validar que la suma de los numeros es mayor a un numero',()=>{
    expect(suma(3,2)).toBeGreaterThan(4);
    expect(suma(3,9)).toBeGreaterThanOrEqual(12);
});

test('Validar que la suma de los numeros es menor a un numero',()=>{
    expect(suma(3,2)).toBeLessThan(6);
});