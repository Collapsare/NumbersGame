const numsList = document.querySelectorAll(".num")

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


function getRandomFontSize(min, max) {
    return Math.floor(Math.random() * (max - min) + min) + 'px';
}
numsList.forEach((item) => {
    item.style.color = getRandomColor()
    item.style.fontSize = getRandomFontSize(20, 101)
})
