import { updateMyLanguage } from '/assets/js/lang.js';

// basic variables
let countdown;
let isPaused;
let endTimestamp;

// input fields
const hoursInput = document.getElementById('hoursInput');
const minutesInput = document.getElementById('minutesInput');
const secondsInput = document.getElementById('secondsInput');

// buttons
const startButton = document.getElementById('startButton');
const quickNap = document.getElementById('quickNap');
const studyBreak = document.getElementById('studyBreak');
const milkTea = document.getElementById('milkTea');
const goonSession = document.getElementById('goonSession');
const pauseResumeButton = document.getElementById('pauseResumeButton');
const stopButton = document.getElementById('stopButton');
const add30sButton = document.getElementById('add30sButton');
const add1mButton = document.getElementById('add1mButton');
const add5mButton = document.getElementById('add5mButton');

// controls
const timerDisplay = document.getElementById('countdown-timer');
const inputForm = document.getElementById('inputForm');
const controls = document.getElementById('controls');
const additions = document.getElementById('additions');
const bear_stop = document.getElementById('stopped');
const bear_progress = document.getElementById('progress');

// play the alarm
function startAlarm() {
    const alarm = document.getElementById('alarm');
    alarm.currentTime = 0; // restart from beginning
    alarm.loop = true;
    alarm.play();
}

// stop the alarm
function stopAlarm() {
    const alarm = document.getElementById('alarm');
    alarm.pause();
}

// control UI uniformly
function showTimerUI(show) {
    // show input or all other features
    inputForm.style.display = show ? 'none' : 'block';
    controls.style.display = show ? 'block' : 'none';
    additions.style.display = show ? 'block' : 'none';
    timerDisplay.style.display = show ? 'block' : 'none';
    bear_progress.style.display = show ? 'block' : 'none';
    bear_stop.style.display = show ? 'none' : 'block';
}

