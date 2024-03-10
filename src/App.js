import Cabecalho from "./Componentes/Template/cabecalhopagina";
import CadastroCliente from "./Componentes/Template/cadastrocliente";
import Navbar from "./Componentes/Template/navbar";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <Cabecalho/>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 0.3 }}>
            <Navbar/>
        </div>
        <div style={{ flex: 1 }}>
        <Container>
            <CadastroCliente/>
        </Container>
        </div>
    </div>
</div>

  );
}

export default App;