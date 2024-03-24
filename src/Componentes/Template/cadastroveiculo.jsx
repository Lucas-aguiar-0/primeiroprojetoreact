import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function CadastroVeiculo(props) {
  
  const [veiculo, setVeiculo] = useState(props.modoEdicao ? props.veiculoEscolhido:{
    codigo: 0,
    placa: "",
    modelo: "",
    cor: "",
    renavam: "",
    chassi: "",
    anofabricacao: 0,
    tipocombustivel: ""
});

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h2>Cadastro de Veículo</h2>

      {/* Dados do Veículo */}
      <Row>
        <Col>
          <Form.Group controlId="placa">
            <Form.Label>Placa</Form.Label>
            <Form.Control required type="text" placeholder="Digite a placa do veículo" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira a placa do veículo.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="modelo">
            <Form.Label>Modelo</Form.Label>
            <Form.Control required type="text" placeholder="Digite o modelo do veículo" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o modelo do veículo.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="marca">
            <Form.Label>Marca</Form.Label>
            <Form.Control required type="text" placeholder="Digite a marca do veículo" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira a marca do veículo.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="anoFabricacao">
            <Form.Label>Ano de Fabricação</Form.Label>
            <Form.Control required type="number" placeholder="Digite o ano de fabricação do veículo" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o ano de fabricação do veículo.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="cor">
            <Form.Label>Cor</Form.Label>
            <Form.Control required type="text" placeholder="Digite a cor do veículo" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira a cor do veículo.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="chassi">
            <Form.Label>Chassi</Form.Label>
            <Form.Control required type="text" placeholder="Digite o chassi do veículo" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o chassi do veículo.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="renavam">
            <Form.Label>Renavam</Form.Label>
            <Form.Control required type="text" placeholder="Digite o Renavam do veículo" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o Renavam do veículo.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="tipoCombustivel">
            <Form.Label>Tipo de Combustível</Form.Label>
            <Form.Control as="select" required>
              <option value="">Selecione o tipo de combustível</option>
              <option value="gasolina">Gasolina</option>
              <option value="alcool">Álcool</option>
              <option value="diesel">Diesel</option>
              {/* Adicione mais opções conforme necessário */}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Por favor, selecione o tipo de combustível do veículo.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Button variant="primary" className='mb-2 mt-2' type="submit">
        Cadastrar
      </Button>
      <Button variant="warning" onClick = {props.ChamarTabelaVeiculo} className='mb-2 mt-2' type="submit">
        Voltar
      </Button>
    </Form>
  );
}

export default CadastroVeiculo;
