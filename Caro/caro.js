const board = document.querySelector("#board");
const btnStart = document.querySelector("#btn-start");
const btnReset = document.querySelector("#btn-reset");
const textContent = document.querySelector(".text");
const cells = document.querySelectorAll(".cell");
const container = document.querySelector(".container");
const content = document.querySelector("#content");

const winLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let currentPlayer = "X";
let gameOver = false;

function handleClick(i) {
  if (gameOver || cells[i].textContent !== "") return;

  cells[i].textContent = currentPlayer;

  if (currentPlayer === "X") {
    cells[i].style.color = "red";
  }

  if (checkWin()) {
    textContent.innerHTML = `Người chơi ${currentPlayer} chiến thắng <br> Hãy chiến đấu hết mình !`;
    gameOver = true;
    return;
  }

  if (Array.from(cells).every((c) => c.textContent !== "")) {
    alert("Hòa nha!");
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin() {
  return winLines.some((line) => {
    const [a, b, c] = line;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      cells[a].style.backgroundColor = "#a3fff9";
      cells[b].style.backgroundColor = "#a3fff9";
      cells[c].style.backgroundColor = "#a3fff9";
      return true;
    }

    return false;
  });
}

const gamePlay = () => {
  textContent.innerHTML = `Hãy chiến đấu hết mình !`;
  Array.from(cells).forEach((item, index) =>
    item.addEventListener("click", () => handleClick(index))
  );
};

btnStart.onclick = function () {
  gamePlay();
};

btnReset.onclick = function () {
  if (gameOver) {
    gameOver = false;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    textContent.innerHTML = `Hãy chiến đấu hết mình !`;
    Array.from(cells).forEach((item) => {
      item.textContent = "";
      item.style.color = "#000000";
      item.style.backgroundColor = "#ffffff";
    });
  }
};
