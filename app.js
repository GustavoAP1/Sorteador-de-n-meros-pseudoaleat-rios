let quantidade = parseInt(document.getElementById('quantidade').value);
let de = parseInt(document.getElementById('de').value);
let ate = parseInt(document.getElementById('ate').value);

function sortear() {
    let sorteados = [];
    for (let i = 0; i < quantidade; i++) {
        let numero = sorteadorDeNumero(de,ate);
        while (sorteados.includes(numero)){
            numero = sorteadorDeNumero(de,ate);
        }
        sorteados.push(numero);
    }

    document.getElementById('btn-reiniciar').className = 'container__botao';
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
}

function sorteadorDeNumero(min,max){
    return parseInt(Math.random()*(max-min+1)+min);
}

function reiniciar(){
    quantidade.value = '';
    de.value = '';
    ate.value = '';
    document.getElementById('btn-reiniciar').className = 'container__botao-desabilitado';
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
}
