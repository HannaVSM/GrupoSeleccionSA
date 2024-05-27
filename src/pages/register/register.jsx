import React from 'react'

export const Register = () => {
  return (
    <div className="login">
      <p>Inicio de sesión</p>
      <form className='form-login'>
        <div className="form">
          <input type="text" required />
          <label class="lbl-nombre">
            <span class="text-nomb">USUARIO</span>
          </label>
        </div>
        <div className="form">
          <input type="text" required />
          <label class="lbl-nombre">
            <span class="text-nomb">DOCUMENTO DEL CANDIDATO</span>
          </label>
        </div>
        <div className="btns">
          <button className='btn-login'>Iniciar sesión</button>
        </div>
      </form>
      <a href="">¿Aún no tienes cuenta? REGÍSTRATE</a>
    </div>
  )
}
