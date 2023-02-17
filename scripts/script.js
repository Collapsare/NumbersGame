let time = 40
let isTimerSet = false
let intervalID;
let rightNumber = 1

const numsList = document.querySelectorAll(".num")
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
const audio = document.getElementById('audio')
const timer = document.querySelector('.timer')
const btnReset = document.getElementById('btn-reset')

shuffleArray(numbersArray)
btnReset.addEventListener('click', resetAll)

numsList.forEach((item, index) => {
    item.style.color = getRandomColor()
    item.style.fontSize = getRandomFontSize(30, 91)
    item.textContent = numbersArray[index]

    item.addEventListener('click', rightAnswer)
    item.addEventListener('click', timeCounting)
    item.addEventListener('click', clearListeners)
})






function clearListeners() {
    if (time <= 0) {
        numsList.forEach((item) => {
            item.removeEventListener('click', rightAnswer)
            item.removeEventListener('click', timeCounting)
        })

    }
}


function resetAll() {
    shuffleArray(numbersArray)
    timer.textContent = 40
    time = 40
    rightNumber = 1
    numsList.forEach((item, index) => {
        item.style.backgroundColor = null
        item.textContent = null
        item.style.color = getRandomColor()
        item.style.fontSize = getRandomFontSize(30, 91)

        item.addEventListener('click', rightAnswer)
        item.addEventListener('click', timeCounting)


        item.textContent = numbersArray[index]
    })
    isTimerSet = false;
    clearInterval(intervalID)
}

function timeCounting() {
    if (!isTimerSet) {
        intervalID = setInterval(function go() {
            if (time <= 0) {
                clearInterval(intervalID)
                alert("Время закончилось")

            }

            timer.textContent = time
            --time
        }, 1000)
        isTimerSet = true
    }


}

function rightAnswer(event) {
    if (+event.target.textContent === rightNumber && time > 0) {

        event.target.style.backgroundColor = 'rgb(169, 43, 43)'
        rightNumber++
        audio.play()
        return
    }

}

function getRandomFontSize(min, max) {
    return Math.floor(Math.random() * (max - min) + min) + 'px';
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
}

