console.log('Testando');


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

    //  Limpar o campo
     nome.value = "";
     idade.value = "";
     telefone.value = "";
    

});




