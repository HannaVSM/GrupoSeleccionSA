import React, { useState } from 'react';
import './Cliente.css'

export const Cliente = () => {


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
    <p>Pagina Cliente</p>

    <p>Historico de facturas</p>

    <table className="custom-table">
        <thead>
          <tr>
            <th>Num factura</th>
            <th>Num requerimiento</th>
            <th>Cargo</th>
            <th>Fecha</th>
            <th>Seleccionar</th>
          </tr>
        </thead>
        <tbody>
          {/* Agrega aquí las filas de datos de la tabla */}
          <tr>
            <td>125</td>
            <td>55959</td>
            <td>Analista</td>
            <td>Current_DATE</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
          <td>58848</td>
            <td>251</td>
            <td>Analista</td>
            <td>Current_DATE</td>
            <td><input type="checkbox" /></td>
          </tr>
          {/* Puedes agregar más filas según sea necesario */}
        </tbody>
      </table>
      <div className="button-container">
        <button className="submit-button">Ver candidatos</button>
      </div>


      <p>Candidatos seleccionados</p>


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

      <div className="button-container">
        <button className="submit-button">Ver candidatos</button>
      </div>


      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <p>{currentDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
}