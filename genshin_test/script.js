let questions = [];  // Store the questions globally so we can access them later

// Fetch the CSV file from the same directory
fetch('questions.csv')
    .then(response => response.text())
    .then(csvData => {
        questions = parseCSV(csvData);  // Parse and store the questions globally
        generateExam(questions);        // Generate the exam
    })
    .catch(error => {
        console.error("Error reading CSV file:", error);
        alert("Failed to load the questions. Please ensure the 'questions.csv' file is in the correct location.");
    });

// Function to parse CSV data
function parseCSV(csvData) {
    const lines = csvData.split('\n');
    const questions = [];

    for (let line of lines) {
        const parts = line.split(',');
        if (parts.length >= 6) { // Assuming format: question, 4 choices, correct answer
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
    examContainer.innerHTML = ''; // Clear any previous exam

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
    const submitButton = document.getElementById('submit-btn');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', function() {
        const answers = collectAnswers(questions);
        const score = calculateScore(answers);
        displayResults(score, questions.length);
    });

    examContainer.appendChild(submitButton);
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
    const resultContainer = document.getElementById('exam-container');
    resultContainer.innerHTML = `<h2>Your Score: ${score} / ${totalQuestions}</h2>`;

    // Add the Return button to go back to the questions
    const returnButton = document.getElementById('submit-btn');
    returnButton.textContent = 'Return to Exam';
    returnButton.addEventListener('click', function() {
        // Re-generate the exam questions from the stored global questions
        generateExam(questions);
    });

    resultContainer.appendChild(returnButton);

    // Hide the Submit button after submitting
    // document.getElementById('submit-btn').style.display = 'none';
}
