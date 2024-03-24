import { Navbar } from 'react-bootstrap';
import { useContext } from 'react';
import ContextoUsuario from './Contexto/contexto';


export default function Cabecalho(props){
    const [usuario,setUsuario] = useContext(ContextoUsuario)
    return(
        <Navbar bg="light" className="justify-content-center">
        <Navbar.Brand style={{ fontFamily: 'Arial'}}><h1>Sistema de Cadastro</h1></Navbar.Brand><div>
        <h1><span style={{ fontFamily: 'Arial', fontSize: '15px', border:'solid 1px' }}> Usuario: {usuario.nome} </span></h1></div>
    </Navbar>
    );
}