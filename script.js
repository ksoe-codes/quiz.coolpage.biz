const  quizQuestions=[
    {
        question:"The buoyancy depends on",
        a:"shape of the body",
        b:"mass of the body",
        c:"mass of mass displaced",
        d:" depth to which the body is immersed",
        rigthAns:"ans3"
    } ,
    {
        question:"Red light is used in traffic signals because",
        a:"it looks like danger",
        b:"it is visible to people with even bad eyesight",
        c:"it has the longest wavelength",
        d:"it has the shortest wavelength",
        rigthAns:"ans3"
    } ,
    {
        question:"When light passes from one medium into another, it suffers a change in",
        a:"Frequency, wavelength, and speed",
        b:"Frequency and speed",
        c:"Wavelength and speed",
        d:"Wavelength",
        rigthAns:"ans3"
    } ,
    {
        question:"Which is the smallest possible unit of a chemical compound?",
        a:"Atom",
        b:"Molecule",
        c:"Proton",
        d:"Photon",
        rigthAns:"ans2"
    } ,
    {
        question:"Combustion of candle is",
        a:"Exothermic reaction",
        b:"Photochemical reaction",
        c:"Physical change",
        d:"Endothermic change",
        rigthAns:"ans1"
    } ,
];


const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const answers = document.querySelectorAll(".answer");

const submit = document.querySelector("#submit");
const showScore = document.querySelector("#showScore");
let questionCount = 0;
let score=0;

// Writing an Arrow Function which  sets the question & options fields of html  
const loadQuestion = ()=>{
    // question.innerHTML=quizQuestions[0].question;
    // question.innerHTML = quizQuestions[questionCount].question;    
    let list = quizQuestions[questionCount];
    question.innerText = list.question;
    option1.innerText = list.a;
    option2.innerText = list.b;
    option3.innerText = list.c;
    option4.innerText = list.d;
}

loadQuestion();


// Writing an function to check which input raido buttons are checked and to written them. 
const getCheckedAnswer = ()=>{
    let ans;
    answers.forEach((i)=>{
        if(i.checked){
            ans = i.id;
        }
    });
    return ans;
};


// Writing a function for deselecting the checked options 
const uncheckAnswers = ()=>{
    answers.forEach((i)=>{ i.checked=false;})
} 



//Event Listener -->  When we click on submit Button
submit.addEventListener("click" , ()=>{
    const x = getCheckedAnswer();
    if(x === quizQuestions[questionCount].rigthAns){
        score++;
     }
     questionCount++;
     uncheckAnswers();
     if(questionCount<quizQuestions.length){
         loadQuestion();
     }
     else{
        showScore.innerHTML = 
        `
        <h3 class="h3">Your Score is  ${score}/${quizQuestions.length}    :)</h3>
        <button class="btn" onClick="location.reload()">Play   Again</button>
      `
      showScore.classList.remove("score");
     }
})
