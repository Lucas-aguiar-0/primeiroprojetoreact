import { Navbar } from 'react-bootstrap';
export default function Cabecalho(){
    return(
        <Navbar bg="light" className="justify-content-center">
        <Navbar.Brand style={{ fontFamily: 'Arial' }}><h1>Sistema de Cadastro</h1></Navbar.Brand>
    </Navbar>
    );
}