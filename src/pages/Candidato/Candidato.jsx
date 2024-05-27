import React, { useState } from 'react';
import './Candidato.css'

export const Candidato = () => {


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
    <p>Pagina Candidato</p>

    <table className="custom-table">
        <thead>
          <tr>
            <th>NUM</th>
            <th>Descripción</th>
            <th>Ver</th>
            <th>Seleccionar</th>
          </tr>
        </thead>
        <tbody>
          {/* Agrega aquí las filas de datos de la tabla */}
          <tr>
            <td>1</td>
            <td>Descripción 1</td>
            <td><button onClick={() => handleViewClick('Descripción completa de item 1')}>Ver</button></td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Descripción 2</td>
            <td><button onClick={() => handleViewClick('Descripción completa de item 2')}>Ver</button></td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Descripción 3</td>
            <td><button onClick={() => handleViewClick('Descripción completa de item 3')}>Ver</button></td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Descripción 4</td>
            <td><button onClick={() => handleViewClick('Descripción completa de item 4')}>Ver</button></td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Descripción 5</td>
            <td><button onClick={() => handleViewClick('Descripción completa de item 5')}>Ver</button></td>
            <td><input type="checkbox" /></td>
          </tr>
          {/* Puedes agregar más filas según sea necesario */}
        </tbody>
      </table>
      <div className="button-container">
        <button className="submit-button">Enviar</button>
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