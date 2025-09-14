// Array of questions and answers
const questions = [
  { question: "871011089911110910184111717785110105118101114115105116121", answer: "WelcomeToGMUniversity" },
  { question: "737178738482797884119111758411911170111117114", answer: "IGNITRONTwoKTwoFour" },
  { question: "87101108991111091018411179117114841019910470101115116", answer: "WelcomeToOurTechFest" },
  { question: "83109971141168711111410773115841041017510112170111114831179999101115115", answer: "SmartWorkIsTheKeyForSuccess" },
  { question: "6510810884104101661011151167011111467111110116101115116", answer: "AllTheBestForContest" },
  { question: "711111111007611799107701111148410410167111109112101116105116105111110", answer: "GoodLuckForTheCompetition" },
  { question: "79110108121841041016610111511677105110100115871051081088011410111897105108", answer: "OnlyTheBestMindsWillPrevail" },
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
  window.location.href = "Round3/round3.html"; // Redirect to the next page
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
