//aplicacao de filtro de imagem
const selectFiltroEl = document.querySelector("#filtro-da-foto");
const imgEl = document.querySelector(".foto-anotada > img");

selectFiltroEl.addEventListener("input", () => {
    imgEl.style.filter = selectFiltroEl.value;
});


//Susbstituicao da imagem
const fileSelectorEl = document.querySelector("#imagem");

fileSelectorEl.addEventListener("change", (e) => {
    const newImg = e.target.files;

    const reader = new FileReader();

    reader.addEventListener("load", (e) => imgEl.src = e.target.result);

    reader.readAsDataURL(newImg[0]);
});