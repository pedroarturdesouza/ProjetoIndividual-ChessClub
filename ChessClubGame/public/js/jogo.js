const gameBoard = document.querySelector("#gameboard")
const displayJogador = document.querySelector ("#jogador")
const infoDisplay = document.querySelector("#info-display")
const width = 8

const introduzirPecas = [

    torre, cavalo, bispo, rainha, rei, bispo, cavalo, torre, 
    peao, peao, peao, peao, peao, peao, peao, peao, 
    "", "", "", '', '', '', '', '', 
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
        casa.firstChild?.setAttribute('draggable', true) 
        casa.setAttribute('casa-id', i)

        // casa.classList.add('bege')
        const linha = Math.floor ( (63 - i ) / 8) + 1
        if ( linha % 2 === 0) {
            casa.classList.add(i % 2 === 0 ? "bege" : "marrom")
        } else {
            casa.classList.add(i % 2 === 0 ? "marrom" : "bege")
        }

        if (i <= 15) {

            casa.firstChild.firstChild.classList.add('black')

        }

        if (i >= 48) {

            casa.firstChild.firstChild.classList.add('white')

        }
        gameBoard.append(casa)
    })
}

criarTabuleiro() 

    const todasCasas = document.querySelectorAll("#gameboard .casa");

todasCasas.forEach(casa => {
    casa.addEventListener('dragstart', dragStart)
    casa.addEventListener('dragover', dragOver) 
    casa.addEventListener('drop', dragDrop)   
})

let startPositionId 
let draggedElement

function dragStart (e) {
    startPositionId = e.target.parentNode.getAttribute('casa-id')

    draggedElement = e.target
}

function dragOver() {
    e.preventDefault()
   
}

function dragDrop() {
    
}