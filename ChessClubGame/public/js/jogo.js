const gameBoard = document.querySelector("#gameboard")
const displayJogador = document.querySelector ("#jogador")
const infoDisplay = document.querySelector("#info-display")
const width = 8

const introduzirPecas = [

    torre, cavalo, bispo, rainha, rei, bispo, cavalo, torre, 
    peao, peao, peao, peao, peao, peao, peao, peao, 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    peao, peao, peao, peao, peao, peao, peao, peao, 
    torre, cavalo, bispo, rainha, rei, bispo, cavalo, torre, 

]

function criarTabuleiro() {

    introduzirPecas.forEach((introduzirPecas, i) => {
        const casa = document.createElement('div')
        casa.classList.add('casa')
        casa.innerHTML = introduzirPecas
        casa.setAttribute('square-id', i)
        casa.classList.add('bege')
        gameBoard.append(casa)
    })
}

criarTabuleiro()

