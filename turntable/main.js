import { updateMyLanguage } from '/assets/js/lang.js';

const maxChoices = 8;
let choices = [];
let isSpinning = false;

const choicesListDiv = document.getElementById('choices-list');
const addChoiceForm = document.getElementById('add-choice-form');
const newChoiceInput = document.getElementById('new-choice');
const addChoiceBtn = document.getElementById('add-choice-btn');
const spinBtn = document.getElementById('spin-btn');
const canvas = document.getElementById('turntable-canvas');
const ctx = canvas.getContext('2d');
const resultModal = document.getElementById('result-modal');
const resultText = document.getElementById('result-text');
const closeModalBtn = document.getElementById('close-modal-btn');

const colors = [
  '#ffe5b4','#ffeaea','#e4ffe9','#d0eeff',
  '#ffffcc','#e7fcfd','#f8eafd','#eedcff'];

function sliceText(text, maxLen) {
  if (text.length > maxLen) return text.slice(0, maxLen-1)+'…';
  else return text;
}

function renderChoicesList() {
  choicesListDiv.innerHTML = '';
  choices.forEach((choice, idx) => {
    const div = document.createElement('div');
    div.className = 'choice-item';
    const btn = document.createElement('button');
    btn.innerHTML = choice + "&nbsp;&nbsp;⊠";
    btn.title = 'Remove';
    btn.onclick = () => {
      choices.splice(idx,1);
      renderChoicesList();
      renderTurntable();
      checkSpinEnable();
    };
    div.appendChild(btn);
    choicesListDiv.appendChild(div);
  });
  addChoiceBtn.disabled = choices.length >= maxChoices;
}

function checkSpinEnable() {
  spinBtn.disabled = choices.length < 1 || isSpinning;
}
addChoiceForm.onsubmit = (e) => {
  e.preventDefault();
  if (choices.length >= maxChoices) return;
  let val = newChoiceInput.value.trim();
  if (val.length === 0) return;
  if (choices.includes(val)) {
    newChoiceInput.value='';
    return;
  }
  choices.push(val);
  newChoiceInput.value = '';
  renderChoicesList();
  renderTurntable();
  checkSpinEnable();
};
newChoiceInput.oninput = () => {
  addChoiceBtn.disabled = choices.length >= maxChoices || newChoiceInput.value.trim()==='';
};
function padChoices(arr) {
  while(arr.length<2) arr.push('');
  return arr;
}

// Draws the wheel and arrow
function renderTurntable(angleOffset=0, highlightIdx=null) {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const cx = canvas.width/2, cy = canvas.height/2, radius = 140;
  const N = choices.length < 1 ? 0 : choices.length;
  const angleStep = 2*Math.PI/N;
  let drawnChoices = choices;
  if(N>choices.length) drawnChoices = padChoices([...choices]);
  for(let i=0;i<N;i++) {
    let startAngle = -Math.PI/2 + angleStep*i + angleOffset;
    let endAngle = startAngle + angleStep;
    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.arc(cx, cy, radius, startAngle, endAngle, false);
    ctx.closePath();
    ctx.fillStyle = colors[i%colors.length];
    ctx.globalAlpha = (highlightIdx===i)?0.81:1.0;
    ctx.fill();
    ctx.save();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
    ctx.globalAlpha = 1.0;

    ctx.save();
    ctx.translate(cx, cy);
    const middleAngle = (startAngle + endAngle) / 2;
    const textRadius = radius * 0.60;
    const x = Math.cos(middleAngle) * textRadius;
    const y = Math.sin(middleAngle) * textRadius;
    ctx.rotate(middleAngle);
    let fontSize = (N<=4) ? 18 : (N<=6) ? 16 : 14;
    const cssFontFamily = getComputedStyle(document.documentElement).getPropertyValue('--font-family').trim();
    ctx.font = `bold ${fontSize}px ${cssFontFamily}`;
    ctx.fillStyle = highlightIdx===i ? "#d22" : "#222";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.rotate(-middleAngle);
    let txt = sliceText(drawnChoices[i], N>=6?6:9) || '';
    ctx.fillText(txt, x, y);
    ctx.restore();
  }
  // Draw central knob
  ctx.beginPath();
  ctx.arc(cx,cy,40,0,2*Math.PI);
  ctx.fillStyle = "#fff";
  ctx.shadowColor = "#bbb";
  ctx.shadowBlur = 9;
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.beginPath();
  ctx.arc(cx,cy,40,0,2*Math.PI);
  ctx.lineWidth=2;
  ctx.strokeStyle="#eee";
  ctx.stroke();

  // Arrow indicator (triangle above spinner, pointing down at 12 o'clock)
  const arrowWidth = 44;
  const arrowHeight = 35;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(cx - arrowWidth/2, cy - radius - 18); // left
  ctx.lineTo(cx + arrowWidth/2, cy - radius - 18); // right
  ctx.lineTo(cx, cy - radius - 18 + arrowHeight); // tip
  ctx.closePath();
  ctx.fillStyle = "#f12c53";
  ctx.shadowColor = "#900";
  ctx.shadowBlur = 6;
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.restore();
}

// When spinning: rotate so the winning sector's center is at -Math.PI/2 (top)
function spinTurntable() {
  if(isSpinning || choices.length<1) return;
  isSpinning = true;
  checkSpinEnable();
  const N = choices.length;
  const winnerIdx = Math.floor(Math.random()*N);
  const angleStepRad = 2*Math.PI/N;

  // We want winner sector CENTER at -Math.PI/2 (top), so offset by:
  //   -(winnerIdx * angleStepRad + angleStepRad/2) + -Math.PI/2
  // But for spinning, animate from 0 to finalAngle
  const spins = 5 + Math.floor(Math.random()*2);
  const totalSpinRad = spins*2*Math.PI;
  const finalAngleRad = totalSpinRad - (winnerIdx*angleStepRad + angleStepRad/2);

  let currentAngle = 0;
  let start = null;
  const duration = 1800 + Math.random()*700;
  function animateSpin(ts) {
    if(!start) start = ts;
    let progress = ts - start;
    let ease = (t) => 1 - Math.pow(1-t,3);
    let t = Math.min(progress/duration,1);
    let angle = finalAngleRad * ease(t);
    currentAngle = angle;
    renderTurntable(currentAngle, t>0.97 ? winnerIdx : null);
    if(t<1) {
      requestAnimationFrame(animateSpin);
    } else {
      setTimeout(()=>{ showResultModal(winnerIdx, currentAngle); },500);
      isSpinning = false;
      checkSpinEnable();
    }
  }
  requestAnimationFrame(animateSpin);
}

function showResultModal(winnerIdx, currentAngle) {
    resultText.textContent = updateMyLanguage() === "Eng" ? `The Choice of the Turntable is: "${choices[winnerIdx]}"` : `转盘的选择是："${choices[winnerIdx]}"`;
  resultModal.style.display='flex';
  resultModal.dataset.angle = currentAngle;
  resultModal.dataset.idx = winnerIdx;
}
closeModalBtn.onclick = () => {
  resultModal.style.display='none';
  const N = choices.length;
  const angleStepRad = 2*Math.PI/N;
  const winnerIdx = parseInt(resultModal.dataset.idx || "0",10) || 0;
  const finalAngleRad = - (winnerIdx*angleStepRad + angleStepRad/2);
  renderTurntable(finalAngleRad, winnerIdx);
};
renderChoicesList();
renderTurntable();
spinBtn.onclick = spinTurntable;
window.addEventListener('resize', ()=>{
  renderTurntable();
});