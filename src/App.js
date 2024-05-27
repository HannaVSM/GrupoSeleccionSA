import './App.css';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { RegisterC } from './pages/RegisterC/RegisterC';
import { RegisterCli } from './pages/RegisterCliente/RegisterCliente';
import { Candidato } from './pages/Candidato/Candidato';
import { Cliente } from './pages/Cliente/Cliente';
import { ClienteFase1 } from './pages/ClienteFase1/ClienteFase1';
import { ClienteFase2 } from './pages/ClienteFase2/ClienteFase2';
import { ClienteFase3 } from './pages/ClienteFase3/ClienteFase3';



function App() {
  return (
    <div>
      <ClienteFase3 />
    </div>
  );
}

export default App;
