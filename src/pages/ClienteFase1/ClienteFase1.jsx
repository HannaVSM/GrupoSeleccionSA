import React, { useState } from 'react';
import './ClienteFase1.css'

export const ClienteFase1 = () => {
  return (
    <div className="login">
    <p>AnalistaCliente - nombre</p>

   
    <div className="form">
        <h3>Item Perfil</h3> 
          <div class="content-select">
            <select>
              <option>Fase 1</option>
            </select>
            <i></i>
          </div>
        </div>

    <p>Lista de Clientes</p>

    <table className="custom-table">
        <thead>
          <tr>
            <th>Consecutivo Clientes</th>
            <th>NIT</th>
            <th>Seleccionar</th>
          </tr>
        </thead>
        <tbody>
          {/* Agrega aquí las filas de datos de la tabla */}
          <tr>
            <td>23423</td>
            <td>55959</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
          <td>45645</td>
            <td>23434</td>
            <td><input type="checkbox" /></td>
          </tr>
          {/* Puedes agregar más filas según sea necesario */}
        </tbody>
      </table>

      <p>Requerimientos</p>

      <div className="form">
          <input type="text" required />
          <label class="lbl-nombre">
            <span class="text-nomb">Fecha Requerimiento</span>
          </label>
        </div>

        <div className="form">
          <input type="text" required />
          <label class="lbl-nombre">
            <span class="text-nomb">Funcion</span>
          </label>
        </div>

        <div className="form">
          <input type="text" required />
          <label class="lbl-nombre">
            <span class="text-nomb">Carreas</span>
          </label>
        </div>

        <div className="form">
          <input type="text" required />
          <label class="lbl-nombre">
            <span class="text-nomb">Vacantes</span>
          </label>
        </div>


      <div className="button-container">
        <button className="submit-button">Asignar requerimientos</button>
      </div>


      <p>Lista de analistas generales para enviar correo</p>


      <table className="custom-table">
        <thead>
          <tr>
            <th>Codigo Empleado</th>
            <th>Nombre</th>
            <th>Seleccionar</th>
          </tr>
        </thead>
        <tbody>
          {/* Agrega aquí las filas de datos de la tabla */}
          <tr>
            <td>23424</td>
            <td>PEPE1</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
          <td>34234</td>
            <td>PEPE2</td>
            <td><input type="checkbox" /></td>
          </tr>
          {/* Puedes agregar más filas según sea necesario */}
        </tbody>
      </table>

      <div className="button-container">
        <button className="submit-button">Enviar</button>
      </div>
    </div>
  );
}