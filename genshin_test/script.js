// Fetch the CSV file from the same directory
fetch('questions.csv')
    .then(response => response.text())
    .then(csvData => {
        const questions = parseCSV(csvData);
        generateExam(questions);
    })
    .catch(error => {
        alert("Error reading CSV file:", error);
        alert("Failed to load the questions. Please ensure the 'questions.csv' file is in the correct location.", error);
    });

// Function to parse CSV data
function parseCSV(csvData) {
    const lines = csvData.split('\n');
    const questions = [];

    for (let line of lines) {
        const parts = line.split(',');
        if (parts.length >= 5) {
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
    document.getElementById('submit-btn').style.display = 'block';
    document.getElementById('submit-btn').addEventListener('click', function() {
        const answers = collectAnswers(questions);
        displayResults(answers);
    });
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
    return answers;
}

// Function to display the results
function displayResults(answers) {
    const resultContainer = document.getElementById('exam-container');
    resultContainer.innerHTML = '<h2>Results</h2>';

    answers.forEach(answer => {
        const resultDiv = document.createElement('div');
        resultDiv.textContent = `${answer.question} - Your answer: ${answer.selectedAnswer} - ${answer.isCorrect ? 'Correct' : 'Incorrect'}`;
        resultContainer.appendChild(resultDiv);
    });

    // Hide the submit button after submitting
    document.getElementById('submit-btn').style.display = 'none';
}
