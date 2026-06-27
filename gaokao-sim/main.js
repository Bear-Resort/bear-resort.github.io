const SUBJECTS = {
  required: [
    { id: 'chinese', label: '语文', max: 150 },
    { id: 'math', label: '数学', max: 150 },
    { id: 'english', label: '英语', max: 150 },
  ],
  elective: [
    { id: 'physics', label: '物理', max: 100 },
    { id: 'chemistry', label: '化学', max: 100 },
    { id: 'biology', label: '生物', max: 100 },
    { id: 'history', label: '历史', max: 100 },
    { id: 'geography', label: '地理', max: 100 },
    { id: 'politics', label: '政治', max: 100 },
  ],
  optional: [{ id: 'genshin', label: '原神', max: null }],
};

const MAX_ELECTIVES = 3;

const $ = (id) => document.getElementById(id);

function formatNow() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${now.getFullYear()}年${pad(now.getMonth() + 1)}月${pad(now.getDate())}日 ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

function selectedElectiveCount() {
  return SUBJECTS.elective.filter(({ id }) => $(`pick-${id}`).checked).length;
}

function syncElectiveControls() {
  const count = selectedElectiveCount();
  const atMax = count >= MAX_ELECTIVES;

  SUBJECTS.elective.forEach(({ id }) => {
    const checked = $(`pick-${id}`).checked;
    const scoreInput = $(`score-${id}`);
    const pickInput = $(`pick-${id}`);

    scoreInput.disabled = !checked;
    pickInput.disabled = !checked && atMax;
  });

  $('elective-warn').hidden = !atMax;
}

function syncGenshinControl() {
  const checked = $('pick-genshin').checked;
  $('score-genshin').disabled = !checked;
}

function readScore(id, max) {
  const n = Number.parseInt(String($(`score-${id}`).value), 10);
  if (Number.isNaN(n)) return 0;
  const score = Math.max(0, n);
  return max == null ? score : Math.min(max, score);
}

function collectRows() {
  const rows = [];

  SUBJECTS.required.forEach(({ id, label, max }) => {
    rows.push({ label, score: readScore(id, max) });
  });

  SUBJECTS.elective.forEach(({ id, label, max }) => {
    if ($(`pick-${id}`).checked) {
      rows.push({ label, score: readScore(id, max) });
    }
  });

  if ($('pick-genshin').checked) {
    rows.push({ label: '原神', score: readScore('genshin', null) });
  }

  return rows;
}

function updateSlip() {
  $('slip-name').textContent = $('student-name').value.trim() || '—';
  $('slip-exam-id').textContent = $('exam-id').value.trim() || '—';

  const dateField = $('query-date');
  if (!dateField.value.trim()) {
    dateField.value = formatNow();
  }
  $('slip-date').textContent = dateField.value.trim();

  const rows = collectRows();
  const total = rows.reduce((sum, row) => sum + row.score, 0);

  $('slip-scores').innerHTML = rows
    .map(
      (row) =>
        `<tr><td class="subject">${row.label}</td><td>${row.score}</td></tr>`
    )
    .join('');

  $('slip-total').textContent = String(total);
}

async function captureScreenshot() {
  const slip = $('gaokao-slip');
  const btn = $('screenshot-btn');
  btn.disabled = true;
  btn.textContent = '生成中…';

  try {
    const canvas = await html2canvas(slip, {
      scale: 2,
      backgroundColor: '#ffffff',
      logging: false,
      useCORS: true,
    });

    canvas.toBlob((blob) => {
      if (!blob) throw new Error('截图失败');
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      const name = $('student-name').value.trim().replace(/\s+/g, '') || '考生';
      link.download = `高考成绩-${name}.png`;
      link.href = url;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 200);
    }, 'image/png');
  } catch (err) {
    console.error(err);
    alert('截图生成失败，请重试。');
  } finally {
    btn.disabled = false;
    btn.textContent = '生成截图';
  }
}

function bindSubjectInputs() {
  [...SUBJECTS.required, ...SUBJECTS.elective, ...SUBJECTS.optional].forEach(
    ({ id, max }) => {
      $(`score-${id}`).addEventListener('input', () => {
        $(`score-${id}`).value = String(readScore(id, max));
        updateSlip();
      });
    }
  );

  SUBJECTS.elective.forEach(({ id }) => {
    $(`pick-${id}`).addEventListener('change', (event) => {
      if (event.target.checked && selectedElectiveCount() > MAX_ELECTIVES) {
        event.target.checked = false;
      }
      syncElectiveControls();
      updateSlip();
    });
  });

  $('pick-genshin').addEventListener('change', () => {
    syncGenshinControl();
    updateSlip();
  });
}

function init() {
  $('query-date').value = formatNow();

  ['student-name', 'exam-id', 'query-date'].forEach((id) => {
    $(id).addEventListener('input', updateSlip);
  });

  bindSubjectInputs();
  syncElectiveControls();
  syncGenshinControl();
  updateSlip();

  $('refresh-slip').addEventListener('click', updateSlip);
  $('screenshot-btn').addEventListener('click', captureScreenshot);
}

init();
