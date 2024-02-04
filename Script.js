const questions=[
    {
        question:"Name of the first Atomic Submarine of India?",
        answers:[
            {text:" I.N.S Chakra", correct:true},
            {text:"R.N. Shukla", correct:false},
            {text:"V.R. Gill", correct:false},
            {text:" D.B. Mahawar", correct:false}
        ]
    },
    {
        question:"Name of the first university of India?",
        answers:[
            {text:"Taxshila University", correct:false},
            {text:"Jawahar University", correct:false},
            {text:"Nalanda University", correct:true},
            {text:"Dronacharya University", correct:false}
        ] 
    },
    {
        question:"Where is India's First nuclear centre?",
        answers:[
            {text:" Jaipur", correct:false},
            {text:"Raipur", correct:false},
            {text:" Tarapur", correct:true},
            {text:"Kanpur", correct:false}
        ] 
    },
    {
        question:" Where was the first Post Office opened in India?",
        answers:[
            {text:" Madras in 1928", correct:false},
            {text:" Delhi in 1230", correct:false},
            {text:"Asaam in 1827", correct:false},
            {text:"Kolkata in 1727", correct:true}
        ] 
    },
    {
        question:" In which year was Napoleon finally defeated in the Battle of Waterloo?",
        answers:[
            {text:"1851", correct:false},
            {text:"1815", correct:true},
            {text:"1920", correct:false},
            {text:"1902", correct:false}
        ] 
    },
    {
        question:" A can do a piece of work in 6 days and B in 9 days. How many days will both take together to complete the work?",
        answers:[
            {text:"7.5 days", correct:false},
            {text:"3 days", correct:false},
            {text:"5.4 days", correct:false},
            {text:"3.6 days", correct:true}
        ] 
    },
    {
        question:"  Divide Rs. 7,500 among A, B and C such that A’s share to B’s share is in the ratio 5:2 and B’s share to C’s share is in the ratio 7 : 13. How much will B receive ?",
        answers:[
            {text:"Rs.3,500", correct:false},
            {text:"Rs.1,400", correct:true},
            {text:"Rs.7,000", correct:false},
            {text:"Rs.2,600", correct:false}
        ] 
    },
    {
        question:" In a certain code, the word COMPAQ is written as DQNRBS and SONY is written as TQOA. In the same code, how is MOTOROLA written?",
        answers:[
            {text:"NPUPSPMB", correct:false},
            {text:"NQUQSQMC", correct:true},
            {text:"OPUPUPIB", correct:false},
            {text:") INUNSNMB", correct:false}
        ] 
    },
    {
        question:" In a row of people all facing north, Prince is 5th from the right end. Amit is 15th from the right end. Amit is exactly between Prince and Aditya. If Aditya is sixth from the left end of the line, how many people are there in the row?",
        answers:[
            {text:"30", correct:true},
            {text:"31", correct:false},
            {text:"25", correct:false},
            {text:"35", correct:false}
        ] 
    },
    {
        question:"Antoname of 'ARTIFICIAL'",
        answers:[
            {text:"Truthful", correct:false},
            {text:"Red", correct:false},
            {text:"Natural", correct:true},
            {text:"Solid", correct:false}
        ] 
    }
    
];
const QuestionElement =document.getElementById("Question");
const answerButtons = document.getElementById("Answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
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
    let questionNo = currentQuestionIndex +1;
    QuestionElement.innerHTML = questionNo +". "+currentQuestion.question;
    
    currentQuestion.answers.forEach(answer =>{
        const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectBtn =e.target;
    const isCorrect=selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block";
}
function showScore(){
     resetState();
    QuestionElement.innerHTML =`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
})
startQuiz();