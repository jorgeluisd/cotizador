import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import Resumen from './Resumen';
import Resultado from './Resultado';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';

class App extends Component {

  state = {
      resultado: '',
      datos: {}
  }

  cotizarSeguro = (data) => {


    const {marca, plan, year} = data;

    // Agregar una base de 2000
    let resultado = 2000;

    // Obtener la diferencia de años
    const diferencia = obtenerDiferenciaAnio(year);

    // Por cada año restar el 3% al valor del seguro
    resultado -= ((diferencia * 3) * resultado) / 100;

    // Americano 15%, Asiatico 5% y Europeo 30% de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;

    // El plan basico incrementa  el valor 20% y el cobertura completa 50%
    let incrementoPlan = obtenerPlan(plan);

    // Dependiendo del plan incrementar
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    const datosAuto = {
      marca: marca,
      plan: plan,
      year: year
    }

    this.setState({
      resultado: resultado,
      datos: datosAuto
    })
    console.log(resultado);


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

          <Resumen 
            datos = {this.state.datos}
          />

          <Resultado 
            resultado = {this.state.resultado}
          />
        </div>

      </div>

    );
  }
}

export default App;
