let countdown;
let remainingTime = 0; // Remaining time in seconds
let isPaused = false;
let endTimestamp; // Timestamp for when the countdown ends
const timerDisplay = document.getElementById('countdown-timer');
const hoursInput = document.getElementById('hoursInput');
const minutesInput = document.getElementById('minutesInput');
const secondsInput = document.getElementById('secondsInput');
const startButton = document.getElementById('startButton');
const pauseResumeButton = document.getElementById('pauseResumeButton');
const stopButton = document.getElementById('stopButton');
const add30sButton = document.getElementById('add30sButton');
const add1mButton = document.getElementById('add1mButton');
const add5mButton = document.getElementById('add5mButton');
const inputForm = document.getElementById('inputForm');
const controls = document.getElementById('controls');
const additions = document.getElementById('additions');

const bear_stop = document.getElementById('stopped');
const bear_progress = document.getElementById('progress');

// Load saved timestamp and make sure the countdown continues if saved
const savedEndTimestamp = localStorage.getItem('endTimestamp');
const savedTotalTime = localStorage.getItem('totalTime');

function initializeTimer() {
    if (savedEndTimestamp) {
        endTimestamp = parseInt(savedEndTimestamp);
        const currentTime = Date.now();

        // Calculate remaining time
        remainingTime = Math.floor((endTimestamp - currentTime) / 1000);

        if (remainingTime > 0) {
            // Timer is still active
            updateTimerDisplay(remainingTime);
            inputForm.style.display = 'none';
            controls.style.display = 'block';
            additions.style.display = 'block';
            bear_stop.style.display = 'block';
            bear_progress.style.display = 'none';
            startCountdown(); // Start countdown if there's remaining time
        } else {
            // If time is up
            localStorage.removeItem('endTimestamp');
            localStorage.removeItem('totalTime');
            timerDisplay.innerHTML = "00:00:00";
            bear_stop.style.display = 'none';
            bear_progress.style.display = 'block';
        }
    }
}

startButton.addEventListener('click', startCountdown);
pauseResumeButton.addEventListener('click', togglePauseResume);
stopButton.addEventListener('click', stopCountdown);
add30sButton.addEventListener('click', () => addTime(30));
add1mButton.addEventListener('click', () => addTime(60));
add5mButton.addEventListener('click', () => addTime(300));

function startCountdown() {
    isPaused = false;

    // Get input time in seconds only when starting fresh
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    const inputTime = hours * 3600 + minutes * 60 + seconds;

    if (inputTime <= 0 && remainingTime <= 0) {
        alert('Please enter a valid time greater than 0');
        return;
    }

    // Use input time if provided, otherwise resume existing time
    remainingTime = inputTime || remainingTime;

    // Store end timestamp in localStorage
    endTimestamp = Date.now() + remainingTime * 1000;
    localStorage.setItem('endTimestamp', endTimestamp);
    localStorage.setItem('totalTime', remainingTime);

    inputForm.style.display = 'none';
    controls.style.display = 'block';
    additions.style.display = 'block';
    timerDisplay.style.display = 'block';
    bear_stop.style.display = 'none';
    bear_progress.style.display = 'block';
    updateTimerDisplay(remainingTime);
    clearInterval(countdown);

    countdown = setInterval(() => {
        if (!isPaused) {
            remainingTime--;

            // Update the end timestamp in localStorage
            localStorage.setItem('endTimestamp', Date.now() + remainingTime * 1000);

            if (remainingTime < 0) {
                clearInterval(countdown);
                timerDisplay.innerHTML = "00:00:00";
                alert('Time is up!');
                controls.style.display = 'none';
                additions.style.display = 'none';
                inputForm.style.display = 'block';
                localStorage.removeItem('endTimestamp'); // Clear stored time
                localStorage.removeItem('totalTime'); // Clear total time
                return;
            }

            updateTimerDisplay(remainingTime);
        }
    }, 1000);
}

function togglePauseResume() {
    isPaused = !isPaused;
    pauseResumeButton.innerHTML = isPaused ? `<span class="eng">Resume</span><span class="chn">继续</span>` : `<span class="eng">Pause</span><span class="chn">暂停</span>`;
    updateMyLanguage();
    if (isPaused) {
        bear_stop.style.display = 'block';
        bear_progress.style.display = 'none';
    } else {
        bear_stop.style.display = 'none';
        bear_progress.style.display = 'block';
    }
}

function stopCountdown() {
    clearInterval(countdown);
    timerDisplay.style.display = 'none'; // Hide the timer display when stopped
    controls.style.display = 'none'; // Keep control buttons visible
    additions.style.display = 'none';
    inputForm.style.display = 'block';
    bear_stop.style.display = 'block';
    bear_progress.style.display = 'none';
    // Calculate and display remaining time in input boxes
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    hoursInput.value = hours;
    minutesInput.value = minutes;
    secondsInput.value = seconds;

    localStorage.removeItem('endTimestamp'); // Clear stored end timestamp
    localStorage.setItem('totalTime', remainingTime); // Store remaining time
}

function addTime(seconds) {
    remainingTime += seconds;
    localStorage.setItem('endTimestamp', Date.now() + remainingTime * 1000); // Update endTimestamp
    localStorage.setItem('totalTime', remainingTime); // Update total time
    updateTimerDisplay(remainingTime);
}

function updateTimerDisplay(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    timerDisplay.innerHTML = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Initialize the timer upon loading
initializeTimer();