const questions = [
    {
        question: "What does AI stands for?",
        answers: [
            { text: "Artificial Intelligence", correct: true },
            { text: "Advanced Intelligence", correct: false }, 
            { text: "Automated Interface", correct: false },
            { text: "Applied Information", correct: false },
        ]
    },
    {
        question: "Which of these is a subset of AI focused on learning from data?",
        answers: [
            { text: "Robotics", correct: false },
            { text: "Machine Learning", correct: true }, 
            { text: "IoT", correct: false },
            { text: "Cloud Computing", correct: false },
        ]
    },
    {
        question: "Who is considered the father of Artificial Intelligence?",
        answers: [
            { text: "Alan Turing", correct: false },
            { text: "John McCarthy", correct: true }, 
            { text: "Marvin Minsky", correct: false },
            { text: "Geoffrey Hinton", correct: false },
        ]
    },
    {
        question: "What is the full form of NLP in AI?",
        answers: [
            { text: "Natural Logic Processing", correct: false },
            { text: "Neural Language Protocol", correct: false }, 
            { text: "Natural Language Processing", correct: true },
            { text: "Network Logic Program", correct: false },
        ]
    },
    {
        question: "Which algorithm is commonly used for classification problems?",
        answers: [
            { text: "K-Means", correct: false },
            { text: "Linear Regression", correct: false }, 
            { text: "Decision Tree", correct: true },
            { text: "PCA", correct: false },
        ]
    },
    {
        question: "What does supervised learning require?",
        answers: [
            { text: "Unlabeled data", correct: false },
            { text: "Predefined rules", correct: false }, 
            { text: "Labeled data", correct: true },
            { text: "Reinforcement signals", correct: false },
        ]
    },
    {
        question: "In neural networks, what does a neuron typically receive?",
        answers: [
            { text: "Strings", correct: false },
            { text: "Images", correct: false }, 
            { text: "Input values and weights", correct: true },
            { text: "HTML tags", correct: false },
        ]
    },
    {
        question: "Which AI field allows machines to understand human voice or text?",
        answers: [
            { text: "Data Mining", correct: false },
            { text: "NLP", correct: true }, 
            { text: "Computer Vision", correct: false },
            { text: "Reinforcement Learning", correct: false },
        ]
    },
    {
        question: " What is overfitting in machine learning?",
        answers: [
            { text: "Training too little", correct: false },
            { text: "Too much data", correct: false }, 
            { text: "Poor model performance", correct: false },
            { text: "Model fits the training data too well but fails on new data", correct: true },
        ]
    },
    {
        question: "Which company developed ChatGPT?",
        answers: [
            { text: "Google", correct: false },
            { text: "OpenAI", correct: true }, 
            { text: "Meta", correct: false },
            { text: "Microsoft", correct: false },
        ]
    },
    {
        question: " What is the primary goal of reinforcement learning?",
        answers: [
            { text: "Minimize loss", correct: false },
            { text: "Maximize reward", correct: true }, 
            { text: "Classify data", correct: false },
            { text: " Clean data", correct: false },
        ]
    },
    {
        question: "What is a dataset?",
        answers: [
            { text: "A set of charts", correct: false },
            { text: "A type of neural network", correct: false }, 
            { text: "A collection of data used for training or testing", correct: true },
            { text: "A programming language", correct: false },
        ]
    },
    {
        question: " In deep learning, what are layers in a neural network called?",
        answers: [
            { text: "Nodes", correct: false },
            { text: "Chains", correct: false }, 
            { text: "Hidden Layers", correct: true },
            { text: "Clusters", correct: false },
        ]
    },
    {
        question: "Which library is commonly used in Python for building machine learning models?",
        answers: [
            { text: "NumPy", correct: false },
            { text: "Pandas", correct: false }, 
            { text: "Matplotlib", correct: false },
            { text: "Scikit-learn", correct: true },
        ]
    },
    {
        question: " What does a confusion matrix help evaluate?",
        answers: [
            { text: "Programming speed", correct: false },
            { text: "Model accuracy", correct: true }, 
            { text: "Confused users", correct: false },
            { text: "Data types", correct: false },
        ]
    },
    {
        question: " Which of these is an AI model that generates images?",
        answers: [
            { text: "CNN", correct: false },
            { text: "GPT", correct: false }, 
            { text: "GAN", correct: true },
            { text: "SVM", correct: false },
        ]
    },
    {
        question: "What does the Turing Test measure?",
        answers: [
            { text: "Data size", correct: false },
            { text: "Training time", correct: false }, 
            { text: "Whether a machine can mimic human intelligence", correct: true },
            { text: "Computer speed", correct: false },
        ]
    },
    {
        question: "What type of learning uses reward and punishment to train models?",
        answers: [
            { text: "Supervised Learning", correct: false },
            { text: "Reinforcement Learning", correct: true }, 
            { text: "Deep Learning", correct: false },
            { text: "Transfer Learning", correct: false },
        ]
    },
    {
        question: " What is the role of an activation function in a neural network?",
        answers: [
            { text: "To store memory", correct: false },
            { text: "To connect layers", correct: false }, 
            { text: "To clean data", correct: false },
            { text: "To decide the output of a node", correct: true },
        ]
    },
    {
        question: "Which of the following is an example of unsupervised learning?",
        answers: [
            { text: "Image classification", correct: false },
            { text: "Linear regression", correct: false }, 
            { text: "K-means clustering", correct: true },
            { text: "Spam detection", correct: false },
        ]
    },
    {
        question: "Which of these can be used to reduce overfitting?",
        answers: [
            { text: "Use regularization", correct: true },
            { text: "Add more layers", correct: false }, 
            { text: "Increase learning rate", correct: false },
            { text: "Use more epochs", correct: false },
        ]
    },
    {
        question: "What is the main goal of computer vision in AI?",
        answers: [
            { text: "Hear sounds", correct: false },
            { text: "Understand human speech", correct: false }, 
            { text: "Interpret visual data like images or videos", correct: true },
            { text: "Store documents", correct: false },
        ]
    },
    {
        question: "What is training in machine learning?",
        answers: [
            { text: "Testing on unseen data", correct: false },
            { text: "Building a dataset", correct: false }, 
            { text: "Using real-time feedback", correct: false },
            { text: "Feeding labeled data to a model to learn patterns", correct: true },
        ]
    },
    {
        question: "Which of these is a subset of AI focused on learning from data?",
        answers: [
            { text: "Training speed", correct: false },
            { text: "Balancing simplicity vs accuracy", correct: true }, 
            { text: "Hardware usage", correct: false },
            { text: " Network latency", correct: false },
        ]
    },
    {
        question: "What does GPT stand for in OpenAI's models?",
        answers: [
            { text: "General Purpose Translator", correct: false },
            { text: "Generative Pretrained Transformer", correct: true }, 
            { text: "Graph Prediction Tool", correct: false },
            { text: " Global Processing Template", correct: false },
        ]
    },
    {
        question: "What is the term for feeding a pre-trained model new data to specialize it?",
        answers: [
            { text: "Training", correct: false },
            { text: "Tuning", correct: false }, 
            { text: "Fine-tuning", correct: true },
            { text: "Compiling", correct: false },
        ]
    },
    {
        question: "Which of the following is NOT a type of neural network?",
        answers: [
            { text: "CNN (Convolutional Neural Network)", correct: false },
            { text: "RNN (Recurrent Neural Network)", correct: false }, 
            { text: "SVM (Support Vector Machine)", correct: true },
            { text: "LSTM (Long Short-Term Memory)", correct: false },
        ]
    },
    {
        question: "Which AI concept is used in self-driving cars to detect objects and traffic signs?",
        answers: [
            { text: "Data mining", correct: false },
            { text: "Web scraping", correct: false }, 
            { text: "Computer Vision", correct: true },
            { text: "Speech Recognition", correct: false },
        ]
    },
    {
        question: "Which Python library is commonly used for deep learning?",
        answers: [
            { text: "NumPy", correct: false },
            { text: "Matplotlib", correct: false }, 
            { text: "TensorFlow", correct: true },
            { text: "Seaborn", correct: false },
        ]
    },
    {
        question: "What does zero-shot learning mean in AI?",
        answers: [
            { text: "Training with no labels", correct: false },
            { text: "Using a model to solve tasks it wasn't specifically trained for", correct: true }, 
            { text: "Testing with random data", correct: false },
            { text: "Using only one example per class", correct: false },
        ]
    },   
];

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register('/sw.js')

}


const questionElement = document.getElementById("question");
const answerButtons = [
    document.getElementById("answer1"),
    document.getElementById("answer2"),
    document.getElementById("answer3"),
    document.getElementById("answer4"),
];
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    
    currentQuestion.answers.forEach((answer, index) => {
        const button = answerButtons[index];
        button.innerText = answer.text;
        button.dataset.correct = answer.correct;
        button.style.display = "block";
        button.className = "btn";
        button.disabled = false;
        button.onclick = () => selectAnswer(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.forEach(button => {
        button.classList.remove("correct", "incorrect");
        button.disabled = false;
    });
}

function selectAnswer(selectedBtn) {
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    answerButtons.forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerText = `🎉 You scored ${score} out of ${questions.length}!`;
    answerButtons.forEach(button => button.style.display = "none");
    nextButton.innerText = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();



