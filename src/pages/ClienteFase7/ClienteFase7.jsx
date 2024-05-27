import React, { useState } from 'react';

export const ClienteFase7 = () => {

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


    <p>Candidatos con 40% de resultados positivos </p>
    <table className="custom-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Documento</th>
            <th>Hoja de vida</th>
          </tr>
        </thead>
        <tbody>
          {/* Agrega aquí las filas de datos de la tabla */}
          <tr>
            <td>PEPE</td>
            <td>55925259</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
          <td>PEPE2</td>
            <td>559252259</td>
            <td><input type="checkbox" /></td>
          </tr>
          {/* Puedes agregar más filas según sea necesario */}
        </tbody>
      </table>



    </div>




  )
}