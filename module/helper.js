import { GAME } from "./variables.js";

//Helper Functions
//Set Selected User
export function Profile () {
    GAME.selectedProfile.forEach(img => {
        img.addEventListener('click', e => {
            let target = e.target.dataset.id;
            removeImgSelected(GAME.selectedProfile)
            document.querySelector(`[data-id='${target}']`).classList.add("selected");

            //Turns
            GAME.turn = target == 'x' ? true : false;
        })
    })
}


//Remove selected
function removeImgSelected(img) {
    [].forEach.call(img, function(el) {
        el.classList.remove("selected")
    })
}

//Set Cell Hover Effect
export function setHover () {
    GAME.boardElement.classList.remove(GAME.X_CLASS);
    GAME.boardElement.classList.remove(GAME.Y_CLASS);

    if (GAME.turn) {
        GAME.boardElement.classList.add(GAME.X_CLASS)
    } else {
        GAME.boardElement.classList.add(GAME.Y_CLASS)
    }
}

//Add Current User to Cell
export function markedCell (cell, currentClass) {
    cell.classList.add(currentClass)
}

//Swap users
export function swapUsers (turn) {
    return turn = !turn;
}

//End Game
export function endGame (draw, winEl, drawEl) {
    if(!draw) {
        winEl.classList.add('show')
        
    } else {
        drawEl.classList.add('show')
    }
}

//Draw
export function isDraw (flag) {
    if(flag.length) return;
    return[...GAME.blockElements].every(cell => {
        return cell.classList.contains(GAME.X_CLASS) || cell.classList.contains(GAME.Y_CLASS)
    })
}