import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//DESCRIBE: Para describir las pruebas que vamos a realizar
describe('Texto', ()=> { // Para agrupar test con una descripcion

  describe('Otro Texto', () => { // Podemos agregar mas describes dentro de otros para sub dividir nuestros test.

    //IT: vamos a definir que vamos a ejecutar pruebas (la prueba en si)
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    it('otro test', () => {
  
    });
  });
  
  
});
