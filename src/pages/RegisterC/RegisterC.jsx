import React from 'react'
import './RegisterC.css'

export const RegisterC = () => {
  return (
    <div className="login">
      <p>Registro Candidato</p>
      <form className='w-1/2 grid grid-cols-2 gap-20 justify-center items-center'>
      <div className="form">
          <input type="text" required />
          <label class="lbl-nombre">
            <span class="text-nomb">USUARIO</span>
          </label>
        </div>
        <div className="form">
          <input type="text" required />
          <label class="lbl-nombre">
            <span class="text-nomb">NOMBRE</span>
          </label>
        </div>
        <div className="form">
          <input type="text" required />
          <label class="lbl-nombre">
            <span class="text-nomb">APELLIDO</span>
          </label>
        </div>
        <div className="form">
          <input type="date" required />
          <label class="lbl-nombre">
            <span class="text-nomb">FECHA DE NACIMIENTO</span>
          </label>
        </div>

        <div className="form">
          <input type="text" required />
          <label class="lbl-nombre">
            <span class="text-nomb">DOCUMENTO</span>
          </label>
        </div>

        <div className="form">
          <input type="text" required />
          <label class="lbl-nombre">
            <span class="text-nomb">INSTITUCION</span>
          </label>
        </div>


        <div className="form">
        <h3>Item Perfil</h3> 
          <div class="content-select">
            <select>
              <option>Directivo Superior</option>
              <option>Estudios Pregrado</option>
              <option>Estudios Postgrados</option>
              <option>Idiomas</option>
              <option>Empleado</option>
              <option>Contratista</option>
              <option>Profesional Senior</option>
              <option>Estudios Pregrado</option>
              <option>Estudios Postgrados</option>
              <option>Idiomas</option>
              <option>Empleado</option>
              <option>Contratista</option>
              <option>Estudios No Formales</option>

            </select>
            <i></i>
          </div>
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


        <div className="btns">
          <button className='btn-login'>Registrar</button>
        </div>
      </form>
    </div>
  )
}
