import React, { useState } from 'react';
import './login.css'
import { LoginMessage } from '../../components/loginMessage/loginMessage';
import { loginUser } from '../../services/ApiService';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/ClienteFase1');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(email, code);
            setMessage(`Login successful: ${JSON.stringify(response)}`);
        } catch (error) {
            setMessage('Login failed. Please try again.');
        }
    };
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
                            <div className="form">
                                <input type="text" required />
                                <label class="lbl-nombre">
                                    <span class="text-nomb">CONSECUTIVO DEL CLIENTE</span>
                                </label>
                            </div>
                            <div className="form">
                                <input type="text" required />
                                <label class="lbl-nombre">
                                    <span class="text-nomb">NIT DEL CLIENTE</span>
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
                )}
                {visibleDiv === 'empresa' && (
                    <div className="login">
                        <p>Inicio de sesión</p>
                        <form className='form-login' onSubmit={handleLogin}>
                            <div className="form">
                                <input
                                    type="code"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    required />
                                <label class="lbl-nombre">
                                    <span class="text-nomb">CÓDIGO DEL EMPLEADO</span>
                                </label>
                            </div>
                            <div className="form">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} required />
                                <label class="lbl-nombre">
                                    <span class="text-nomb">CORREO DEL EMPLEADO</span>
                                </label>
                            </div>
                            <div className="btns">
                                <button className='btn-login' type="submit" onClick={handleButtonClick}>Iniciar sesión</button>
                            </div>
                        </form>
                        <a href="/register">¿Aún no tienes cuenta? REGÍSTRATE</a>
                    </div>
                )}
            </div>
        </body></>
    )
}
