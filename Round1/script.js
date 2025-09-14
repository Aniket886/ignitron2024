const questions = [
    { question: "What is the correct syntax to declare a constant variable in C?", options: ["int const x = 10;", "const int x = 10;", "Both a and b", "None of the above"], correct: 2 },
    { question: "Which of the following is used to dynamically allocate memory in C?", options: ["malloc", "calloc", "Both a and b", "realloc"], correct: 2 },
    { question: "What will sizeof(int) typically return on a 32-bit system?", options: ["2", "4", "8", "Depends on the compiler"], correct: 1 },
    { question: "Which operator is used to access a structure member using a pointer?", options: [".", "->", ",", "&"], correct: 1 },
    { question: "What happens if you declare an array with a negative size?", options: ["Runs with no elements", "Runtime error", "Undefined behavior", "Works like a pointer"], correct: 1 },
    { question: "Which of the following loops will execute at least once?", options: ["for loop", "while loop", "do-while loop", "None of the above"], correct: 2 },
    { question: "What is the file extension of a C source file?", options: [".exe", ".txt", ".c", ".cpp"], correct: 2 },
    { question: "What does the void keyword signify in a function declaration?", options: ["The function has no return type", "The function has no parameters", "The function can return any data type", "The function is optional"], correct: 0 },
    { question: "What is the default return type of a function in C if not specified?", options: ["int", "void", "float", "char"], correct: 0 },
    { question: "What is the use of the break statement?", options: ["Exit a program", "Terminate a loop or switch case", "Skip the rest of a loop iteration", "None of the above"], correct: 1 },
    { question: "What does sizeof do?", options: ["Runs at runtime", "Returns pointer size", "Returns type size", "Only works with types"], correct: 2 },
    { question: "Which of the following is a valid C keyword?", options: ["define", "boolean", "return", "None of the above"], correct: 2 },
    { question: "Which of the following is a valid C identifier?", options: ["2ndVariable", "_variableName", "main()", "#define"], correct: 1 },
    { question: "Which of the following is a valid way to declare a list in Python?", options: ["[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}", "None of the above"], correct: 0 },
    { question: "Which keyword is used to define a function in Python?", options: ["func", "def", "define", "Both a and b"], correct: 1 },
];

const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
let currentQuestionIndex = 0;
let correctAnswers = 0;

const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const messageContainer = document.getElementById('message-container');

function showQuestion(index) {
    const q = shuffledQuestions[index];
    questionContainer.innerHTML =
        `<div class="question">
            <p><strong>${index + 1}. ${q.question}</strong></p>
            <ul class="options">
                ${q.options.map((opt, i) => 
                    `<li>
                        <label>
                            <input type="radio" name="question" value="${i}"> ${opt}
                        </label>
                    </li>`
                ).join('')}
            </ul>
        </div>`;
    messageContainer.textContent = ""; // Clear any previous error message
}

nextButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="question"]:checked');
    if (!selectedOption) {
        messageContainer.textContent = "Please select an option before proceeding.";
        messageContainer.className = "error";
        return;
    }

    if (parseInt(selectedOption.value) === shuffledQuestions[currentQuestionIndex].correct) {
        correctAnswers++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(currentQuestionIndex);
    }
    if (currentQuestionIndex === shuffledQuestions.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "block";
    }
});

submitButton.addEventListener('click', () => {
    const totalQuestions = shuffledQuestions.length;
    const wrongAnswers = totalQuestions - correctAnswers;

    questionContainer.innerHTML =
        `<div class="summary">
            <p style="color: bright green;">Correct Answers: ${correctAnswers}</p>
            <p style="color: bright red;">Wrong Answers: ${wrongAnswers}</p>
        </div>`;

    if (correctAnswers >= 10) {
        messageContainer.textContent = "Congratulations! You're proceeding to the next round!";
        messageContainer.className = "success";
        setTimeout(() => window.location.href = "Round2/round2.html", 2000);
    } else {
        messageContainer.textContent = "Better luck next time!";
        messageContainer.className = "error";
    }
});

// Disable copying and text selection
document.addEventListener('copy', (event) => {
    event.preventDefault();
    alert("Copying is not allowed on this page.");
});

// Clear error message on option selection
questionContainer.addEventListener('change', () => {
    messageContainer.textContent = "";
    messageContainer.className = "";
});

showQuestion(currentQuestionIndex);
