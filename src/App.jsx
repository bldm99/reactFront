import React, { useState, useEffect } from 'react';
import './App.css';
import * as DataNEt from "../src/Datos/Api";

function App() {
  const viewDatos = DataNEt.viewDatos;
  const [datapizzas, setDatapizzas] = useState([]);
  const [pizzaName, setPizzaName] = useState("");
  const [cost, setCost] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [inStock, setInStock] = useState("");

  useEffect(() => {
    const obtenerdata = async () => {
      try {
        const product = await viewDatos(setDatapizzas);
        console.log(product);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerdata();
  }, []);

  return (
    <div className="app">
      <h1>Reto con React consumiendo API de .NET </h1>
      <h1>PEDIDOS DE VENTA </h1>
      <table className="tabla">
        <thead>
          <tr>
            <th>Email Cliente</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {datapizzas.map((item, index) => (
            <tr key={index}>
              <td>{item.correo_cliente}</td>
              <td>{item.nombre_producto}</td>
              <td>{item.cantidad}</td>
              <td>{item.precio_producto ? item.precio_producto : 'Null'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

