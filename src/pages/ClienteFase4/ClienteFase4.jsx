import React, { useState } from 'react';
import './ClienteFase4.css'

export const ClienteFase4 = () => {

    const title = "Requerimiento - Fase";
    const description = "Descripcion";
    
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

    <div className="description-box">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>


      <p>Generar Invitacion</p>

      <div className="form">
          <input type="text" required />
          <label class="lbl-nombre">
            <span class="text-nomb">Invitacion</span>
          </label>
        </div>

      <div className="button-container">
        <button className="submit-button">Enviar</button>
      </div>
    </div>
  );
}