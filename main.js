let boxes = document.querySelectorAll(".box");
let reset = document.querySelectorAll(".reset");
let msgCtr = document.querySelector(".msg-ctr");
let msg = document.querySelector(".msg");

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

let playerO = true;
let count = 0;

boxes.forEach((x) => {
  x.addEventListener("click", () => {
    if (playerO) {
      x.innerText = "O";
      playerO = false;
    } else {
      x.innerText = "X";
      playerO = true;
    }
    x.disabled = true;
    count += 1;
    checkWinner();
  });
});

const checkWinner = () => {
  winPatterns.forEach((ptrn) => {
    let pos1 = boxes[ptrn[0]].innerText;
    let pos2 = boxes[ptrn[1]].innerText;
    let pos3 = boxes[ptrn[2]].innerText;
    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos3 === pos2) {
        Winner(pos1)
      }
    }
  });
  if (count == 9) {
    msg.innerText = `Match Draw!`;
    msgCtr.classList.remove("hide");
  }
}

const Winner = (win) => {
  msg.innerText = `Congratulations, Winner is ${win}`;
  msgCtr.classList.remove("hide");
  boxes.forEach((box) => {
    box.disabled = true;
  });
}

reset.forEach((resetBtn) => {
  resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
      box.disabled = false;
      box.innerText = "";
    });
    count = 0;
    msgCtr.classList.add("hide");
    playerO = true;
  })
});