const botaoMostraPalavras= document.querySelector("#botao-palavrachave");     
botaopMostraPalavras.addEventListener("click",mostra"mostraPalavrasChave);
function mostraPalavasChave(){
const texto= document.querySelector("entrada-de-texto").ariaValueMax;
const campoResultado= document.querySelector(#resultado-palavrachave");
const palavraChave= processa(texto);
campoResultado.textContent= palavrasChave.join(",");
}
function processaTexto(texto){
let palavras = texto.split(/\P{L}+/u);
return palavras;
}

