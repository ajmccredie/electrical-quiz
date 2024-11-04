// Question bank with one correct answer and three wrong answers for each question
const questionBank = [
    {
        question: "Who is attributed for the development of alternating current (AC) electricity?",
        answers: [
            { text: "Nikola Tesla", correct: true, explanation: "" },
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
    },
    {
        question: "What is the approximate voltage of lightning?",
        answers: [
            { text: "300MV", correct: true, explanation: "(allowing approximately 30kA of current!)" },
            { text: "50V", correct: false, explanation: "This is far too low." },
            { text: "240V", correct: false, explanation: "Nope, this is closer to mains voltage." },
            { text: "40,000MV", correct: false, explanation: "This is far too high!" }
        ]
    },
    {
        question: "What is the maximum number of times someone has reportedly been struck by lightning and lived?",
        answers: [
            { text: "7 times", correct: true, explanation: "(Roy C Sullivan, who was given the nickname “Spark Ranger”)" },
            { text: "0 times", correct: false, explanation: "More than this!" },
            { text: "3 times", correct: false, explanation: "More than this!" },
            { text: "5 times", correct: false, explanation: "More than this!" }
        ]
    },
    {
        question: "In which country would wall outlets and plugs like this be commonly found?",
        questionImage: "images/plugandsocket.jpg", // Ensure correct file extension
        answers: [
            { text: "USA", correct: true, explanation: "" },
            { text: "South Africa", correct: false, explanation: "SA sockets are different to UK ones, but have round pins." },
            { text: "Spain", correct: false, explanation: "Spain, France and a number of other EU countries use round pin plug and sockets." },
            { text: "UK", correct: false, explanation: "The UK plug and socket are three pins all rectangular in shape." }
        ]
    },
    {
        question: "In what decade was three-phase power first generated and used?",
        answers: [
            { text: "1880s", correct: true, explanation: "" },
            { text: "1990s", correct: false, explanation: "You're more than 100 years too late!" },
            { text: "1940s", correct: false, explanation: "The development occurred earlier than this." },
            { text: "1900s", correct: false, explanation: "The innovation happened a bit earlier." }
        ]
    },
    {
        question: "What year was the incandescent lightbulb invented?",
        answers: [
            { text: "1879", correct: true, explanation: "" },
            { text: "1856", correct: false, explanation: "Later than this." },
            { text: "1924", correct: false, explanation: "Earlier than this." },
            { text: "1982", correct: false, explanation: "Considerably earlier than this." }
        ]
    },
    {
        question: "Which of the following Pokemon© is not an “electric type”?",
        answers: [
            { text: "Charmander", correct: true, explanation: "" },
            { text: "Pikachu", correct: false, explanation: "This IS an electric type." },
            { text: "Shinx", correct: false, explanation: "This IS an electric type." },
            { text: "Jolteon", correct: false, explanation: "This IS an electric type." }
        ]
    },
    {
        question: "Who discovered the relationship between electricity and magnetism?",
        answers: [
            { text: "Michael Faraday", correct: true, explanation: "Faraday's experiments showed that a changing magnetic field could produce an electric current, leading to the discovery of electromagnetic induction." },
            { text: "Isaac Newton", correct: false, explanation: "Newton made significant contributions to physics, but his work was primarily in mechanics and gravity, not electromagnetism." },
            { text: "James Clerk Maxwell", correct: false, explanation: "Maxwell formulated the equations describing electromagnetism, but Faraday discovered the foundational principles." },
            { text: "Albert Einstein", correct: false, explanation: "Einstein contributed to modern physics, particularly with relativity, but did not work on the relationship between electricity and magnetism." }
        ]
    },
    {
        question: "Who is credited with the development of the first practical battery?",
        answers: [
            { text: "Alessandro Volta", correct: true, explanation: "Volta created the Voltaic pile in 1800, considered the first practical battery." },
            { text: "Benjamin Franklin", correct: false, explanation: "Franklin conducted pioneering work with electricity, coining terms like 'battery' for an electrical device, but he didn’t create a practical battery." },
            { text: "Thomas Edison", correct: false, explanation: "Edison invented many electrical devices, such as the lightbulb, but he is not credited with inventing the first practical battery." },
            { text: "Hans Christian Ørsted", correct: false, explanation: "Ørsted is known for discovering that electric currents create magnetic fields, not for developing a practical battery." }
        ]
    },
    {
        question: "In what year did the first electric trams begin operating in the UK?",
        answers: [
            { text: "1883", correct: true, explanation: "The first electric trams began operating in the UK in 1883 in the town of Portrush, Northern Ireland." },
            { text: "1890", correct: false, explanation: "Electric trams were in use before 1890, but this is around the time electric trains became more common in underground systems." },
            { text: "1901", correct: false, explanation: "By 1901, electric trams were well-established in several UK cities, making this a late guess." },
            { text: "1865", correct: false, explanation: "1865 is too early; electric tram technology wasn't yet developed at this time." }
        ]
    },
    {
        question: "Which London Underground line was the first to be powered by electricity?",
        answers: [
            { text: "City and South London", correct: true, explanation: "The City and South London Railway, opened in 1890, was the first deep-level underground line powered by electricity." },
            { text: "Central Line", correct: false, explanation: "The Central Line opened later, in 1900, and was also powered by electricity." },
            { text: "Bakerloo Line", correct: false, explanation: "The Bakerloo Line opened in 1906 and was electrically powered, but not the first to do so." },
            { text: "Metropolitan Line", correct: false, explanation: "The Metropolitan Line was the first underground line but initially operated with steam trains, not electricity." }
        ]
    },
    {
        question: "In what year did the first hydroelectric power plant begin generating electricity?",
        answers: [
            { text: "1882", correct: true, explanation: "Appleton, Wisconsin in 1882." },
            { text: "1895", correct: false, explanation: "1895 marks the opening of the Niagara Falls hydroelectric station, not the first plant." },
            { text: "1903", correct: false, explanation: "By 1903, hydroelectric power was well-established, with many plants in operation." },
            { text: "1872", correct: false, explanation: "This is too early; hydroelectric technology was not yet practical at this time." }
        ]
    },
    {
        question: "Which year did the Shanghai Maglev train commence normal operation?",
        answers: [
            { text: "2003", correct: true, explanation: "The Shanghai Maglev, the first high-speed maglev, started normal operation in 2003." },
            { text: "2000", correct: false, explanation: "The Shanghai Maglev project was still under construction in 2000." },
            { text: "2008", correct: false, explanation: "By 2008, the train was already well in operation, with future plans under discussion." },
            { text: "1993", correct: false, explanation: "Construction of the Shanghai Maglev began in 2001, so this is too early." }
        ]
    },
    {
        question: "Which city has the longest electric tram network in the World?",
        answers: [
            { text: "Melbourne", correct: true, explanation: "Melbourne’s tram network spans 245 km, the longest in the world." },
            { text: "Berlin", correct: false, explanation: "Berlin has an extensive tram network but not the longest." },
            { text: "San Francisco", correct: false, explanation: "San Francisco has cable cars and a smaller tram network." },
            { text: "Vienna", correct: false, explanation: "Vienna’s tram network is large but shorter than Melbourne’s." }
        ]
    },
    {
        question: "Which of the following Marvel© characters can control lightning?",
        answers: [
            { text: "Thor", correct: true, explanation: "Thor, the Norse god of thunder, wields the power of lightning with his hammer, Mjolnir." },
            { text: "Iron Man", correct: false, explanation: "Iron Man uses advanced technology and suits but does not have the power to control lightning." },
            { text: "Hawkeye", correct: false, explanation: "Hawkeye is a skilled archer with no lightning abilities." },
            { text: "Black Widow", correct: false, explanation: "Black Widow is a highly trained spy but cannot control lightning." }
        ]
    },
    {
        question: "To which superhero does this symbol belong?",
        questionImage: "images/lightningsuperherosymbol.png", // Ensure correct file extension
        answers: [
            { text: "The Flash", correct: true, explanation: "The lightning bolt symbol is famously associated with The Flash, symbolizing his speed." },
            { text: "Superman", correct: false, explanation: "Superman's symbol is an 'S' shield, not a lightning bolt." },
            { text: "Batman", correct: false, explanation: "Batman’s symbol is a bat silhouette, not a lightning bolt." },
            { text: "Green Lantern", correct: false, explanation: "Green Lantern’s symbol is a green lantern emblem, not a lightning bolt." }
        ]        
    },
    {
        question: "Which country uses highest percentage of renewable energy sources to generate electricity?",
        answers: [
            { text: "Norway", correct: true, explanation: "Norway generates over 99% of its electricity from renewable sources." },
            { text: "Germany", correct: false, explanation: "Germany has made great strides, but it still relies on non-renewable energy sources." },
            { text: "United States", correct: false, explanation: "The U.S. has a diverse energy mix, with a smaller share from renewables." },
            { text: "India", correct: false, explanation: "India has a growing renewable sector, but it still uses a high percentage of fossil fuels." }
        ]
        
    },
    {
        question: "What are the collective names of the ‘good’ and ‘bad’ 'Transformers©'?",
        answers: [
            { text: "Autobots and Decepticons", correct: true, explanation: "Autobots are the ‘good’ Transformers, while Decepticons are their foes." },
            { text: "GoBots and Predacons", correct: false, explanation: "GoBots are from a separate toy line; Predacons are a subgroup of Decepticons." },
            { text: "Protectors and Destructicons", correct: false, explanation: "These names sound fitting but aren’t used in the Transformers series." },
            { text: "Guardians and Ravagers", correct: false, explanation: "These are not groups within Transformers but sound plausible as decoys." }
        ]
    },
    {
        question: "Where is the largest operational Tesla Coil?",
        answers: [
            { text: "New Zealand", correct: true, explanation: "New Zealand houses a Tesla Coil with a capacity of 130kW on a 12m structure." },
            { text: "United States", correct: false, explanation: "While Tesla Coils are popular in the U.S., it does not house the largest operational one." },
            { text: "Russia", correct: false, explanation: "Russia has some large Tesla Coils, but none as large as the one in New Zealand." },
            { text: "Japan", correct: false, explanation: "Japan has advanced technology, but the largest Tesla Coil is not located here." }
        ]
        
    },
    {
        question: "As an approximate average, how many times is the Empire State Building recorded as being struck by lightning each year?",
        answers: [
            { text: "25", correct: true, explanation: "The Empire State Building is struck by lightning around 25 times per year on average." },
            { text: "5", correct: false, explanation: "This is too low; tall structures like the Empire State Building are struck more frequently." },
            { text: "50", correct: false, explanation: "50 is higher than the recorded average, though it can occasionally be struck this often in active years." },
            { text: "100", correct: false, explanation: "This is much higher than the recorded average, which is closer to 25 times per year." }
        ]        
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

function startQuiz() {
    score = 0;
    selectedQuestions = shuffleArray([...questionBank]).slice(0, 15); // Randomly select 4 questions
    currentQuestionIndex = 0;
    updateProgress();
    showQuestion(selectedQuestions[currentQuestionIndex]);
}

// Shuffle answers so they appear in random order each time
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array; // Return the shuffled array
}

function updateProgress() {
    const progress = document.getElementById("progress");
    progress.innerHTML = ''; // Clear previous progress
    for (let i = 0; i < selectedQuestions.length; i++) {
        const icon = document.createElement("span");
        icon.classList.add("progress-icon", "pending");
        icon.textContent = "●";
        progress.appendChild(icon);
    }
}

function showQuestion(question) {
    const questionText = document.getElementById("question-text");
    const answerList = document.getElementById("answer-list");
    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("next-button");

    questionText.textContent = question.question;
    answerList.innerHTML = ''; // Clear previous answers
    feedback.textContent = ''; // Clear feedback

    // Display the question image if it exists
    if (question.questionImage) {
        const questionImage = document.createElement('img');
        questionImage.src = question.questionImage;
        questionImage.alt = "Question Image";
        questionImage.style.width = "150px";
        questionImage.style.height = "auto";
        questionImage.style.display = "block";
        questionImage.style.margin = "10px auto";
        questionText.appendChild(questionImage);
    }

    const shuffledAnswers = shuffleArray([...question.answers]);

    shuffledAnswers.forEach((answer) => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-6', 'col-sm-12', 'mb-3'); 

        const button = document.createElement('button');
        button.classList.add(answer.image ? 'image-button' : 'text-answer-button');

        if (answer.image) {
            const img = document.createElement('img');
            img.src = answer.image;
            img.alt = answer.text || "Answer Image";
            img.style.width = "120px";
            img.style.height = "120px";
            img.style.objectFit = "cover";
            img.style.borderRadius = "8px";
            img.style.marginBottom = "10px";
            button.appendChild(img);
        }

        const text = document.createElement('span');
        text.textContent = answer.text;
        button.appendChild(text);

        button.onclick = () => handleAnswerSelection(answer, button);
        colDiv.appendChild(button);
        answerList.appendChild(colDiv);
    });

    // Change button text to "End Quiz" if this is the last question
    nextButton.textContent = currentQuestionIndex === selectedQuestions.length - 1 ? "End Quiz" : "Next Question";
}

function handleAnswerSelection(answer, selectedButton) {
    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("next-button");
    const answerList = document.getElementById("answer-list");

    feedback.classList.remove("text-danger", "text-success");

    let isCorrect = answer.correct;

    // Set feedback text with explanation if available
    if (isCorrect) {
        feedback.textContent = `Correct! ${answer.explanation || ""}`;
        feedback.classList.add("text-success"); // Ensure text is green for correct answers
        score++;
    } else {
        feedback.textContent = `Wrong! ${answer.explanation}`;
        feedback.classList.add("text-danger"); // Red for incorrect answers
    }

    addProgressIcon(isCorrect);

    // Hide unselected answers
    Array.from(answerList.children).forEach((colDiv) => {
        if (!colDiv.contains(selectedButton)) {
            colDiv.style.display = "none";
        }
    });

    feedback.classList.remove("d-none");
    nextButton.classList.remove("d-none");
    nextButton.onclick = nextQuestion;
}


function addProgressIcon(isCorrect) {
    const progress = document.getElementById("progress").children[currentQuestionIndex];
    progress.classList.remove("pending");
    progress.classList.add(isCorrect ? "correct" : "incorrect");
    progress.textContent = isCorrect ? "✓" : "✗";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion(selectedQuestions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("question-container").classList.add("d-none");
    document.getElementById("feedback").classList.add("d-none");
    document.getElementById("next-button").classList.add("d-none");

    const scoreText = document.getElementById("score-text");
    scoreText.textContent = `Your score: ${score}/${selectedQuestions.length}`;
    scoreText.classList.remove("d-none");

    document.getElementById("play-again-button").classList.remove("d-none");
}

function playAgain() {
    document.getElementById("score-text").classList.add("d-none");
    document.getElementById("play-again-button").classList.add("d-none");
    document.getElementById("question-container").classList.remove("d-none");
    document.getElementById("progress").innerHTML = ''; 
    startQuiz();
}

document.addEventListener("DOMContentLoaded", startQuiz);
