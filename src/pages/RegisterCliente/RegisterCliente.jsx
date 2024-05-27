import React from 'react'
import './RegisterCliente.css'

export const RegisterCli = () => {
  return (
    <div className="login">
      <p>Registro Cliente</p>
      <form className='w-1/2 grid grid-cols-2 gap-20 justify-center items-center'>
      <div className="form">
          <input type="text" required />
          <label class="lbl-nombre">
            <span class="text-nomb">Consecutivo</span>
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
            <span class="text-nomb">NIT de la empresa</span>
          </label>
        </div>

        <div className="btns">
          <button className='btn-login'>Registrar Cliente</button>
        </div>
      


        <div className="form">
          <input type="text" required />
          <label class="lbl-nombre">
            <span class="text-nomb">NIT</span>
          </label>
        </div>

        <div className="form">
          <input type="text" required />
          <label class="lbl-nombre">
            <span class="text-nomb">Razon social</span>
          </label>
        </div>

        <div className="form">
          <input type="text" required />
          <label class="lbl-nombre">
            <span class="text-nomb">URL</span>
          </label>
        </div>


        <div className="btns">
          <button className='btn-login'>Registrar Empresa</button>
        </div>
      </form>
    </div>
  )
}
