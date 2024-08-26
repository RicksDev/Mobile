import "./css/form.css";
import { useState } from "react";

const Form = () => {
    

  const initialForm = {
    nome: "",
    email: "",
    cpf: "",
  };

  const [formState, setFormState] = useState(initialForm);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const nome = form.name.value;
    const email = form.email.value;
    const cpf = form.cpf.value;

    const data = { name: nome, email: email, cpf: cpf}
    
    console.log('Dados:', data);

    // console.log(formState.nome);
    // console.log(formState.email);
    // console.log(formState.cpf);

    // Para limpar o campo após a inserção dos dados
    setFormState(initialForm);
  };

  return (
    <>
      <div className="container-form">
        <div className="form">
          <form className="formulario" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                name="name" // Atualizado para corresponder à chave no estado
                placeholder="  Nome:"
                value={formState.nome}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="  E-mail"
                value={formState.email}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cpf">CPF:</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="  CPF"
                value={formState.cpf}
                onChange={handleInput}
              />
            </div>

            <button className="btn-main">Enviar</button>
          </form>
        </div>

        <div className="txt-main">
          <p>
            Envie seus dados para nossa equipe, entraremos em contato em breve
            com mais informações!
          </p>
        </div>
      </div>
    </>
  );
};

export default Form;
