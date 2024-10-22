// Question bank with one correct answer and three wrong answers for each question
const questionBank = [
    {
        question: "Who is attributed for the development of alternating current (AC) electricity?",
        answers: [
            { text: "Nikola Tesla", correct: true, explanation: "" }, // No explanation needed for the correct answer
            { text: "Thomas Edison", correct: false, explanation: "Edison was working on direct current (DC) electricity, not AC." },
            { text: "James Clerk Maxwell", correct: false, explanation: "Maxwell formulated the laws of electromagnetism but did not develop AC electricity." },
            { text: "Michael Faraday", correct: false, explanation: "Faraday is known for electromagnetic induction, which is fundamental but not specific to AC." }
        ]
    },
    {
        question: "Which image shows Nikola Tesla?",
        answers: [
            { image: "images/ima.jpg", correct: false, explanation: "This is Albert Einstein" }, 
            { image: "images/imb.jpg", correct: true, explanation: "" },
            { image: "images/imc.jpg", correct: false, explanation: "This is Guglielmo Marconi" },
            { image: "images/imd.png", correct: false, explanation: "This is Elon Musk" }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz and pick a random question
function startQuiz() {
    score = 0; // Reset score for new game
    const randomIndex = Math.floor(Math.random() * questionBank.length);
    currentQuestionIndex = randomIndex;
    showQuestion(questionBank[currentQuestionIndex]);
}

// Shuffle answers so they appear in random order each time
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestion(question) {
    const questionText = document.getElementById("question-text");
    const answerList = document.getElementById("answer-list");
    const feedback = document.getElementById("feedback");
    
    questionText.textContent = question.question;
    answerList.innerHTML = ''; // Clear previous answers
    feedback.textContent = ''; // Clear feedback

    // Shuffle and display answers
    const shuffledAnswers = [...question.answers];
    shuffleArray(shuffledAnswers);

    shuffledAnswers.forEach((answer) => {
        const button = document.createElement('button');
        button.classList.add('list-group-item', 'list-group-item-action', 'd-flex', 'align-items-center', 'image-button');

        // Check if the answer has an image
        if (answer.image) {
            const img = document.createElement('img');
            img.src = answer.image;
            img.alt = answer.text; // Alt text for accessibility
            img.classList.add('quiz-image', 'me-2'); // Add classes for styling
            button.appendChild(img);
            button.textContent = answer.text; // Adding text to the button for clarity
        } else {
            button.textContent = answer.text; // For text-only answers
        }

        button.onclick = () => handleAnswerSelection(answer);
        answerList.appendChild(button);
    });
}

function handleAnswerSelection(answer) {
    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("next-button");
    const playAgainButton = document.getElementById("play-again-button");

    if (answer.correct) {
        feedback.textContent = "Correct!";
        feedback.classList.add("text-success");
        feedback.classList.remove("text-danger");
        score++;
    } else {
        feedback.textContent = `Wrong! ${answer.explanation}`; // Ensure explanation shows here
        feedback.classList.add("text-danger");
        feedback.classList.remove("text-success");
    }

    nextButton.classList.remove("d-none");
    nextButton.onclick = endQuiz;

    // Show the play again button only after the quiz ends
    playAgainButton.classList.add("d-none");
}


function endQuiz() {
    document.getElementById("question-container").classList.add("d-none");
    document.getElementById("feedback").classList.add("d-none");
    document.getElementById("next-button").classList.add("d-none");

    const scoreText = document.getElementById("score-text");
    scoreText.textContent = `Your score: ${score}/1`;
    scoreText.classList.remove("d-none");

    // Show the play again button
    document.getElementById("play-again-button").classList.remove("d-none");
}

function playAgain() {
    document.getElementById("score-text").classList.add("d-none");
    document.getElementById("play-again-button").classList.add("d-none");
    document.getElementById("question-container").classList.remove("d-none");
    startQuiz();
}

// Initialize the quiz
startQuiz();
