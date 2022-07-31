const btnSquare = document.querySelectorAll('.btnSquare');
console.log(btnSquare);

const colorClick = {
  red: 0,
  lime: 0,
  purple: 0,
};

btnSquare.forEach((square) => {
  square.onclick = () => {
    colorClick[square.value]++;
    square.textContent = colorClick[square.value];
    square.style.fontWeight = 'bold';
    square.style.fontSize = '25px';
  };
});

const clearBtn = document.getElementById('clear');

function clearScore() {
  colorClick.red = 0;
  colorClick.lime = 0;
  colorClick.purple = 0;

  btnSquare.forEach((dataClear) => {
    dataClear.innerText = '';
  });
}

clearBtn.onclick = () => clearScore();
