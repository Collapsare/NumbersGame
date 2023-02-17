const fontSizes = ['20px', '25px', '30px', '35px', '40px', '45px', '60px','70px', '80px']
const textColors = ["red", "beige", "burlywood", "coral", "aqua", "darkcyan", "pink", "lawngreen", "fuchsia"]
const numsList = document.querySelectorAll(".num")

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

numsList.forEach((item) => item.style.color = getRandomColor())