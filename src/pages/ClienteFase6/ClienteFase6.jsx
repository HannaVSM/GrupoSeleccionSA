import React, { useState } from 'react';

export const ClienteFase6 = () => {

    const title = "Requerimiento - Fase";
    const description = "Descripcion";


    const [modalVisible, setModalVisible] = useState(false);
    const [currentDescription, setCurrentDescription] = useState('');
  
    const handleViewClick = (description) => {
      setCurrentDescription(description);
      setModalVisible(true);
    };
  
    const closeModal = () => {
      setModalVisible(false);
      setCurrentDescription('');
    };

  return (
    <div className="login">
    <p>Analista Conocimiento - nombre</p>

    <div className="form">
        <h3>Item Perfil</h3> 
          <div class="content-select">
            <select>
              <option>Fase 6</option>
              <option>Fase 7</option>
            </select>
            <i></i>
          </div>
        </div>

        <div className="description-box">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>


    <p>Pruebas por aplicar </p>
    <table className="custom-table">
        <thead>
          <tr>
            <th>Nombre Prueba</th>
            <th>Analista Encargado</th>
            <th>Calificacion</th>
          </tr>
        </thead>
        <tbody>
          {/* Agrega aquí las filas de datos de la tabla */}
          <tr>
            <td>PEPE</td>
            <td>55925259</td>
            <td>55925259</td>
          </tr>
          <tr>
          <td>PEPE2</td>
            <td>559252259</td>
            <td>55925259</td>
          </tr>
          {/* Puedes agregar más filas según sea necesario */}
        </tbody>
      </table>


      <div className="button-container">
        <button className="submit-button">Aplicar Pruebas</button>
      </div>


    </div>




  )
}