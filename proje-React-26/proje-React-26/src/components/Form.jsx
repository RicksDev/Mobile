import "./css/form.css";
import { useState } from "react";

const Form = () => {
  
  //Estado inicial dos dados inseridos
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

    // Verifica se todos os campos estão preenchidos
    const form = event.target;
    const nome = form.nome.value;
    const email = form.email.value;
    const cpf = form.cpf.value;

    //enviar os dados, se os campos forem preenchidos, vai seguir o bloco de if
    if (nome && email && cpf) {
      window.alert('Seus dados foram enviados ao console! De uma olhada ai!!')

     
      const data = {
        nome: nome,
        email: email,
        cpf: cpf,
      };

      console.log("Seus dados: ", data);
      // Aqui posso adicionar a lógica para enviar os dados
    } else {
      window.alert("Por favor, preencha todos os campos corretamente!");
    }
    setFormState(initialForm);
  };

  return (
    <>
      <div className="container-form">
        <div className="form">
          <section id="form">
            <form className="formulario" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome">Nome:</label>
                <input
                  type="text"
                  id="nome"
                  name="nome" 
                  placeholder="  Giovanni ..."
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
                  placeholder="  Giovanni@gmail.com"
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
                  placeholder="  999.999.999-99"
                  value={formState.cpf}
                  onChange={handleInput}
                />
              </div>

              <button className="btn-main">Enviar</button>
            </form>
          </section>
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
