import React, { useState } from 'react';
import './ClienteFase3.css'

export const ClienteFase3 = () => {
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

    <p>Requerimientos</p>


      <p>Generar convocatoria</p>

      <div className="form">
          <input type="text" required />
          <label class="lbl-nombre">
            <span class="text-nomb">Convocatoria</span>
          </label>
        </div>

      <div className="button-container">
        <button className="submit-button">Grabar</button>
      </div>
    </div>
  );
}