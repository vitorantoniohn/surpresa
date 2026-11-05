// Dados das subpáginas (Personalize as datas, fotos da pasta img/ e histórias!)
const encontros = [
    {
        data: "Nosso 1º Encontro",
        titulo: "O Dia em que Tudo Brilhou",
        foto: "img/amor.jpeg",
        legenda: "Onde o meu sorriso encontrou o seu 💕",
        historia: "Eu lembro de cada detalhe desse dia! Desde o friozinho na barriga antes de te ver até o momento em que você chegou e deixou tudo mais bonito. Conversamos por horas e parecia que o tempo voava.",
        destaque: "💛 O que eu mais amei: Ver o seu sorriso de pertinho pela primeira vez!"
    },
    {
        data: "Nosso 2º Passeio",
        titulo: "Risadas & Momentos Doces",
        foto: "img/amor1.jpeg",
        legenda: "Qualquer lugar fica perfeito com você 🍦✨",
        historia: "Nesse dia a gente se divertiu tanto! Cada piada boba, cada olhar e cada passo de mãos dadas me davam a certeza de que eu estava ao lado da mulher mais incrível do mundo.",
        destaque: "🐬 O que eu mais amei: Nossas crises de riso e o seu abraço apertado!"
    },
    {
        data: "Nosso 3º Encontro",
        titulo: "Um Pôr do Sol Inesquecível",
        foto: "img/amor.jpeg",
        legenda: "Você é mais linda que qualquer paisagem 🌸☀️",
        historia: "O céu ficou todo rosa e amarelado, igualzinho às suas cores favoritas! Mas nem o pôr do sol mais bonito chega perto do brilho que os seus olhos têm quando você está feliz.",
        destaque: "🐝 O que eu mais amei: Ficar admirando você enquanto o sol se punha!"
    },
    {
        data: "Nosso 4º Encontro",
        titulo: "Nossa Noite Mágica",
        foto: "img/amor1.jpeg",
        legenda: "Colecionando memórias ao seu lado 🥰",
        historia: "Mais um dia perfeito pra nossa conta! Não importa para onde a gente vá, estar com você transforma qualquer passeio simples na melhor aventura da minha vida.",
        destaque: "🌷 O que eu mais amei: Cada segundo ao seu lado!"
    }
];

function soltarFogos() {
    const duracao = 2.5 * 1000;
    const fim = Date.now() + duracao;
    const cores = ['#fb6f92', '#ff8fab', '#ffb703', '#ffea85', '#ffffff'];

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.65 },
            colors: cores
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.65 },
            colors: cores
        });

        if (Date.now() < fim) {
            requestAnimationFrame(frame);
        }
    }());
}

function abrirDia(index) {
    const dados = encontros[index];
    document.getElementById('sub-date').innerText = dados.data;
    document.getElementById('sub-title').innerText = dados.titulo;
    document.getElementById('sub-img').src = dados.foto;
    document.getElementById('sub-caption').innerText = dados.legenda;
    document.getElementById('sub-story').innerText = dados.historia;
    document.getElementById('sub-highlight').innerText = dados.destaque;

    document.getElementById('main-page').classList.remove('active');
    document.getElementById('sub-page').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.4 },
        colors: ['#fb6f92', '#ffb703', '#ff8fab']
    });
}

function voltarInicio() {
    document.getElementById('sub-page').classList.remove('active');
    document.getElementById('main-page').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('load', () => {
    setTimeout(soltarFogos, 400);
});
