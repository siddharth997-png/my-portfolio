const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById("board");
const winningMessageText = document.querySelector('[winning-message-text]');
const winningMessage = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
var oClass = false;
const X_CLASS = 'x';
const O_CLASS = 'o';
const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

startGame();
restartButton.addEventListener('click',function(){
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(O_CLASS);
        cell.removeEventListener('click',handleClick);
    });
    winningMessage.style.display = "none";
    startGame();
    oClass = false;
})

function startGame() {
    cellElements.forEach(cell => {
        cell.addEventListener('click',handleClick,{once:true})
    })
    setBoardHoverClass();
}
function handleClick(e) {
    //console.log("clicked!");
    const cell = e.target;
    const currentClass = oClass ? O_CLASS : X_CLASS;
    placeMark(cell,currentClass);
    if(checkWin(X_CLASS)) {
        endGame(true,X_CLASS);
    } else if(isDraw()) {
        endGame(false,currentClass);
    } else {
        bestMove(currentClass);
        //setBoardHoverClass(currentClass);
    }
}

function placeMark(cell,currentClass) {
    cell.classList.add(currentClass)
} 

function switchTurns() {
    oClass = !oClass;
} 

function setBoardHoverClass(currentClass) {
    board.classList.remove(X_CLASS);
    board.classList.remove(O_CLASS);
    if(currentClass == X_CLASS) {
        board.classList.add(O_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }

} 

function checkWin(currentClass) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        });
    });
} 

function isDraw() {
    return [...cellElements].every(index => {
        return index.classList.contains(X_CLASS) || index.classList.contains(O_CLASS);
    })
} 

function endGame(win,currentClass) {
    if(win == true) {
        if(currentClass == X_CLASS){
            winningMessageText.innerHTML = "X wins!";
        } else {
            winningMessageText.innerHTML = "O wins!";
        }
    } else {
        winningMessageText.innerHTML = "Draw";
    }
    winningMessage.style.display = 'flex';
} 

function bestMove() {
    let bestScore = Infinity;
    let move,score;
    for(var i=0;i<9;i++) {
        if(!cellElements[i].classList.contains(X_CLASS) && !cellElements[i].classList.contains(O_CLASS)) {

            cellElements[i].classList.add(O_CLASS);
            score = miniMax(X_CLASS);
            cellElements[i].classList.remove(O_CLASS);
            if(score < bestScore) {
                bestScore = score;
                move = i;
            }
        }
    } 
    cellElements[move].classList.add(O_CLASS);
    if(checkWin(O_CLASS)) {
        endGame(true,O_CLASS);
    } else if(isDraw()) {
        endGame(false,currentClass);
    }
}

function miniMax(currentClass) {
    if(checkWin(X_CLASS)) {
        return 1;
    } else if(checkWin(O_CLASS)) {
        return -1;
    } else if(isDraw()) {
        return 0;
    } if(currentClass == X_CLASS) {
        let bestScore = -Infinity;
        for(var i=0;i<9;i++) {
            if(!cellElements[i].classList.contains(X_CLASS) && !cellElements[i].classList.contains(O_CLASS)) {

                cellElements[i].classList.add(X_CLASS);
                let score = miniMax(O_CLASS);
                cellElements[i].classList.remove(X_CLASS);
                if(score>bestScore) {
                    bestScore = score;
                }
            }
        } return bestScore;

    } else {

        let bestScore = Infinity;
        for(var i=0;i<9;i++) {

            if(!cellElements[i].classList.contains(X_CLASS) && !cellElements[i].classList.contains(O_CLASS)) {

                cellElements[i].classList.add(O_CLASS);
                let score = miniMax(X_CLASS);
                cellElements[i].classList.remove(O_CLASS);
                if(score < bestScore) {
                    bestScore = score;
                }
            }
        } return bestScore;

    }return 1;
}
