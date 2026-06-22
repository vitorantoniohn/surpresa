const botao = document.getElementById('botaoFofo');
const mensagem = document.getElementById('mensagem');
const galeria = document.getElementById('galeria'); // Puxamos a galeria com as fotos
const titulo = document.getElementById('titulo');
const instrucao = document.getElementById('instrucao');
const textoAbaixo = document.getElementById('textoAbaixo');

// A variável que conta os cliques
let contadorCliques = 0;

botao.addEventListener('click', function() {
    contadorCliques++; // Aumenta 1 no contador a cada clique

    // O botão foge se o clique for menor que 5
    if (contadorCliques < 5) {
        
        // Calculamos o espaço seguro na tela
        const larguraJanela = window.innerWidth - botao.clientWidth;
        const alturaJanela = window.innerHeight - botao.clientHeight;

        // Geramos coordenadas aleatórias
        const aleatorioX = Math.floor(Math.random() * larguraJanela);
        const aleatorioY = Math.floor(Math.random() * alturaJanela);

        // Movemos o botão para a nova posição
        botao.style.position = 'absolute';
        botao.style.left = aleatorioX + 'px';
        botao.style.top = aleatorioY + 'px';

        botao.innerText = "Errou anjo! Aperta dnv pfv";
        
    } else {
        // CLIQUE NÚMERO 5! A surpresa acontece!
        mensagem.style.display = 'block'; 
        galeria.style.display = 'flex'; 
        
        // ADICIONE ESTA LINHA: Mostra o texto debaixo das fotos
        textoAbaixo.style.display = 'block';



        botao.style.display = 'none'; // Esconde o botão fujão
        instrucao.style.display = 'none'; // Esconde a instrução inicial
        
        // Substitui o título pela mensagem de desculpas
        titulo.innerText = "Como pude cometer um erro grotesto desses?❤️";
        
        mensagem.style.display = 'block'; // Mostra a mensagem de amor
        
        // É AQUI QUE AS FOTOS APARECEM! Usamos 'flex' para exibir lado a lado no 5º clique.
        galeria.style.display = 'flex'; 
        
        // Faz chover os confetes
        confetti({
            particleCount: 200, 
            spread: 90,         
            origin: { y: 0.6 }  


            
        });
    }
});