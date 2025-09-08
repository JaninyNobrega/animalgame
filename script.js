const cartas = document.querySelectorAll('.carta');
const perguntaElemento = document.getElementById('pergunta');
const opcoesElemento = document.getElementById('opcoes');
const proximaBotao = document.getElementById('proxima');
const resultadoElemento = document.getElementById('resultado');
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const jogarNovamenteBotao = document.getElementById('jogar-novamente'); 

let pontuacao = 0;
let indicePergunta = 0;

const perguntas = [
    {
        pergunta: 'Qual o felino que vive em grupos sociais chamados de "coalizões" ou "manadas"?',
        opcoes: ['Hiena', 'Elefante', 'Leão', 'Tigre'],
        resposta: 'Leão'
    },
    {
        pergunta: 'Qual animal tem a maior memória?',
        opcoes: ['Leão', 'Tigre', 'Golfinho', 'Elefante'],
        resposta: 'Elefante'
    },
    {
        pergunta: 'Qual animal pode ser ouvido a até 16 km de distância.?',
        opcoes: ['Tigre', 'Lobo', 'Elefante', 'Gorila'],
        resposta: 'Lobo'
    },
    {
        pergunta: 'Qual animal  foi treinado para localizar explosivos sem ativá-los?',
        opcoes: ['Leão', 'Elefante', 'Gorila', 'Suricato'],
        resposta: 'Suricato'
    },
    {
        pergunta: 'Qual animal  compartilha de 98% do DNA dos Humanos?',
        opcoes: ['Lobo', 'Gorila', 'Suricato', 'Hiena'],
        resposta: 'Gorila'
    },
    {
        pergunta: 'Qual animal  tem a mordida capaz de esmagar ossos?',
        opcoes: ['Hiena', 'Gorila', 'Suricato', 'Lobo'],
        resposta: 'Hiena'
    },
    {
        pergunta: 'Qual animal pesa mais de uma tonelada e pode correr a velocidades de até 50 km/h?',
        opcoes: ['Lobo', 'Gorila', 'Rinoceronte', 'Leão'],
        resposta: 'Rinoceronte'
    },
    {
        pergunta: 'Qual felino é excelente nadador e diferente dos demais adora água?',
        opcoes: ['Leão', 'Tigre', 'Suricato', 'Lobo'],
        resposta: 'Tigre'
    },
    
];

function mostrarPergunta() {
    const perguntaAtual = perguntas[indicePergunta];
    perguntaElemento.textContent = perguntaAtual.pergunta;
    perguntaElemento.style.animation = 'slideIn 1s ease-in-out';
    opcoesElemento.innerHTML = '';
    perguntaAtual.opcoes.forEach(opcao => {
        const botao = document.createElement('button');
        botao.textContent = opcao;
        botao.addEventListener('click', () => verificarResposta(opcao));
        opcoesElemento.appendChild(botao);
    });
    perguntaElemento.style.display = 'block'; 
    opcoesElemento.style.display = 'block'; 
    proximaBotao.style.display = 'block'; 
}

function verificarResposta(resposta) {
    if (resposta === perguntas[indicePergunta].resposta) {
        pontuacao++;
        indicePergunta++;
        if (indicePergunta < perguntas.length) {
            mostrarPergunta();
        } else {
            mostrarResultado();
            jogarNovamenteBotao.style.display = 'block';
        }
    } else {
        resultadoElemento.textContent = 'Você errou! Volte ao inicio e leia as cartas novamente';
        perguntaElemento.style.display = 'none';
        opcoesElemento.style.display = 'none';
        proximaBotao.style.display = 'none';
        jogarNovamenteBotao.style.display = 'block';
    }
}

function mostrarResultado() {
    perguntaElemento.style.display = 'none';
    opcoesElemento.style.display = 'none';
    proximaBotao.style.display = 'none';
    resultadoElemento.textContent = `Parabéns, você acertou tudo: ${pontuacao} de ${perguntas.length}`;
    resultadoElemento.style.animation = 'slideIn 1s ease-in-out';
    iniciarFogosArtificio(); 
}

function embaralharPerguntas() {
    for (let i = perguntas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [perguntas[i], perguntas[j]] = [perguntas[j], perguntas[i]];
    }
}

cartas.forEach(carta => {
    carta.addEventListener('click', () => {
        carta.classList.toggle('virada');
    });
});

proximaBotao.addEventListener('click', mostrarPergunta);

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

jogarNovamenteBotao.addEventListener('click', () => {
    indicePergunta = 0;
    pontuacao = 0;
    resultadoElemento.textContent = '';
    jogarNovamenteBotao.style.display = 'none';
    embaralharPerguntas(); 
    mostrarPergunta();
});

function mostrarResultado() {
    perguntaElemento.style.display = 'none';
    opcoesElemento.style.display = 'none';
    proximaBotao.style.display = 'none';
    resultadoElemento.textContent = `Parabéns, você acertou tudo: ${pontuacao} de ${perguntas.length}`;
    resultadoElemento.style.animation = 'slideIn 1s ease-in-out';
    iniciarFogosArtificio(); 
}

function iniciarFogosArtificio() {
    const fogosArtificioElemento = document.getElementById('fogos-artificio');
    for (let i = 0; i < 50; i++) {
        const fogoArtificio = document.createElement('div');
        fogoArtificio.classList.add('fogo-artificio');
        fogoArtificio.style.left = `${Math.random() * 100}vw`;
        fogoArtificio.style.animationDelay = `${Math.random() * 2}s`;
        fogosArtificioElemento.appendChild(fogoArtificio);
    }
}

// Musicas 

const musica1 = document.getElementById('musica1');
const play1 = document.getElementById('play1');
const stop1 = document.getElementById('stop1');

// Reprodução automática da primeira música
musica1.play().catch(error => {
    console.error('Falha na reprodução automática:', error);
});

play1.addEventListener('click', () => {
    musica1.play();
});

stop1.addEventListener('click', () => {
    musica1.pause();
    musica1.currentTime = 0;
});

mostrarPergunta();