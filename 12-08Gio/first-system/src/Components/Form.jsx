import { useState } from "react";

const Form = () => {

    //Estado inicial do formulário
    const initilForm = {
        nome: "",
    }

    //Estado do formulário
    //Hocks, ajuda a personalizar os componentes e etc.
    //Esses parametros dentro do [] seria basicamente Get e Set, respectivamente
    const [formState, setFormState] = useState(initilForm);

    //Função para lidar com a alteração dos campos de entrada
    const handleInput = (event) => {
        event.preventDefault();
        //Obter o valor e o nome do campo de entrada
        const target = event.currentTarget;
        //Extrair o valor e o nome do campo de entrada
        const {value, name} = target;

        //Atualizar o estado do formulário com os novos valores
        setFormState({ ...formState , [name]: value});
        //os ... serve para espalhar todas as informações q está vindo do formState
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formState.nome);

        //Para limpar o campo após a inserção do nome
        setFormState({ ...initilForm});
    }

  return (
    <>
      <div className="containerForm">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="nome">Nome:</label>
              <input type="text" name="nome" id="nome" value={formState.nome} onChange={handleInput}/>
            </div>
            <div className="form-control">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
