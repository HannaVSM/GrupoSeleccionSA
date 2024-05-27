import React, { useState } from 'react';
import './login.css'
import { LoginMessage } from '../../components/loginMessage/loginMessage';


export const Login = () => {
    const [visibleDiv, setVisibleDiv] = useState(null);

    const handleClick = (divId) => {
        setVisibleDiv(divId);
    };
    return (
        <><body className='b-login'>
            <div className='l-message'>
                <LoginMessage />
            </div>
            <div className={`rol ${visibleDiv ? 'hidden' : ''}`}>
                <p>Selecciona tu rol</p>
                <div className="btns">
                    <button onClick={() => handleClick('cliente')}>CLIENTE</button>
                    <button onClick={() => handleClick('candidato')}>CANDIDATO</button>
                    <button onClick={() => handleClick('empresa')}>EMPRESA</button>
                </div>
            </div>
            <div className={`info-container ${visibleDiv ? 'visible' : ''}`}>
                {visibleDiv === 'cliente' && (
                    <div className="login">
                        <p>Inicio de sesión</p>
                        <form className='form-login'>
                            <div className="form-l">
                                <input type="text" required />
                                <label class="lbl-nombre">
                                    <span class="text-nomb-l">CONSEC. DEL CLIENTE</span>
                                </label>
                            </div>
                            <div className="form-l">
                                <input type="text" required />
                                <label class="lbl-nombre">
                                    <span class="text-nomb-l">NIT DEL CLIENTE</span>
                                </label>
                            </div>
                            <div className="btns">
                                <button className='btn-login'>Iniciar sesión</button>
                            </div>
                        </form>
                        <a href="">¿Aún no tienes cuenta? REGÍSTRATE</a>
                    </div>
                )}
                {visibleDiv === 'candidato' && (
                    <div className="login">
                        <p>Inicio de sesión</p>
                        <form className='form-login'>
                            <div className="form-l">
                                <input type="text" required />
                                <label class="lbl-nombre">
                                    <span class="text-nomb-l">USUARIO</span>
                                </label>
                            </div>
                            <div className="form-l">
                                <input type="text" required />
                                <label class="lbl-nombre">
                                    <span class="text-nomb-l">DOCUMENTO DEL CANDIDATO</span>
                                </label>
                            </div>
                            <div className="btns">
                                <button className='btn-login'>Iniciar sesión</button>
                            </div>
                        </form>
                        <a href="">¿Aún no tienes cuenta? REGÍSTRATE</a>
                    </div>
                )}
                {visibleDiv === 'empresa' && (
                    <div className="login">
                        <p>Inicio de sesión</p>
                        <form className='form-login'>
                            <div className="form-l">
                                <input type="text" required />
                                <label class="lbl-nombre">
                                    <span class="text-nomb-l">CÓDIGO DEL EMPLEADO</span>
                                </label>
                            </div>
                            <div className="form-l">
                                <input type="text" required />
                                <label class="lbl-nombre">
                                    <span class="text-nomb-l">CORREO DEL EMPLEADO</span>
                                </label>
                            </div>
                            <div className="btns">
                                <button className='btn-login'>Iniciar sesión</button>
                            </div>
                        </form>
                        <a href="">¿Aún no tienes cuenta? REGÍSTRATE</a>
                    </div>
                )}
            </div>
        </body></>
    )
}
