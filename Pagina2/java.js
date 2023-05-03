const squares = document.querySelectorAll(".square");
let appear = 0;
let currentPlayer = "X";
let verif = 0;
let count = 0;
for (let square of squares) {
    square.addEventListener("click", function () {
        if (square.textContent === "") {
            count++;
            console.log(count);
            square.textContent = currentPlayer;
            if (checkForWin(currentPlayer)) {
                //alert(currentPlayer + " wins!");
                document.getElementById("anunt_castigator").innerHTML = "Castigator: " + currentPlayer;
                var element = document.getElementById("anunt_castigator");
                verif = 1;
                element.classList.add("text_animation");
                return;
            }
            if (count === 9) {
                document.getElementById("anunt_castigator").innerHTML = "Remiză!";
                var element = document.getElementById("anunt_castigator");
                element.classList.add("text_animation");
            }
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        }
    });

}


function checkForWin(player) {
    if (
        squares[0].textContent === player &&
        squares[1].textContent === player &&
        squares[2].textContent === player
    ) {
        return true;
    }
    if (
        squares[3].textContent === player &&
        squares[4].textContent === player &&
        squares[5].textContent === player
    ) {
        return true;
    }
    if (
        squares[6].textContent === player &&
        squares[7].textContent === player &&
        squares[8].textContent === player
    ) {
        return true;
    }
    if (
        squares[0].textContent === player &&
        squares[3].textContent === player &&
        squares[6].textContent === player
    ) {
        return true;
    }
    if (
        squares[1].textContent === player &&
        squares[4].textContent === player &&
        squares[7].text
    ) {
        return true;
    }
    if (
        squares[2].textContent === player &&
        squares[5].textContent === player &&
        squares[8].textContent === player
    ) {
        return true;
    }
    if (
        squares[0].textContent === player &&
        squares[4].textContent === player &&
        squares[8].textContent === player
    ) {
        return true;
    }
    if (
        squares[2].textContent === player &&
        squares[4].textContent === player &&
        squares[6].textContent === player
    ) {
        return true;
    }
    return false;
}
