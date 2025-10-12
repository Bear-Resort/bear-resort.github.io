const HUMAN = 'X', COMP = 'O';
let board = Array(9).fill(null);
let gameOver = false;

const gameDiv = document.getElementById('game');
const statusDiv = document.getElementById('status');
const resetBtn = document.getElementById('reset');

const youWin = document.getElementById("you-win");
const computerWin = document.getElementById("computer-win");
const drawWin = document.getElementById("draw");

// Create cells
for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = 'cell-' + i;
    cell.dataset.idx = i;
    cell.onclick = humanMove;
    gameDiv.appendChild(cell);
}

function render() {
    for (let i = 0; i < 9; i++) {
    document.getElementById('cell-' + i).textContent = board[i] ? board[i] : '';
    }
}

function setStatus(num) {
    if (num === 0) {
        computerWin.style.display = "block";
        youWin.style.display = "none";
        drawWin.style.display = "none";
    } else if (num === 1) {
        computerWin.style.display = "none";
        youWin.style.display = "none";
        drawWin.style.display = "block";
    } else if (num === 2) {
        computerWin.style.display = "none";
        youWin.style.display = "block";
        drawWin.style.display = "none";
    }
}

function resetGame() {
    board = Array(9).fill(null);
    gameOver = false;
    render();
    setStatus("Your turn (X)");
    // If you want computer to start first, uncomment below:
    // compMove();
}

resetBtn.onclick = resetGame;

// --- Win/Tie Checks ---
const wins = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // cols
    [0,4,8],[2,4,6]          // diagonals
];

function checkWinner(bd = board) {
    for (let line of wins) {
    const [a, b_, c] = line;
    if (bd[a] && bd[a] === bd[b_] && bd[a] === bd[c]) {
        return bd[a]; // 'X' or 'O'
    }
    }
    if (bd.every(Boolean)) return 'tie';
    return null;
}

// --- Human Move Handler ---
function humanMove(e) {
    if (gameOver) return;
    const idx = +e.target.dataset.idx;
    if (board[idx]) return; // occupied
    board[idx] = HUMAN;
    render();

    let res = checkWinner();
    if (res) return endGame(res);

    compMove();
}

// --- Computer's Move ---
function compMove() {
    // Best move using minimax
    const move = bestMove();
    if (move != null) {
    board[move] = COMP;
    render();

    let res = checkWinner();
    if (res) return endGame(res);
    setStatus("Your turn (X)");
    }
}

// --- Minimax Algorithm ---
function bestMove() {
    let bestScore = -Infinity;
    let move = null;
    for (let i = 0; i < 9; i++) {
    if (!board[i]) {
        board[i] = COMP;
        let score = minimax(board, 0, false);
        board[i] = null;
        if (score > bestScore) {
        bestScore = score;
        move = i;
        }
    }
    }
    return move;
}

function minimax(bd, depth, isMax) {
    const result = checkWinner(bd);
    if (result !== null) {
    if (result === COMP) return 10 - depth;
    else if (result === HUMAN) return depth - 10;
    else if (result === 'tie') return 0;
    }
    if (isMax) { // Computer's turn
    let best = -Infinity;
    for (let i = 0; i < 9; i++) {
        if (!bd[i]) {
        bd[i] = COMP;
        let score = minimax(bd, depth + 1, false);
        bd[i] = null;
        best = Math.max(best, score);
        }
    }
    return best;
    } else { // Human's turn
    let best = Infinity;
    for (let i = 0; i < 9; i++) {
        if (!bd[i]) {
        bd[i] = HUMAN;
        let score = minimax(bd, depth + 1, true);
        bd[i] = null;
        best = Math.min(best, score);
        }
    }
    return best;
    }
}

// --- End game handler ---
function endGame(res) {
    gameOver = true;
    if (res === 'tie') setStatus(1);
    else setStatus(res === HUMAN ? 2 : 0);
}

// --- Init ---
resetGame();