// update the timer display
function updateTimerDisplay(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    timerDisplay.innerHTML =
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// run the countdown loop
function runCountdownLoop() {
    clearInterval(countdown);
    countdown = setInterval(() => {
        isPaused = localStorage.getItem('isPaused') === 'true';
        pauseResumeButton.innerHTML = isPaused
        ? `<span class="eng">Resume</span><span class="chn">继续</span>`
        : `<span class="eng">Pause</span><span class="chn">暂停</span>`;
        updateMyLanguage();
        if (!isPaused) {
            bear_stop.style.display = 'none';
            bear_progress.style.display = 'block';
            endTimestamp = localStorage.getItem('endTimestamp');
            const timeLeft = Math.max(0, Math.floor((endTimestamp - Date.now()) / 1000));
            if (timeLeft <= 0) {
                clearInterval(countdown);
                timerDisplay.innerHTML = "00:00:00";
                startAlarm();
                bear_stop.style.display = 'block';
                setTimeout(() => {
                    if (updateMyLanguage() === "Eng") {
                        alert('Time is up.');
                    } else {
                        alert('时间到了.');
                    }
                }, 300);
                timerDisplay.style.display = 'none';
                localStorage.removeItem('endTimestamp');
                showTimerUI(false);
                stopAlarm();
                return;
            }
            updateTimerDisplay(timeLeft);
        } else {
            const timeLeft = localStorage.getItem('time-left-paused');
            updateTimerDisplay(parseInt(timeLeft));
            bear_stop.style.display = 'block';
            bear_progress.style.display = 'none';
        }
    }, 250);
}

// start the countdown
function startCountdown() {
    isPaused = false;
    localStorage.setItem('isPaused', false);
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    const inputTime = hours * 3600 + minutes * 60 + seconds;
    if (inputTime <= 0) {
    if (updateMyLanguage() === "Eng") {
        alert('Please enter a valid time.');
    }
    else {
        alert('请输入一个有效的时间.');
    }
    return;
    }
    endTimestamp = Date.now() + inputTime * 1000;
    localStorage.setItem('endTimestamp', endTimestamp);
    showTimerUI(true);
    updateTimerDisplay(inputTime);
    runCountdownLoop();
    localStorage.setItem('refresh', Date.now().toString());
}

// count down with a time
function startCountdownWT(time) {
    isPaused = false;
    localStorage.setItem('isPaused', false);
    if (time <= 0) return;
    endTimestamp = Date.now() + time * 1000;
    localStorage.setItem('endTimestamp', endTimestamp);
    showTimerUI(true);
    updateTimerDisplay(time);
    runCountdownLoop();
    localStorage.setItem('refresh', Date.now().toString());
}

function togglePauseResume() {
    isPaused = localStorage.getItem('isPaused')  === "true";
    isPaused = !isPaused;
    pauseResumeButton.innerHTML = isPaused
    ? `<span class="eng">Resume</span><span class="chn">继续</span>`
    : `<span class="eng">Pause</span><span class="chn">暂停</span>`;
    localStorage.setItem('isPaused', isPaused);
    updateMyLanguage();
    if (isPaused) {
        bear_stop.style.display = 'block';
        bear_progress.style.display = 'none';
        const timeLeft = Math.max(0, Math.floor((endTimestamp - Date.now()) / 1000));
        localStorage.setItem('time-left-paused', timeLeft);
    } else {
        const prevTimeLeft = localStorage.getItem('time-left-paused');
        endTimestamp = Date.now() + prevTimeLeft * 1000;
        localStorage.setItem('endTimestamp', endTimestamp);
        bear_stop.style.display = 'none';
        bear_progress.style.display = 'block';
    }
}

function stopCountdown() {
    clearInterval(countdown);
    showTimerUI(false);
    let secondsLeft = 0;
    if (typeof endTimestamp === "number") {
        secondsLeft = Math.max(0, Math.floor((endTimestamp - Date.now()) / 1000));
    }
    let hr = Math.floor(secondsLeft / 3600);
    let min = Math.floor((secondsLeft % 3600) / 60);
    let sec = secondsLeft % 60;
    
    hoursInput.value = hr > 0 ? hr : '';
    minutesInput.value = min > 0 ? min : '';
    secondsInput.value = sec > 0 ? sec : '';
    localStorage.removeItem('endTimestamp');
    localStorage.setItem('refresh', Date.now().toString());
}

function addTime(seconds) {
    endTimestamp = localStorage.getItem('endTimestamp');

    isPaused = localStorage.getItem('isPaused');
    if (isPaused) {
        let timeLeft = localStorage.getItem('time-left-paused');
        timeLeft += seconds * 1000;
        localStorage.getItem('time-left-paused');
    } else {
        let timeLeft = Math.max(0, Math.floor((endTimestamp - Date.now()) / 1000));
        timeLeft += seconds;
        endTimestamp = Date.now() + timeLeft * 1000;
        localStorage.setItem('endTimestamp', endTimestamp);
    }
    updateTimerDisplay(timeLeft);
}

function initializeTimer() {
    const savedEndTimestamp = localStorage.getItem('endTimestamp');
    isPaused = localStorage.getItem('isPaused')  === "true";
    pauseResumeButton.innerHTML = isPaused
    ? `<span class="eng">Resume</span><span class="chn">继续</span>`
    : `<span class="eng">Pause</span><span class="chn">暂停</span>`;
    updateMyLanguage();
    if (savedEndTimestamp) {
        endTimestamp = parseInt(savedEndTimestamp, 10);
        const timeLeft = Math.max(0, Math.floor((endTimestamp - Date.now()) / 1000));
        isPaused = localStorage.getItem('isPaused');
        if (timeLeft > 0 || isPaused) {
            updateTimerDisplay(timeLeft);
            showTimerUI(true);
            runCountdownLoop();
        } else {
            localStorage.removeItem('endTimestamp');
            timerDisplay.innerHTML = "00:00:00";
            showTimerUI(false);
        }
    } else {
        showTimerUI(false);
        timerDisplay.innerHTML = "00:00:00";
        timerDisplay.style.display = 'none';
    }
}

// button functions
startButton.addEventListener('click', startCountdown);
quickNap.addEventListener('click', () => startCountdownWT(900));
studyBreak.addEventListener('click', () => startCountdownWT(600));
milkTea.addEventListener('click', () => startCountdownWT(300));
goonSession.addEventListener('click', () => startCountdownWT(60));
pauseResumeButton.addEventListener('click', togglePauseResume);
stopButton.addEventListener('click', stopCountdown);
add30sButton.addEventListener('click', () => addTime(30));
add1mButton.addEventListener('click', () => addTime(60));
add5mButton.addEventListener('click', () => addTime(300));

// Initialize the timer upon loading
initializeTimer();