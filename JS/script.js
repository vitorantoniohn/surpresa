const encontros = [
    {
        data: "Jockey",
        titulo: "Super encontro ✨",
        arquivo: "img1.jpeg",
        historia: "Um super dia, com um super papá, com super cavalos e uma super mulher !"
    },
    {
        data: "Academia",
        titulo: "Primeira vez treinando",
        arquivo: "img2.jpeg",
        historia: "Malhamos juntinhos e tiramos boas risadas no treino, um dia inesquecível."
    },
    {
        data: "Anivérsário",
        titulo: "Uma festá incrível 🌸",
        arquivo: "img3.jpeg",
        historia: "Conheci toda sua familia incrivel e pude celebrar o aniversário da sua irmã incrível"
    },
    {
        data: "Praia",
        titulo: "Primeira vez na praia",
        arquivo: "img4.jpeg",
        historia: "Fomos na praia juntos pela primeira vez, fazendo várias coisas legais juntos e passenado pela cidade! "
    },
    {
        data: "Papazinho",
        titulo: "Dando pudim para minha bebê",
        arquivo: "img5.jpeg",
        historia: "Sei o quão você gosta daquele restaurante na rua uruguaiana, então nunca vou esquecer do seu pudim!"
    },
    {
        data: "Rock In Rio",
        titulo: "Festival e fogos",
        arquivo: "img7.jpeg",
        historia: "Apesar dos apesares, foi um dia incrível onde dançamos juntos e cantamos juntos, visitando diversos stands"
    },
    {
        data: "Teatro",
        titulo: "Romeu e Julieta ",
        arquivo: "img8.jpeg",
        historia: "Vimos uma apresentação incrível, em um lugar incrível, ao lado do amor da minha vida! Te amo"
    },
    {
        data: "Roda Gigante",
        titulo: "Roda Gigante ❤️",
        arquivo: "img9.jpeg",
        historia: "Nosso primeiro encontro, onde fizemos várias coisas legais! Nos conhecemos melhor e ficamos agarradinhos o dia todo."
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
