function consultEnd() {
  let campo = document.getElementById("input");
  const input = campo.value;
  const logradouro = document.querySelector("tr>#campo1");
  const complemento = document.querySelector("tr>#campo2");
  const bairro = document.querySelector("tr>#campo3");
  const localidade = document.querySelector("tr>#campo4");
  const uf = document.querySelector("tr>#campo5");

  if (input.length !== 8) {
    campo.classList.add('inputVazio')
    campo.setAttribute('placeholder','Campo obrigatório')    
    return;
  }

  const apiUrl = `https://viacep.com.br/ws/${input}/json/`;

  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {      
      logradouro.innerText =    data.logradouro;
      complemento.innerText =   data.complemento;
      bairro.innerText =        data.bairro;
      localidade.innerText =    data.localidade
      uf.innerText =            data.uf      
    });
  });
}

document.getElementById("btn").addEventListener("click", consultEnd);
