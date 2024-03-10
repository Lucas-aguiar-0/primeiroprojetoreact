import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroCliente from "./cadastrocliente";
import CadastroProduto from "./cadastroproduto";
import Navbar from "./navbar";
import Cabecalho from "./cabecalhopagina";
import Footer from "./rodape";
import { Container } from 'react-bootstrap';

function Paginas() {
  return (
    <div className="App">
      <Cabecalho/>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 0.3 }}>
          <Navbar/>
        </div>
        <div style={{ flex: 1 }}>
          <Container>
            <Routes>
              <Route path="/cadastrar-cliente" element={<CadastroCliente/>}/>
              <Route path="/cadastrar-produto" element={<CadastroProduto/>}/>
            </Routes>
          </Container>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer/>
    </div>
  );
}

export default Paginas;
