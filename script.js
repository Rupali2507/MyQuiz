const questions = [
    {
        question: " which is HTML stands for?",
        answers: [
            {text:"Height text markup Language",correct:false},
            {text:"Hyper text making language",correct:false},
            {text:"Hyper text markup language",correct:true},
            {text:"none",correct:false},
        ]
    },
    {
        question: " which is CSS stands for?",
        answers: [
            {text:"Cascading Stylish Sheets",correct:false},
            {text:"Cascading Style Sheets ",correct:true},
            {text:"Cascading style Store",correct:false},
            {text:"none",correct:false},
        ]
    },
    {
        question: " which function calls itself?",
        answers: [
            {text:"Recursion",correct:true},
            {text:"User defined",correct:false},
            {text:"both",correct:false},
            {text:"none",correct:false},
        ]
    },
    {
        question: " which of the follwing can redefine as well as reintialize?",
        answers: [
            {text:"var",correct:true},
            {text:"let",correct:false},
            {text:"const",correct:false},
            {text:"none",correct:false},
        ]

    },
    {
        question: "which of the below is used in java script to insert special characters?",
        answers: [
            {text:"&",correct:false},
            {text:"~",correct:false},
            {text:"-",correct:false},
            {text:"%",correct:true},
        ]
    }
];
const questionElement =document.getElementById("question");
const answerButton =document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +"."+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button); 
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.button= " none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {selectedBtn.classList.add("correct");
        score++;
    }
    else selectedBtn.classList.add("incorrect");
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored  ${score} out of ${questions.length}`;
    nextButton.innerHTML="Play again";
    nextButton.style.display ="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
          showQuestion();
    }
    else showScore();
}
nextButton.addEventListener("click",() =>{
    if(currentQuestionIndex<questions.length){
        handleNextButton()
    }
    else startQuiz();
})
startQuiz();