import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function CadastroCliente() {
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
      <h2>Cadastro de Clientes</h2>

      {/* Dados Pessoais */}
      <Row>
        <Col>
          <Form.Group controlId="nomeCompleto">
            <Form.Label>Nome completo</Form.Label>
            <Form.Control required type="text" placeholder="Digite o nome completo" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o nome completo.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="dataNascimento">
            <Form.Label>Data de nascimento</Form.Label>
            <Form.Control required type="date" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira a data de nascimento.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="sexo">
            <Form.Label>Sexo</Form.Label>
            <Form.Control as="select" required>
              <option value="">Selecione o sexo</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Por favor, selecione o sexo.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="estadoCivil">
            <Form.Label>Estado civil</Form.Label>
            <Form.Control required type="text" placeholder="Digite o estado civil" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o estado civil.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="cpf">
            <Form.Label>CPF</Form.Label>
            <Form.Control required type="text" placeholder="Digite o CPF" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o CPF.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="rg">
            <Form.Label>RG</Form.Label>
            <Form.Control required type="text" placeholder="Digite o RG" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o RG.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="enderecoCompleto">
            <Form.Label>Endereço completo</Form.Label>
            <Form.Control required type="text" placeholder="Digite o endereço completo" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o endereço completo.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="telefone">
            <Form.Label>Telefone(s)</Form.Label>
            <Form.Control required type="text" placeholder="Digite o(s) número(s) de telefone" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o(s) número(s) de telefone.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="email">
            <Form.Label>E-mail</Form.Label>
            <Form.Control required type="email" placeholder="Digite o e-mail" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira um e-mail válido.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      {/* Dados Profissionais */}
      <h3>Dados Profissionais</h3>

      <Row>
        <Col>
          <Form.Group controlId="profissao">
            <Form.Label>Profissão</Form.Label>
            <Form.Control required type="text" placeholder="Digite a profissão" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira a profissão.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="empresa">
            <Form.Label>Empresa</Form.Label>
            <Form.Control required type="text" placeholder="Digite o nome da empresa" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o nome da empresa.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="cargo">
            <Form.Label>Cargo</Form.Label>
            <Form.Control required type="text" placeholder="Digite o cargo" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o cargo.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="renda">
            <Form.Label>Renda</Form.Label>
            <Form.Control required type="number" placeholder="Digite a renda" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira a renda.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
  );
}

export default CadastroCliente;
