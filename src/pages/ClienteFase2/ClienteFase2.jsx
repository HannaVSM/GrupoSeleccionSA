import React, { useState } from 'react';
import './ClienteFase2.css'

export const ClienteFase2 = () => {
  return (
    <div className="login">
    <p>Analista General- nombre</p>

   
    <div className="form">
        <h3>Item Perfil</h3> 
          <div class="content-select">
            <select>
              <option>Fase 2</option>
              <option>Fase 3</option>
              <option>Fase 4</option>
              <option>Fase 5</option>
            </select>
            <i></i>
          </div>
        </div>

    <p>Requerimientos Asignados</p>

    <table className="custom-table">
        <thead>
          <tr>
            <th>Consecutivo Requerimiento</th>
            <th>Seleccionar</th>
          </tr>
        </thead>
        <tbody>
          {/* Agrega aquí las filas de datos de la tabla */}
          <tr>
            <td>34345345</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
          <td>435345345</td>
            <td><input type="checkbox" /></td>
          </tr>
          {/* Puedes agregar más filas según sea necesario */}
        </tbody>
      </table>

      <p>Valores Requerimiento</p>

      <div className="form">
          <input type="text" required />
          <label class="lbl-nombre">
            <span class="text-nomb">Descripcion</span>
          </label>
        </div>

        <div className="form">
        <h3>Disciplina</h3> 
          <div class="content-select">
            <select>
              <option>Computación</option>
              <option>Administración</option>
              <option>Química</option>
              <option>Biología</option>
              <option>Odontología</option>
              <option>Medicina</option>
              <option>Sociología</option>
            </select>
            <i></i>
          </div>
        </div>

        <div className="form">
        <h3>Perfil</h3> 
          <div class="content-select">
            <select>
              <option>Estudios Técnicos</option>
              <option>Estudios Tecnológico</option>
              <option>Estudios Pregrado</option>
              <option>Estudios Postgrados</option>
              <option>Estudios Doctorales</option>
              <option>Estudios No Formales</option>
              <option>Prácticas Empresariales</option>
              <option>Idiomas</option>
              <option>Voluntariado</option>
              <option>Empleado</option>
              <option>Contratista</option>
              <option>Publicación No indexada</option>
              <option>Publicación Indexada</option>
            </select>
            <i></i>
          </div>
        </div>

        <div className="form">
          <input type="text" required />
          <label class="lbl-nombre">
            <span class="text-nomb">Num Vacantes</span>
          </label>
        </div>

      <div className="button-container">
        <button className="submit-button">Asignar requerimientos</button>
      </div>
    </div>
  );
}