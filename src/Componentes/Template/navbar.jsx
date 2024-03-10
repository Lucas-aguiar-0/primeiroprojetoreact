import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Dropdown.Menu show>
      <Dropdown.Item eventKey="1" as={Link} to="/cadastrar-cliente">Cadastrar Cliente</Dropdown.Item>
      <Dropdown.Item eventKey="2" as={Link} to="/cadastrar-produto">Cadastrar Produto</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4" as={Link} to="/area-do-usuario">Area do Usuario</Dropdown.Item>
    </Dropdown.Menu>
  );
}

export default Navbar;
