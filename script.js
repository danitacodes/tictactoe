import { GAME } from "./module/variables.js";
import { Profile, setHover, markedCell, swapUsers, endGame, isDraw } from "./module/helper.js";
import { checkWin, WIN_COMBOS } from "./module/win.js";

//Game Buttons
GAME.startBtn.addEventListener("click", startGame);
GAME.restartBtn.addEventListener('click', startGame);
GAME.drawBtn.addEventListener('click', startGame);

Profile();

/*Start Game*/
function startGame() {
  setHover();

  //iterate cells and create click event
  GAME.blockElements.forEach((cell) => {
    cell.classList.remove(GAME.X_CLASS);
    cell.classList.remove(GAME.Y_CLASS);
    cell.classList.remove("win");
    cell.removeEventListener('click', handleClick)
    
  GAME.boardElement.classList.remove('hide')
    
    cell.addEventListener("click", handleClick, { once: true });
  });

  GAME.startWindow.classList.add("hide");
  GAME.winEl.classList.remove('show');
  GAME.drawEl.classList.remove('show')
  GAME.winnerImg.children.length ? GAME.winnerImg.removeChild(GAME.winner) : null;
}

//handleClick Function
function handleClick(e) {
  const cell = e.target;
  const currentClass = GAME.turn ? GAME.X_CLASS : GAME.Y_CLASS;
  markedCell(cell, currentClass);

  //check winner
  let flag = checkWin(currentClass, GAME.blockElements).filter((win, index) => {
    if(win) {
    
    //indicate winner
    WIN_COMBOS[index].map(i => {
        GAME.blockElements[i].classList.add("win")
    })

    //set winner
    GAME.winner = GAME.blockElements[WIN_COMBOS[index][0]].cloneNode(true);
    return win !== false;
    }
  });

  //Win or Draw
  if (flag.length) {
    endGame(false, GAME.winEl, GAME.drawEl)
    GAME.winnerImg.append(GAME.winner);
    GAME.boardElement.classList.add('hide')
    
  } else if(isDraw(flag)) {
    endGame(true, GAME.winEl, GAME.drawEl)
    GAME.boardElement.classList.add('hide')
  }


  GAME.turn = swapUsers(GAME.turn);
  setHover();
}
