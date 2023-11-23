const gameBoard = document.querySelector("#gameboard")
const displayJogador = document.querySelector ("#jogador")
const infoDisplay = document.querySelector("#info-display")
const width = 8
let playerGo = 'preto'
displayJogador.textContent = 'preto'

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

function dragOver(e) {
  e.preventDefault()
   
}

function dragDrop(e) {
    e.stopPropagation()
    draggedElement.firstChild.classList.contains(playerGo)
    const taken = e.target.classList.contains('peça')

     e.target.parentNode.append(draggedElement) 
     e.target.remove()
     e.target.append(draggedElement)
    mudarJogador()

}

    function mudarJogador() {
        if (playerGo === "preto") {
            playerGo = "branco"
            displayJogador.textContent = 'branco'
        } else {
            playerGo = "preto"
            displayJogador.textContent = 'preto'
        }
    }       

    function inverterIds() {
        const todasCasas = document.querySelectorAll(".casa")
        todasCasas.forEach((casa, i) => casa.setAttribute('casa-id', (width * width - 1) - i))
    }

    function reverterIds() {
        const todasCasas = document.querySelectorAll(".casa")
        todasCasas.forEach((casa, i ) => casa.setAttribute('casa-id', i))
    }