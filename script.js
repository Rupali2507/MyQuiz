const questions = [
    {
        question: " what is HTML stands for?",
        answers: [
            {text:"Height text markup Language",correct:false},
            {text:"Hyper text making language",correct:false},
            {text:"Hyper text markup language",correct:true},
            {text:"none",correct:false},
        ]
    },
    {
        question: "If form data contains sensitive or personal information, method to use is?",
        answers: [
            {text:"Get",correct:false},
            {text:"Post ",correct:true},
            {text:"Append",correct:false},
            {text:"set",correct:false},
        ]
    },
    {
        question: "Alpha in RGB extension named RGBA defines?",
        answers: [
            {text:"Hue",correct:false},
            {text:"transparency",correct:false},
            {text:"Opacity",correct:true},
            {text:"none",correct:false},
        ]
    },
    {
        question: " which of the following is true about Bootstarp?",
        answers: [
            {text:"Open source product",correct:false},
            {text:"Front-end Framework",correct:false},
            {text:"gives ability to craete responsive designs",correct:false},
            {text:"All of the above",correct:true},
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