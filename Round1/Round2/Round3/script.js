// Array of questions and answers
const questions = [
  { question: "Write a program to 8011410511011683101991111101007697114103101115116691081011091011101167011411110984104101711051181011106511411497121", answer: "PrintSecondLargestElementFromTheGivenArray" },
  { question: "Write a program to 7711710811610511210812184119111841191117797116114105991011156511010068105115112108971218410410182101115117108116", answer: "MultiplyTwoMatricesAndDisplayTheResult" },
  { question: "Write a program to 831111141166511065114114971217911476105115116791027311011610110310111411573110651159910111010010511010379114100101114", answer: "SortAnArrayOrListOfIntegersInAscendingOrder" },
  { question: "Write a program to 671111171101168611111910110811565110100671111101151111109711011611573110657110511810111083116114105110103", answer: "CountVowelsAndConsonantsInAGivenString" },
  { question: "Write a program to 70105110100841041017610111010311610479102841041017611111010310111511683117981151161141051101038710511610411111711611682101112101971161051101038410410167104971149799116101114115", answer: "FindTheLengthOfTheLongestSubstringWithoutRepeatingCharacters" },
];

let correctAnswer = ""; // Variable to store the correct answer

// Function to load a random question
function loadRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length); // Random index
  const selectedQuestion = questions[randomIndex];

  // Update the question and set the correct answer
  document.getElementById("question").textContent = selectedQuestion.question;
  correctAnswer = selectedQuestion.answer;
}

// Function to check the answer
function checkAnswer() {
  const userAnswer = document.getElementById("answer-box").value.trim();
  const submitBtn = document.getElementById("submit-btn");
  const feedback = document.getElementById("feedback");

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    feedback.textContent = "Correct! You can now submit your answer.";
    feedback.style.color = "green"; // Green text for correct answers
    submitBtn.disabled = false;
  } else {
    feedback.textContent = "Incorrect answer. Please try again.";
    feedback.style.color = "red"; // Red text for incorrect answers
    submitBtn.disabled = true;
  }
}

// Function to handle answer submission
function submitAnswer() {
  window.location.href = "https://www.programiz.com/c-programming/online-compiler"; // Redirect to the next page
}

// Dark mode toggle
function toggleDarkMode() {
  const themeToggle = document.getElementById("theme-toggle");
  document.body.classList.toggle("dark-mode");

  const icon = themeToggle.querySelector("i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

// Disable Copy-Paste in Question and Answer
const questionElement = document.getElementById("question");
const answerBox = document.getElementById("answer-box");

// Disable copy action in question element
questionElement.addEventListener("copy", (event) => {
    event.preventDefault();  // Prevent the default copy action
    alert("Copying is disabled for the question!");  // Show a message
});

// Disable paste action in question element
questionElement.addEventListener("paste", (event) => {
    event.preventDefault();  // Prevent the default paste action
    alert("Pasting is disabled for the question!");  // Show a message
});

// Disable copy action in answer input box
answerBox.addEventListener("copy", (event) => {
    event.preventDefault();  // Prevent the default copy action
    alert("Copying is disabled in the editor!");  // Show a message
});

// Disable paste action in answer input box
answerBox.addEventListener("paste", (event) => {
    event.preventDefault();  // Prevent the default paste action
    alert("Pasting is disabled in the editor!");  // Show a message
});

// Initialize the page with a random question
document.addEventListener("DOMContentLoaded", () => {
  loadRandomQuestion();
  document.getElementById("theme-toggle").addEventListener("click", toggleDarkMode);
});
