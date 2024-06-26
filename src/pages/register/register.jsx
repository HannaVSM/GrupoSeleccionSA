import React from 'react'
import './register.css'

export const Register = () => {
  return (
    <div className="login">
      <p>Registro empleado</p>
      <form className='w-1/2 grid grid-cols-2 gap-20 justify-center items-center'>
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
        <h3>Cargo</h3> 
          <div class="content-select">
            <select>
              <option>Analista Cliente</option>
              <option>Analista General</option>
              <option>Analista Sicologico</option>
              <option>Analista Conocimiento</option>
              <option>Analista Tecnologico</option>

            </select>
            <i></i>
          </div>
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
            <span class="text-nomb">CÓDIGO</span>
          </label>
        </div>
        <div className="form">
          <input type="email" required />
          <label class="lbl-nombre">
            <span class="text-nomb">CORREO</span>
          </label>
        </div>
        <div className="btns">
          <button className='btn-login'>Iniciar sesión</button>
        </div>
      </form>
    </div>
  )
}
