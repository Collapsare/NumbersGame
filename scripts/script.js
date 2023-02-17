const numsList = document.querySelectorAll(".num")
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
shuffleArray(numbersArray)




numsList.forEach((item, index) => {
    item.style.color = getRandomColor()
    item.style.fontSize = getRandomFontSize(30, 101)
    item.textContent = numbersArray[index]
    
})


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

