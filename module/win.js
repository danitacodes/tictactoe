//Winning Combos

export const WIN_COMBOS = [
    [0, 1, 2], //horizontal
    [3, 4, 5], //2nd horizontal
    [6, 7, 8], //3rd horizontal
    [0, 3, 6], //vertical
    [1, 4, 7], //2nd vertical
    [2, 5, 8], //3rd vertical
    [0, 4, 8], //diagonal
    [2, 4, 6] //2nd diagonal
]

//Check for winner
export function checkWin (currentClass, blockElements) {
    let winMatches = [];

    WIN_COMBOS.some(combos => {
       winMatches.push(combos.every(index => {
        return blockElements[index].classList.contains(currentClass)
       }))
    })

    return winMatches || null;
}