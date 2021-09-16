'use strict';



let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // // Quando não há entrada dispare a mensagem
    if (!guess) {
        displayMessage('⛔️ Nenhum número!');

        // Quando o jogador ganha 
    } else if (guess === secretNumber) {

        displayMessage('🎉 Número correto!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#0b0eb3';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // Quando a suposição está errada 
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // Mensagem número muito alto ou muito baixo, utilizando

            displayMessage(guess > secretNumber ? '📈 Muito Alto!' : '📉 Muito Baixo!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // Exibe a mensagem você perdeu o jogo!
            displayMessage('💥 Você perdeu o jogo!');
            document.querySelector('.score').textContent = 0;
        }
    }


});


// 
// Implemente uma funcionalidade de descanso do jogo, para que o jogador possa fazer uma nova suposição! Aqui está como:

// 1. Selecione o elemento com a classe 'novamente' e anexe um manipulador de eventos de clique
// 2. Na função de manipulador, restaure os valores iniciais das variáveis score e secretNumber
// 3. Restaure as condições iniciais do campo de entrada de mensagem, número, pontuação e suposição
// 4. Também restaure a cor de fundo original (# 222) e a largura do número (15rem)




document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;


    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});