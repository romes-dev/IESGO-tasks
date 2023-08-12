const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Configurações do jogo
const screenWidth = 40;
const screenHeight = 20;
const playerChar = 'S';
const invaderChar = 'I';
const projectileChar = '|';

// Estado do jogo
let playerX = Math.floor(screenWidth / 2);
let invaders = [];
let projectiles = [];
let score = 0;
let gameOver = false;

// Função para exibir o estado do jogo
function render() {
    const screen = [];

    for (let y = 0; y < screenHeight; y++) {
        const row = [];

        for (let x = 0; x < screenWidth; x++) {
            if (y === screenHeight - 1 && x === playerX) {
                row.push(playerChar);
            } else if (invaders.some(invader => invader.x === x && invader.y === y)) {
                row.push(invaderChar);
            } else if (projectiles.some(projectile => projectile.x === x && projectile.y === y)) {
                row.push(projectileChar);
            } else {
                row.push(' ');
            }
        }

        screen.push(row.join(''));
    }

    console.clear();
    console.log(screen.join('\n'));
    console.log(`Pontuação: ${score}`);
}

// Função para mover os invasores
function moveInvaders() {
    for (const invader of invaders) {
        invader.y++;
        if (invader.y >= screenHeight) {
            gameOver = true;
        }
    }
}

// Função para atualizar o jogo
function update() {
    moveInvaders();
    projectiles.forEach(projectile => projectile.y--);

    projectiles = projectiles.filter(projectile => projectile.y >= 0);

    for (const projectile of projectiles) {
        const hitInvader = invaders.find(invader => invader.x === projectile.x && invader.y === projectile.y);

        if (hitInvader) {
            score++;
            invaders = invaders.filter(invader => invader !== hitInvader);
        }
    }

    render();

    if (!gameOver) {
        setTimeout(() => {
            rl.question('Mover para esquerda (A) ou direita (D), atirar (S), ou sair (Q)? ', input => {
                handleInput(input);
            });
        }, 100);
    } else {
        console.clear();
        console.log(`Fim de jogo! Sua pontuação final foi: ${score}`);
        rl.close();
    }
}

// Inicialização do jogo
function initialize() {
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 10; x++) {
            invaders.push({ x, y });
        }
    }

    update();
}

// Controle do jogador
function handleInput(input) {
    if (input === 'A' && playerX > 0) {
        playerX--;
    } else if (input === 'D' && playerX < screenWidth - 1) {
        playerX++;
    } else if (input === 'S') {
        projectiles.push({ x: playerX, y: screenHeight - 2 });
    } else if (input === 'Q') {
        gameOver = true;
    }

    update();
}

// Inicialização do jogo
initialize();
