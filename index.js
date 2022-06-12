const getInputToggle = document.querySelector(".theme-toggle");
const getBody = document.querySelector("body");
const getTxtTheme = document.querySelector('.text-theme');

const light = "light";

function controlTheme() {
  if(getInputToggle.checked) {
    getBody.classList.toggle(light);
    getTxtTheme.innerHTML = "Go Dark!"
  }
  else {
    getBody.classList.toggle(light);
    getTxtTheme.innerHTML = "Go Light!"
  }
}

getInputToggle.addEventListener("click", controlTheme);

const answers = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]



const getInputQuestion = document.querySelector('#input-quest');
const getButtonQuestion = document.querySelector('#make-quest');
const getAnswerElement = document.querySelector('#answer');
const classIn = 'in';


let myQuestion;
let myAnswer;

function makeQuestion() {
  myQuestion = getInputQuestion.value;
  if(myQuestion == false) {
    alert('Insira uma pergunta');
    return;
  } 

  getAnswerElement.classList.toggle(classIn);

  const totalAnswers = answers.length - 1;
  const getRandom = Math.floor(Math.random() * totalAnswers);
  myAnswer = answers[getRandom];
  
  getAnswerElement.innerHTML = `${myQuestion} <div>${myAnswer}</div>`;

  setTimeout(function() {
    getAnswerElement.classList.toggle(classIn);
  }, 3000)
}

getButtonQuestion.addEventListener('click', makeQuestion);
