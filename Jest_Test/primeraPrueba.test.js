
test('Validar el tetxto de una constante', ()=>{
const hola = 'Hola mundo';
expect(hola).toBe('Hola mundo');
});

test('Pruebas de un objeto', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

  test('Validaciones usando un for',()=>{
      for(var i=0;i<10;i++){
          for(var j=1;j<10;j++){
              expect(i+j).not.toBe(0);
          }
      }
  });

  test('Validar suma de numeros flotantes', ()=>{
    const sum = 0.2 + 0.4;
    expect(sum).toBeCloseTo(0.6);
    //expect(sum).toBe(0.6);
    });