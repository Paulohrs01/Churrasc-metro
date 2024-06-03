let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value
    
    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)) / 2 * criancas;
   
    resultado.innerHTML =  `<p>${qtdTotalCarne / 1000}kg de Carne</p>`
    resultado.innerHTML +=  `<p>${qtdTotalCerveja / 269} latinhas de cerveja 269ml</p>`
    resultado.innerHTML +=  `<p>${qtdTotalBebidas}ml de Refri</p>`

    moverImagens()
}

function carnePP(duracao) {
    if (duracao >= 5) {
        return 500;
    } else  {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 5) {
        return 4573;
    } else  {
        return 2690;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 5) {
        return 400;
    } else  {
        return 400;
    }
}
// Mover as imagens ao clicar no botão
function moverImagens() {
    
    let churrasqueira = document.querySelector('.churrasqueira');
    let bebidas = document.querySelector('.bebidas');
    
    if (window.matchMedia('(max-width: 425px)').matches) {
        churrasqueira.style.top = '-125px';
        bebidas.style.top = '-10px';
    } else {
        churrasqueira.style.top = '-158px';
        bebidas.style.top = '6px';
    }
}
