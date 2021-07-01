let balaoEl = document.querySelector("#balaozinho");
let marcacoes = document.querySelectorAll(".marcacao");

for(let marcacaoEl of marcacoes){
    marcacaoEl.addEventListener("mouseover", (e) => {
        balaoEl.innerHTML = `
            <h2>${e.currentTarget.dataset.titulo}</h2>
            <p>${e.currentTarget.dataset.conteudo}</p>`;
        balaoEl.style.color = e.currentTarget.dataset.cor;
    });

    marcacaoEl.addEventListener("mouseout", () => {balaoEl.innerHTML = ''});

    marcacaoEl.addEventListener("mousemove", (e) => {
        balaoEl.style.left = `${e.pageX}px`;
        balaoEl.style.top = `${e.pageY}px`;    
    });
}