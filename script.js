'use strict';
var score, activePlayer, dice, current, btnRoll, btnHold, btnNew, imgp, currentScore, roundScore, playing;
function start() {
    score = [0, 0]
    activePlayer = 0
    currentScore = 0
    playing = true
    // document.getElementById('score--' + activePlayer).textContent = "0"
    document.getElementById('current--1').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('score--0').textContent = 0;
}
start()
btnRoll = document.querySelector(".btn--roll")
btnHold = document.querySelector('.btn--hold')
btnNew = document.querySelector('.btn--new')
imgp = document.querySelector("img")
imgp.style.display = "none";

function switchPlayer() {
    // imgp.style.display = "none"
    document.getElementById('current--1').textContent = 0;
    document.getElementById('current--0').textContent = 0;

    document.querySelector(".player--1").classList.toggle('player--active')
    document.querySelector(".player--0").classList.toggle('player--active')

    document.getElementById('score--' + activePlayer).textContent = score[activePlayer]
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0;

}

function player() {
    if (playing) {
        dice = Math.floor(Math.random() * 6) + 1
        imgp.style.display = "block";
        imgp.src = 'dice-' + dice + '.png'
        // dislay random Number
        // Add dice to current score
        // تخذين الارقام في السكور
        if (dice > 1) {
            currentScore += dice;
            document.getElementById('current--' + activePlayer).textContent = currentScore;
        } else {
            console.log(dice)
            switchPlayer()
        }
    }
}
btnRoll.addEventListener('click', player);

btnHold.addEventListener('click', function () {
    score[activePlayer] += currentScore
    imgp.style.display = "none"

    if (score[activePlayer] >= 20) {
        playing = false
        document.querySelector('.player--' + activePlayer).classList.add('player--winner')
        document.getElementById('name--' + activePlayer).textContent = "WINNER"
        document.getElementById('score--' + activePlayer).textContent = score[activePlayer]
        document.querySelector(".btn--hold").style.display = 'none';
        document.querySelector(".btn--roll").style.display = 'none';


    } else {
        switchPlayer()
    }
})
btnNew.addEventListener('click', function () {
    start()
    // اضافات عشان نلغي استايل الوينر
    document.querySelector('.player--1').classList.remove('player--winner')
    document.querySelector('.player--0').classList.remove('player--winner')
    imgp.style.display = "none"
    document.querySelector(".player--0").classList.remove('player--active')
    document.querySelector(".player--1").classList.remove('player--active')
    document.querySelector(".player--0").classList.add('player--active')
    document.getElementById('name--' + activePlayer).textContent = 'Player'
    document.querySelector(".btn--hold").style.display = 'block';
    document.querySelector(".btn--roll").style.display = 'block';
})
