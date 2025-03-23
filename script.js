const cartas = document.querySelectorAll('.carta');
const perguntaElemento = document.getElementById('pergunta');
const opcoesElemento = document.getElementById('opcoes');
const proximaBotao = document.getElementById('proxima');
const resultadoElemento = document.getElementById('resultado');
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

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
        opcoes: ['Tigre', 'Elefante', 'Lobo', 'Gorila'],
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
        opcoes: ['Lobo', 'Leão', 'Suricato', 'Tigre'],
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
}

function verificarResposta(resposta) {
    if (resposta === perguntas[indicePergunta].resposta) {
        pontuacao++;
        indicePergunta++;
        if (indicePergunta < perguntas.length) {
            mostrarPergunta();
        } else {
            mostrarResultado();
        }
    } else {
        resultadoElemento.textContent = 'Você errou! Leia as cartas novamente'; // Mensagem de erro
        perguntaElemento.style.display = 'none'; // Esconde a pergunta
        opcoesElemento.style.display = 'none'; // Esconde as opções
        proximaBotao.style.display = 'none'; // Esconde o botão "Próxima"
    }
}

function mostrarResultado() {
    perguntaElemento.style.display = 'none';
    opcoesElemento.style.display = 'none';
    proximaBotao.style.display = 'none';
    resultadoElemento.textContent = `Parabéns, você acertou tudo: ${pontuacao} de ${perguntas.length}`;
    resultadoElemento.style.animation = 'slideIn 1s ease-in-out'; 
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

mostrarPergunta();

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
