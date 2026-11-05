const encontros = [
    {
        data: "Encontro 1",
        titulo: "Onde Tudo Começou ✨",
        arquivo: "img1.jpeg",
        historia: "Lembro de cada detalhe desse dia! Estar ao seu lado fez o tempo passar voando e meu coração ter certeza de que você é a pessoa mais especial do mundo."
    },
    {
        data: "Encontro 2",
        titulo: "Nosso Passeio Inesquecível 💛",
        arquivo: "img2.jpeg",
        historia: "Mais um dia perfeito com você! As nossas risadas, o seu olhar e a paz que eu sinto quando estamos juntos deixaram esse dia guardado para sempre na minha memória."
    },
    {
        data: "Encontro 3",
        titulo: "Sorrisos e Momentos Fofos 🌸",
        arquivo: "img3.jpeg",
        historia: "Não importa o lugar, qualquer passeio fica mágico quando estou segurando a sua mão. Você estava deslumbrante nesse dia!"
    },
    {
        data: "Encontro 4",
        titulo: "Um Dia Cheio de Amor 💖",
        arquivo: "img4.jpeg",
        historia: "Cada minuto desse encontro foi único. Adoro como a gente se diverte com as coisas mais simples e cria as melhores lembranças juntos."
    },
    {
        data: "Encontro 5",
        titulo: "Nossa Sintonia Única 🐝",
        arquivo: "img5.jpeg",
        historia: "Olhar essa foto me dá um quentinho no coração. Obrigado por ser minha melhor companhia, minha parceira e o grande amor da minha vida."
    },
    {
        data: "Encontro 6",
        titulo: "Alegria do Início ao Fim 🐬",
        arquivo: "img7.jpeg",
        historia: "Mais um capítulo lindo da nossa história! Amo o jeito que você sorri e ilumina tudo ao seu redor."
    },
    {
        data: "Encontro 7",
        titulo: "Momento Especial com Você 🌻",
        arquivo: "img8.jpeg",
        historia: "Guardar esses momentos ao seu lado é a minha parte favorita da vida. Que a gente continue colecionando milhares de dias assim!"
    },
    {
        data: "Encontro 8",
        titulo: "Te Amo Cada Dia Mais ❤️",
        arquivo: "img9.jpeg",
        historia: "Fechando nossa linha do tempo até aqui com a certeza de que ainda vamos viver infinitas aventuras juntos. Feliz aniversário, minha princesa!"
    }
];

const listaTimeline = document.getElementById('listaTimeline');
const paginaPrincipal = document.getElementById('paginaPrincipal');
const paginaDetalhe = document.getElementById('paginaDetalhe');
const btnVoltar = document.getElementById('btnVoltar');
const btnFogos = document.getElementById('btnFogos');
const camadaBichinhos = document.getElementById('camadaBichinhos');

const detalheData = document.getElementById('detalheData');
const detalheTitulo = document.getElementById('detalheTitulo');
const detalheFoto = document.getElementById('detalheFoto');
const detalheHistoria = document.getElementById('detalheHistoria');

function carregarTimeline() {
    if (!listaTimeline) return;
    listaTimeline.innerHTML = '';
    encontros.forEach((item, index) => {
        const cartao = document.createElement('div');
        cartao.className = 'item-timeline';
        cartao.innerHTML = `
            <img src="img/${item.arquivo}" 
                 onerror="this.onerror=null; this.src='../img/${item.arquivo}';" 
                 alt="${item.titulo}" 
                 class="mini-foto">
            <div class="ponto-timeline"></div>
            <span class="data-timeline">${item.data}</span>
            <p class="resumo-timeline">${item.titulo}</p>
        `;
        cartao.addEventListener('click', () => abrirSubpagina(index));
        listaTimeline.appendChild(cartao);
    });
}

function abrirSubpagina(index) {
    const encontro = encontros[index];
    detalheData.innerText = encontro.data;
    detalheTitulo.innerText = encontro.titulo;

    detalheFoto.onerror = function() {
        this.onerror = null;
        this.src = `../img/${encontro.arquivo}`;
    };
    detalheFoto.src = `img/${encontro.arquivo}`;
    detalheHistoria.innerText = encontro.historia;

    paginaPrincipal.classList.remove('ativa');
    paginaDetalhe.classList.add('ativa');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    criarBichinhosAnimados();
    soltarConfetesSuaves();
}

if (btnVoltar) {
    btnVoltar.addEventListener('click', () => {
        paginaDetalhe.classList.remove('ativa');
        paginaPrincipal.classList.add('ativa');
        camadaBichinhos.innerHTML = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function criarBichinhosAnimados() {
    if (!camadaBichinhos) return;
    camadaBichinhos.innerHTML = '';
    const emojis = ['🐬', '🐝', '🐬', '🐝', '🌸', '✨', '🐬', '🐝'];

    for (let i = 0; i < 10; i++) {
        const span = document.createElement('span');
        span.className = 'bichinho-flutuante';
        span.innerText = emojis[i % emojis.length];
        span.style.left = Math.floor(Math.random() * 85 + 5) + 'vw';
        span.style.top = Math.floor(Math.random() * 80 + 10) + 'vh';
        span.style.animationDuration = (Math.random() * 3 + 4) + 's';
        span.style.animationDelay = (Math.random() * 2) + 's';
        camadaBichinhos.appendChild(span);
    }
}

function soltarFogosDeArtificio() {
    if (typeof confetti !== 'function') return;
    const duracao = 2500;
    const fim = Date.now() + duracao;
    const coresFavoritas = ['#ff85a2', '#e01e5a', '#ffca3a', '#fff07c', '#ff4d79'];

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.7 },
            colors: coresFavoritas
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.7 },
            colors: coresFavoritas
        });

        if (Date.now() < fim) {
            requestAnimationFrame(frame);
        }
    })();
}

function soltarConfetesSuaves() {
    if (typeof confetti !== 'function') return;
    confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff85a2', '#ffca3a', '#e01e5a']
    });
}

if (btnFogos) {
    btnFogos.addEventListener('click', soltarFogosDeArtificio);
}

carregarTimeline();
window.addEventListener('load', soltarFogosDeArtificio);
