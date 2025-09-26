// --- Canvas setup and drawing ---
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
function fillWhite() {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
fillWhite();

const brushSize = 4; // Thinner brush

let drawing = false;
function getPos(evt) {
    const rect = canvas.getBoundingClientRect();
    return {
    x: Math.floor((evt.clientX - rect.left) / (rect.width / canvas.width)),
    y: Math.floor((evt.clientY - rect.top) / (rect.height / canvas.height))
    };
}

function draw(e) {
    let pos = getPos(e);
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, brushSize / 2, 0, 2 * Math.PI);
    ctx.fill();
}

// --- Undo/Redo stack management ---
let history = [];
let historyStep = -1; // Index in history

function saveState() {
    // Save a copy of the current canvas to history.
    if (historyStep < history.length - 1) {
    history = history.slice(0, historyStep + 1); // Truncate redo stack
    }
    history.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    historyStep = history.length - 1;
    // Limit history length if you want
    if (history.length > 100) {
    history.shift();
    historyStep--;
    }
}
function restoreState(step) {
    if (step >= 0 && step < history.length) {
    ctx.putImageData(history[step], 0, 0);
    historyStep = step;
    }
}
function undo() {
    if (historyStep > 0) {
    restoreState(historyStep - 1);
    }
}
function redo() {
    if (historyStep < history.length - 1) {
    restoreState(historyStep + 1);
    }
}
// Save the initial blank canvas
saveState();

canvas.addEventListener('mousedown', e => {
    drawing = true;
    draw(e);
});
canvas.addEventListener('mousemove', e => {
    if (drawing) draw(e);
});
window.addEventListener('mouseup', () => {
    if (drawing) {
    drawing = false;
    saveState();
    }
});


// --- UI Buttons ---
document.getElementById('clearBtn').addEventListener('click', () => {
    fillWhite();
    saveState();
});
document.getElementById('undoBtn').addEventListener('click', () => { undo(); });
document.getElementById('redoBtn').addEventListener('click', () => { redo(); });

// --- Braille Encoding ---
function getBrailleChar(bits) {
    // bits: [dot1, dot2, dot3, dot4, dot5, dot6, dot7, dot8]
    let code =
    (bits[0] << 0) +
    (bits[1] << 1) +
    (bits[2] << 2) +
    (bits[3] << 3) +
    (bits[4] << 4) +
    (bits[5] << 5) +
    (bits[6] << 6) +
    (bits[7] << 7);
    return String.fromCharCode(0x2800 + code);
}

function exportCanvas() {
    const outputLines = [];
    const { width, height } = canvas;
    const blockW = 2, blockH = 4;
    const img = ctx.getImageData(0, 0, width, height).data;
    const maxCharsPerLine = 50;
    for (let y = 0; y < height; y += blockH) {
    let row = '';
    for (let x = 0; x < width && row.length < maxCharsPerLine; x += blockW) {
        let dots = [];
        for (let dy = 0; dy < blockH; dy++) {
        for (let dx = 0; dx < blockW; dx++) {
            let pxX = x + dx;
            let pxY = y + dy;
            let px;
            // Prevent out-of-bounds
            if (pxX < width && pxY < height) {
            px = (pxY * width + pxX) * 4;
            } else {
            px = -1;
            }
            let bit = 0;
            if (px >= 0) {
            let r = img[px], g = img[px + 1], b = img[px + 2];
            let gray = 0.299 * r + 0.587 * g + 0.114 * b;
            bit = gray < 180 ? 1 : 0;
            }
            dots.push(bit);
        }
        }
        row += getBrailleChar(dots);
    }
    outputLines.push(row);
    if (outputLines.length >= Math.floor(height / blockH)) break;
    }
    document.getElementById('display_result').textContent = outputLines.join('\n');
}

document.getElementById('exportBtn').addEventListener('click', exportCanvas);

// --- Copy to clipboard ---
function copyOutput() {
    const ta = document.getElementById('display_result');
    // If not exported yet, do it first!
    if (!ta.textContent.trim()) exportCanvas();
    if (navigator.clipboard) {
    navigator.clipboard.writeText(ta.textContent);
    }
}
document.getElementById('copyBtn').addEventListener('click', copyOutput);

// --- Hotkeys ---
window.addEventListener('keydown', function(e) {
    // Mac: MetaKey is Cmd; Win: CtrlKey
    const isUndo = (e.metaKey || e.ctrlKey) && !e.shiftKey && e.key.toLowerCase() === 'z';
    const isRedo = (e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === 'z';
    const isCopy = (e.metaKey || e.ctrlKey) && !e.shiftKey && e.key.toLowerCase() === 'c';
    const isGenerate = e.key === 'Enter';
    const isDelete = e.key === 'Delete';
    if (isUndo) {
        e.preventDefault();
        undo();
    } else if (isRedo) {
        e.preventDefault();
        redo();
    } else if (isCopy) {
        e.preventDefault();
        copyOutput();
    } else if (isGenerate) {
        e.preventDefault();
        exportCanvas();
    } else if (isDelete) {
        e.preventDefault();
        fillWhite();
        saveState();
    }
});