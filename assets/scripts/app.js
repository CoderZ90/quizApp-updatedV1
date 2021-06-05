// Javascript.js
const questioBox = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const answers = document.querySelectorAll('.answer');
const submitBtn = document.querySelector('#submit');
const scorePop = document.querySelector('#score');

let questionCount = 0;
let scoreCount = 0;

const loadQuestion = () => {
    const quizList = quizDataBase[questionCount];
    questioBox.innerText = quizList.question;
    option1.innerText = quizList.a;
    option2.innerText = quizList.b;
    option3.innerText = quizList.c;
    option4.innerText = quizList.d;
}

const getCheckedAnswer = () => {
    let userAnswer;
    answers.forEach(currentElem => {
        if (currentElem.checked) {
            userAnswer = currentElem.id;
        }
    });
    return userAnswer;
}

const deSelectAll = () => {
    answers.forEach(currentElem => {
        currentElem.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();
    if (checkedAnswer === quizDataBase[questionCount].ans) {
        alert('Good job! You got it right 😊');
        scoreCount++
    } else {
        alert('Oh no! The answer was incorrect try next time 😞');
    }
    questionCount++
    deSelectAll();
    if (questionCount < quizDataBase.length) {
        loadQuestion();
    } else {
        scorePop.innerHTML = `
            <h3>You Scored ${scoreCount} / ${quizDataBase.length} 🌟</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `
        scorePop.classList.remove('scoreShow');
    }
})

loadQuestion();