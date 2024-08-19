console.log('Testando');

//Estou com problema para criar o botão de excuir em uma só linha.

const button = document.querySelector('.form-button');
const nome = document.querySelector("#nome");
const button1 = document.querySelector("button");

const idade = document.querySelector("#idade");
const telefone = document.querySelector("#telefone");

button.addEventListener("click", (e) => {
    e.preventDefault();
    const inputName = nome.value;

    const inputIdade = idade.value;
    const inputTelefone = telefone.value;

    console.log(`Parabéns, você ${inputName} está cadastrado!`);
    const templateHTML = `<li>${inputName}, tem ${inputIdade} anos e seu número é: ${inputTelefone} </li>`;
    
    const lista = document.querySelector(".lista");
    
    // Condição
    if(inputName === "" || inputIdade === "" || inputTelefone ===""){
        alert('Por favor, preencha todos os campos!!');
        return false;
    }
   

    // Incluindo itens no HTML
    // O + vai incrementando os valores
     lista.innerHTML += templateHTML;

     const li = document.createElement("li");
    li.textContent = `${inputName} / ${inputIdade} / ${inputTelefone}`;

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.style.marginLeft = "100px"; 
    deleteButton.classList.add("botao");

    
    deleteButton.addEventListener("click", () => {
        lista.removeChild(li);
    });

    
    li.appendChild(deleteButton);

    
    lista.appendChild(li);



    //  Limpar o campo
     nome.value = "";
     idade.value = "";
     telefone.value = "";
    

});




