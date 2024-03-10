import Dropdown from 'react-bootstrap/Dropdown';

function Navbar() {
  return (
    <Dropdown.Menu show>
      <Dropdown.Item eventKey="1">Cadastrar Cliente</Dropdown.Item>
      <Dropdown.Item eventKey="2">Cadastrar Produto</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Area do Usuario</Dropdown.Item>
    </Dropdown.Menu>
  );
}

export default Navbar;