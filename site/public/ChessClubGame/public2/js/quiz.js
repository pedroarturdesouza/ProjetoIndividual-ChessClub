
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let imgQuestao = document.querySelector('.imagemDaQuestao img')  // ADICIONE
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    imagem       : '0.png',  // ADICIONE
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    imagem       : '1.jpg',  // ADICIONE
    pergunta     : "Em que país surgiu o xadrez?",
    alternativaA : "Brasil",
    alternativaB : "Rússia",
    alternativaC : "India",
    alternativaD : "China",
    correta      : "India",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual é a peça mais poderosa no xadrez?",
    alternativaA : "Cavalo",
    alternativaB : "Torre",
    alternativaC : "Rainha",
    alternativaD : "Bispo",
    correta      : "Rainha",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Qual é a única peça que pode pular outras peças no tabuleiro?",
    alternativaA : "Peão",
    alternativaB : "Cavalo",
    alternativaC : "Bispo",
    alternativaD : "Rainha",
    correta      : "Cavalo",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "O que significa 'xeque-mate' em uma partida de xadrez?",
    alternativaA : "O rei está em perigo",
    alternativaB : "É um empate",
    alternativaC : "O jogo terminou",
    alternativaD : "Um movimento ilegal foi feito",
    correta      : "O jogo terminou",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Quem começa a partida sempre no xadrez?",
    alternativaA : "Brancas",
    alternativaB : "Pretas",
    alternativaC : "Pode variar",
    alternativaD : "Quem ganha o último jogo",
    correta      : "Brancas",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual peça se move em L no tabuleiro",
    alternativaA : "Rainha",
    alternativaB : "Bispo",
    alternativaC : "Rei",
    alternativaD : "Cavalo",
    correta      : "Cavalo",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "O que é o roque no xadrez?",
    alternativaA : "Uma estratégia de ataque",
    alternativaB : "Um movimento especial do peão",
    alternativaC : "Um movimento especial do rei e da torre",
    alternativaD : "Um empate automático",
    correta      : "Um movimento especial do rei e da torre",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Qual é a única peça que não pode se mover diagonalmente?",
    alternativaA : "Bispo",
    alternativaB : "Cavalo",
    alternativaC : "Torre",
    alternativaD : "Rainha",
    correta      : "Torre",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Como é chamado o movimento em que um peão se transforma em outra peça ao alcançar a oitava fileira?",
    alternativaA : "Promoção",
    alternativaB : "Transformação",
    alternativaC : "Metamorfose",
    alternativaD : "Evolução",
    correta      : "Promoção",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "O que significa 'en passant' no xadrez?",
    alternativaA : "Um movimento especial do rei",
    alternativaB : "Capturar um peão que avançou duas casas",
    alternativaC : "Trocar peças no meio do tabuleiro",
    alternativaD : "Colocar o rei em posição de defesa",
    correta      : "Capturar um peão que avançou duas casas",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
imgQuestao.setAttribute('src', 'images/'+q1.imagem)  // ADICIONE
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    imgQuestao.setAttribute('src', 'images/'+questoes[nQuestao].imagem) // ADICIONE
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    fetch ("/usuarios/pegar", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  // crie um atributo que recebe o valor recuperado aqui
                  // Agora vá para o arquivo routes/usuario.js
                 
                  pontosServer: pontos
                }),
            }).then(res => {
                console.log(res);
            });

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    // setTimeout(function() {
    //     pontos = 0 // zerar placar
    //     //location.reload();
    //     instrucoes.classList.remove('placar')
    //     // REINICIAR O JOGO
    //     articleQuestoes.style.display = 'block'
    //     proximaQuestao(1)
    //     instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    // }, 8000)

}
