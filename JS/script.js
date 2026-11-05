// =========================================================================
// EDITE AQUI AS DATAS, TÍTULOS E HISTÓRIAS DOS 8 DIAS QUE VOCÊS SAÍRAM
// =========================================================================
const encontros = [
    {
        data: "Encontro 1",
        titulo: "Onde Tudo Começou ✨",
        foto: "img/img1.jpeg",
        historia: "Lembro de cada detalhe desse dia! Estar ao seu lado fez o tempo passar voando e meu coração ter certeza de que você é a pessoa mais especial do mundo."
    },
    {
        data: "Encontro 2",
        titulo: "Nosso Passeio Inesquecível 💛",
        foto: "img/img2.jpeg",
        historia: "Mais um dia perfeito com você! As nossas risadas, o seu olhar e a paz que eu sinto quando estamos juntos deixaram esse dia guardado para sempre na minha memória."
    },
    {
        data: "Encontro 3",
        titulo: "Sorrisos e Momentos Fofos 🌸",
        foto: "img/img3.jpeg",
        historia: "Não importa o lugar, qualquer passeio fica mágico quando estou segurando a sua mão. Você estava deslumbrante nesse dia!"
    },
    {
        data: "Encontro 4",
        titulo: "Um Dia Cheio de Amor 💖",
        foto: "img/img4.jpeg",
        historia: "Cada minuto desse encontro foi único. Adoro como a gente se diverte com as coisas mais simples e cria as melhores lembranças juntos."
    },
    {
        data: "Encontro 5",
        titulo: "Nossa Sintonia Única 🐝",
        foto: "img/img5.jpeg",
        historia: "Olhar essa foto me dá um quentinho no coração. Obrigado por ser minha melhor companhia, minha parceira e o grande amor da minha vida."
    },
    {
        data: "Encontro 6",
        titulo: "Alegria do Início ao Fim 🐬",
        foto: "img/img7.jpeg",
        historia: "Mais um capítulo lindo da nossa história! Amo o jeito que você sorri e ilumina tudo ao seu redor."
    },
    {
        data: "Encontro 7",
        titulo: "Momento Especial com Você 🌻",
        foto: "img/img8.jpeg",
        historia: "Guardar esses momentos ao seu lado é a minha parte favorita da vida. Que a gente continue colecionando milhares de dias assim!"
    },
    {
        data: "Encontro 8",
        titulo: "Te Amo Cada Dia Mais ❤️",
        foto: "img/img9.jpeg",
        historia: "Fechando nossa linha do tempo até aqui com a certeza de que ainda vamos viver infinitas aventuras juntos. Feliz aniversário, minha princesa!"
    }
];

// Referências dos elementos da tela
const listaTimeline = document.getElementById('listaTimeline');
const paginaPrincipal = document.getElementById('paginaPrincipal');
const paginaDetalhe = document.getElementById('paginaDetalhe');
const btnVoltar = document.getElementById('btnVoltar');
const btnFogos = document.getElementById('btnFogos');
const camadaBichinhos = document.getElementById('camadaBichinhos');

// Elementos da Subpágina
const detalheData = document.getElementById('detalheData');
const detalheTitulo = document.getElementById('detalheTitulo');
const detalheFoto = document.getElementById('detalheFoto');
const detalheHistoria = document.getElementById('detalheHistoria');

// 1. Cria os cartões na Linha do Tempo Horizontal
function carregarTimeline() {
    listaTimeline.innerHTML = '';
    encontros.forEach((item, index) => {
        const cartao = document.createElement('div');
        cartao.className = 'item-timeline';
        cartao.innerHTML = `
            <img src="${item.foto}" alt="${item.titulo}" class="mini-foto">
            <div class="ponto-timeline"></div>
            <span class="data-timeline">${item.data}</span>
            <p class="resumo-timeline">${item.titulo}</p>
        `;
        cartao.addEventListener('click', () => abrirSubpagina(index));
        listaTimeline.appendChild(cartao);
    });
}

// 2. Abre a subpágina com os detalhes do encontro e ativa golfinhos e abelhas
function abrirSubpagina(index) {
    const encontro = encontros[index];
    detalheData.innerText = encontro.data;
    detalheTitulo.innerText = encontro.titulo;
    detalheFoto.src = encontro.foto;
    detalheHistoria.innerText = encontro.historia;

    paginaPrincipal.classList.remove('ativa');
    paginaDetalhe.classList.add('ativa');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    criarBichinhosAnimados();
    soltarConfetesSuaves();
}

// 3. Volta para a página principal
btnVoltar.addEventListener('click', () => {
    paginaDetalhe.classList.remove('ativa');
    paginaPrincipal.classList.add('ativa');
    camadaBichinhos.innerHTML = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 4. Cria animação de Golfinhos 🐬 e Abelhas 🐝 espalhados pela subpágina
function criarBichinhosAnimados() {
    camadaBichinhos.innerHTML = '';
    const emojis = ['🐬', '🐝', '🐬', '🐝', '🌸', '✨', '🐬', '🐝'];

    for (let i = 0; i < 10; i++) {
        const span = document.createElement('span');
        span.className = 'bichinho-flutuante';
        span.innerText = emojis[i % emojis.length];
        span.style.left = Math.floor(Math.random() * 85 + 5) + 'vw';
        span.style.top = Math.floor(Math.random() * 80 + 10) + 'vh';
        span.style.animationDuration = (Math.random() * 3 + 4) + 's';
        span.style.animationDelay = (Math.random() * 2) + '
