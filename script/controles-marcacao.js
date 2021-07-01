let checkBoxOcultarEl = document.querySelector("#visibilidade-das-marcacoes");
let marcacaoes = document.querySelectorAll(".marcacao");
let bodyEl = document.querySelector("body");


checkBoxOcultarEl.addEventListener("change", (e) => {
   bodyEl.classList.toggle("marcacoes-ocultas");
});



let xMarcacaoInput = document.querySelector("#x-da-marcacao");
let yMarcacaoInput = document.querySelector("#y-da-marcacao");
let larguraMarcacaoInput = document.querySelector("#largura-da-marcacao");
let alturaMarcacaoInput = document.querySelector("#altura-da-marcacao");
let tituloMarcacaoInput = document.querySelector("#titulo-da-marcacao");
let conteudoMarcacaoInput = document.querySelector("#conteudo-da-marcacao");
let corMarcacaoInput = document.querySelector("#cor-da-marcacao");


function atualizaSelecionada(e){
    marcacoes.forEach((marc) => {marc.classList.remove("selecionada");});

    e.currentTarget.classList.add("selecionada");

    xMarcacaoInput.value = parseInt(e.currentTarget.style.left);
    yMarcacaoInput.value = parseInt(e.currentTarget.style.top);
    larguraMarcacaoInput.value = parseInt(e.currentTarget.style.width);
    alturaMarcacaoInput.value = parseInt(e.currentTarget.style.height);
    tituloMarcacaoInput.value = e.currentTarget.dataset.titulo;
    conteudoMarcacaoInput.value = e.currentTarget.dataset.conteudo;
    corMarcacaoInput.value =  e.currentTarget.dataset.cor;
}

for(let marcacaoEl of marcacoes){
    marcacaoEl.addEventListener("click", atualizaSelecionada);
}