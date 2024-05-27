import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { RegisterC } from './pages/RegisterC/RegisterC';
import { RegisterCli } from './pages/RegisterCliente/RegisterCliente';
import { Candidato } from './pages/Candidato/Candidato';
import { Cliente } from './pages/Cliente/Cliente';
import { ClienteFase1 } from './pages/ClienteFase1/ClienteFase1';
import { ClienteFase2 } from './pages/ClienteFase2/ClienteFase2';
import { ClienteFase3 } from './pages/ClienteFase3/ClienteFase3';
import { ClienteFase4 } from './pages/ClienteFase4/ClienteFase4';
import { ClienteFase5 } from './pages/ClienteFase5/ClienteFase5';
import { ClienteFase6 } from './pages/ClienteFase6/ClienteFase6';
import { ClienteFase7 } from './pages/ClienteFase7/ClienteFase7';



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="register-c" element={<RegisterC />} />
        <Route path="register-cli" element={<RegisterCli />} />
        <Route path="Candidato" element={<Candidato />} />
        <Route path="Cliente" element={<Cliente />} />
        <Route path="ClienteFase1" element={<ClienteFase1 />} />
        <Route path="ClienteFase2" element={<ClienteFase2 />} />
        <Route path="ClienteFase3" element={<ClienteFase3 />} />
        <Route path="ClienteFase4" element={<ClienteFase4 />} />
        <Route path="ClienteFase5" element={<ClienteFase5 />} />
        <Route path="ClienteFase6" element={<ClienteFase6 />} />
        <Route path="ClienteFase7" element={<ClienteFase7 />} />



      </Routes>
    </div>
  );
}

export default App;
