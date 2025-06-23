if (!fileName) {
    console.warn("csvFileName is not set.");
}

let startTime;
let timerInterval;

function startElapsedTime(displayElement) {
    // Use stored startTime if available
    const storedStartTime = localStorage.getItem('examStartTime' + fileName);
    if (storedStartTime) {
        startTime = parseInt(storedStartTime);
    } else {
        startTime = Date.now();
        localStorage.setItem('examStartTime' + fileName, startTime);
    }

    timerInterval = setInterval(() => {
        const elapsedMs = Date.now() - startTime;
        const totalSeconds = Math.floor(elapsedMs / 1000);
        const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');

        displayElement.textContent = `⏱️ ${minutes}:${seconds}`;
    }, 1000);
}

let questions = [];  // Store the questions

// Fetch the CSV file from the file name
fetch(fileName)
    .then(response => response.text())
    .then(csvData => {
        questions = parseCSV(csvData); 
        generateExam(questions); 
    })
    .catch(error => {
        console.error("Error reading CSV file:", error);
    });

// Function to parse CSV data
function parseCSV(csvData) {
    const lines = csvData.split('\n');
    const questions = [];

    for (let line of lines) {
        const parts = line.split(',');
        if (parts.length >= 6) {
            const question = {
                questionText: parts[0].trim(),
                choices: [parts[1].trim(), parts[2].trim(), parts[3].trim(), parts[4].trim()],
                correctAnswer: parts[5].trim()
            };
            questions.push(question);
        }
    }
    return questions;
}

// Function to generate the exam from the parsed questions
function generateExam(questions) {
    const examContainer = document.getElementById('exam-container');
    examContainer.innerHTML = ''; // Clear the examContainer

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        
        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${index + 1}. ${q.questionText}`;
        questionDiv.appendChild(questionTitle);

        q.choices.forEach((choice, i) => {
            const choiceLabel = document.createElement('label');
            const choiceInput = document.createElement('input');
            choiceInput.type = 'radio';
            choiceInput.name = `question-${index}`;
            choiceInput.value = choice;
            choiceLabel.appendChild(choiceInput);
            choiceLabel.appendChild(document.createTextNode(choice));
            questionDiv.appendChild(choiceLabel);
            questionDiv.appendChild(document.createElement('br'));
        });

        examContainer.appendChild(questionDiv);
    });

    // Show the Submit button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', function() {
        const answers = collectAnswers(questions);
        const score = calculateScore(answers);
        displayResults(score, questions.length);
    });

    examContainer.appendChild(document.createElement('br'));
    submitButton.style.display = 'block';
    submitButton.style.margin = '20px auto';
    examContainer.appendChild(submitButton);

    if (!startTime) {
    const timerDisplay = document.getElementById('timer');
    startElapsedTime(timerDisplay);
}
}

// Function to collect the answers from the exam
function collectAnswers(questions) {
    const answers = [];
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption) {
            const answer = {
                question: q.questionText,
                selectedAnswer: selectedOption.value,
                isCorrect: selectedOption.value === q.correctAnswer
            };
            answers.push(answer);
        }
    });
    console.log("Collected answers:", answers);
    return answers;
}

// Function to calculate the score
function calculateScore(answers) {
    let score = 0;
    answers.forEach(answer => {
        // Log the selected and correct answers for debugging
        console.log(`Selected Answer: ${answer.selectedAnswer}, Correct Answer: ${answer.correctAnswer}`);
        
        if (answer.isCorrect) {
            score++;
        }
    });
    console.log(`Calculated Score: ${score}`);
    return score;
}

// Function to display the results (just the score)
function displayResults(score, totalQuestions) {
    document.getElementById('timer').style.display = 'none';
    const resultContainer = document.getElementById('exam-container');
    resultContainer.innerHTML = `<h2>Your Score: ${score} / ${totalQuestions}</h2>`;

    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
    const minutes = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
    const seconds = String(elapsedSeconds % 60).padStart(2, '0');
    const timeTaken = `⏱️ Time Taken: ${minutes}:${seconds}`;
    
    const timeElement = document.createElement('p');
    timeElement.textContent = timeTaken;
    resultContainer.appendChild(timeElement);

    // Add the Return button to go back to the questions
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Return to Exam';
    returnButton.addEventListener('click', function() {
        // Re-generate the exam questions from the stored global questions
        generateExam(questions);
        document.getElementById('timer').style.display = 'block';
    });

    resultContainer.appendChild(document.createElement('br'));
    returnButton.style.display = 'block';
    returnButton.style.margin = '20px auto';
    resultContainer.appendChild(returnButton);
}