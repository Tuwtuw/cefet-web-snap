const checkBoxOcultarEl = document.querySelector("#visibilidade-das-marcacoes");
let marcacaoes = document.querySelectorAll(".marcacao");
const bodyEl = document.querySelector("body");

//Alterna a ocultacao das marcacoes
checkBoxOcultarEl.addEventListener("change", (e) => {
  bodyEl.classList.toggle("marcacoes-ocultas");
});

const xMarcacaoInput = document.querySelector("#x-da-marcacao");
const yMarcacaoInput = document.querySelector("#y-da-marcacao");
const larguraMarcacaoInput = document.querySelector("#largura-da-marcacao");
const alturaMarcacaoInput = document.querySelector("#altura-da-marcacao");
const tituloMarcacaoInput = document.querySelector("#titulo-da-marcacao");
const conteudoMarcacaoInput = document.querySelector("#conteudo-da-marcacao");
const corMarcacaoInput = document.querySelector("#cor-da-marcacao");

//Reflete os dados da marcacao selecionada nos controles
function atualizaSelecionada(e) {
  marcacoes.forEach((marc) => marc.classList.remove("selecionada"));

  e.currentTarget.classList.add("selecionada");

  xMarcacaoInput.value = parseInt(e.currentTarget.style.left);
  yMarcacaoInput.value = parseInt(e.currentTarget.style.top);
  larguraMarcacaoInput.value = parseInt(e.currentTarget.style.width);
  alturaMarcacaoInput.value = parseInt(e.currentTarget.style.height);
  tituloMarcacaoInput.value = e.currentTarget.dataset.titulo;
  conteudoMarcacaoInput.value = e.currentTarget.dataset.conteudo;
  corMarcacaoInput.value = e.currentTarget.dataset.cor;

  let radioFormat = document.querySelector(`input[value=${e.currentTarget.dataset.formato}]`);
  radioFormat.checked = true;

}

for (let marcacaoEl of marcacoes) {
  marcacaoEl.addEventListener("click", atualizaSelecionada);
}


//Altera a marcacao atraves dos controles
let controles = document.querySelectorAll(".controles input");

function alteraMarcacao(e) {
  let marcacaoSelecionadaEl = document.querySelector(".selecionada");

  marcacaoSelecionadaEl.style.left = `${xMarcacaoInput.value}px`;
  marcacaoSelecionadaEl.style.top = `${yMarcacaoInput.value}px`;
  marcacaoSelecionadaEl.style.width = `${larguraMarcacaoInput.value}px`;
  marcacaoSelecionadaEl.style.height = `${alturaMarcacaoInput.value}px`;
  marcacaoSelecionadaEl.dataset.titulo = tituloMarcacaoInput.value;
  marcacaoSelecionadaEl.dataset.conteudo = conteudoMarcacaoInput.value;
  marcacaoSelecionadaEl.dataset.cor = corMarcacaoInput.value;

  //Obtem o radio button marcado e atualiza o data-formato alem da classe
  let radioFormats = document.querySelectorAll(`input[name="formato-da-marcacao"]`);
  for(let format of radioFormats)
    if(format.checked){
      marcacaoSelecionadaEl.dataset.formato = format.value;
      marcacaoSelecionadaEl.classList.add(format.value);
    }
    else
     marcacaoSelecionadaEl.classList.remove(format.value);


}

for (let controleEl of controles)
  controleEl.addEventListener("input", alteraMarcacao);
