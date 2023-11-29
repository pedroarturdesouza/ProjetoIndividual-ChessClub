const gameBoard = document.querySelector("#gameboard")
const displayJogador = document.querySelector("#jogador")
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
    torre, cavalo, bispo, rainha, rei, bispo, cavalo, torre

]

function criarTabuleiro() {

    introduzirPecas.forEach((introduzirPecas, i) => {
        const casa = document.createElement('div')
        casa.classList.add('casa')
        casa.innerHTML = introduzirPecas
        casa.firstChild?.setAttribute('draggable', true)
        casa.setAttribute('casa-id', i)

        // casa.classList.add('bege')
        const linha = Math.floor((63 - i) / 8) + 1
        if (linha % 2 === 0) {
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

function dragStart(e) {
    startPositionId = e.target.parentNode.getAttribute('casa-id')

    draggedElement = e.target
}

function dragOver(e) {
    e.preventDefault()

}

function dragDrop(e) {
    e.stopPropagation()

    const correctGo = draggedElement.firstChild.classList.contains(playerGo)
    const taken = e.target.classList.contains('peça')
    const valid = checkIfValid(e.target)
    const vezOponente = playerGo === 'branco' ? 'preto' : 'branco'
    const takenByOpponent = e.target.firstChild?.classList.contains(vezOponente)

     if (correctGo) {
        // tem que checar isso aqui primeiro
        if (takenByOpponent && valid) {

              e.target.parentNode.append(draggedElement) 
              e.target.remove()
              changePlayer()
              return
        }
        // pra dai então checar isso 
        if (taken && !takenByOpponent) {
            infoDisplay.textContent = "você não pode jogar aí!"
            setTimeout(() => infoDisplay.textContent = "", 2000)
            
            return
        }
        if (valid) {
            e.target.append(draggedElement)
            changePlayer()
            return
        }
        
     }    
    e.target.append(draggedElement)
    changePlayer()

}

function changePlayer() {
    if (playerGo === "preto") {
        inverterIds()
        playerGo = "branco"
        displayJogador.textContent = 'branco'
    } else {
        reverterIds()
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
    todasCasas.forEach((casa, i) => casa.setAttribute('casa-id', i))
}


function checkIfValid(target) {
    const targetId = Number(target.getAttribute('casa-id')) || Number(target.parentNode.getAttribute('casa-id'))
    const startId = Number(startPositionId) 
    const peça = draggedElement.id 
    console.log('targetId', targetId)
    console.log('startId', startId)
    console.log('peça', peça)

    switch(peça) {
        case 'peao' : 
            const starterRow = [8,9,10,12,13,14,15]
            if (
                
                starterRow.includes(startId) && startId + width * 2 === targetId || startId + width === targetId || 
                startId + width === targetId ||
                startId + width - 1 === targetId && document.querySelector(`[casa-id="${startId + width - 1}"]`).firstChild ||
                startId + width + 1 === targetId && document.querySelector(`[casa-id="${startId + width + 1}"]`).firstChild
                 ) {
                return true
            }
    }
}