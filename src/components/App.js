import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';

class App extends Component {

  cotizarSeguro = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div className="contenedor">
        <Header 
          titulo = "Cotizador de seguro de autos"
        />

        <div className="contenedor-formulario">
          <Form 
            cotizarSeguro = {this.cotizarSeguro}
          />
        </div>

      </div>

    );
  }
}

export default App;
