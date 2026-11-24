let player = "O"
let gameOver = false

function playerClick(cellId) {

    if (gameOver) return

    let cell = document.getElementById(cellId)

    if (cell.innerHTML != "") return

    cell.innerHTML = player

    checkWinner()

    if (gameOver) return

    if (player == "O")
        player = "X"
    else
        player = "O"

    document.getElementById("result").innerHTML = player + "'s turn"
}


function checkWinner() {

    let c1 = document.getElementById('c1').innerHTML
    let c2 = document.getElementById('c2').innerHTML
    let c3 = document.getElementById('c3').innerHTML
    let c4 = document.getElementById('c4').innerHTML
    let c5 = document.getElementById('c5').innerHTML
    let c6 = document.getElementById('c6').innerHTML
    let c7 = document.getElementById('c7').innerHTML
    let c8 = document.getElementById('c8').innerHTML
    let c9 = document.getElementById('c9').innerHTML

    if (player == c1 && player == c2 && player == c3) {
        document.getElementById("result").innerHTML = player + " won the game"
        gameOver = true
    }

    else if (player == c4 && player == c5 && player == c6) {
        document.getElementById("result").innerHTML = player + " won the game"
        gameOver = true
    }

    else if (player == c7 && player == c8 && player == c9) {
        document.getElementById("result").innerHTML = player + " won the game"
        gameOver = true
    }

    else if (player == c1 && player == c4 && player == c7) {
        document.getElementById("result").innerHTML = player + " won the game"
        gameOver = true
    }

    else if (player == c2 && player == c5 && player == c8) {
        document.getElementById("result").innerHTML = player + " won the game"
        gameOver = true
    }

    else if (player == c3 && player == c6 && player == c9) {
        document.getElementById("result").innerHTML = player + " won the game"
        gameOver = true
    }

    else if (player == c1 && player == c5 && player == c9) {
        document.getElementById("result").innerHTML = player + " won the game"
        gameOver = true
    }

    else if (player == c3 && player == c5 && player == c7) {
        document.getElementById("result").innerHTML = player + " won the game"
        gameOver = true
    }
    else if (
    c1 != "" && c2 != "" && c3 != "" &&
    c4 != "" && c5 != "" && c6 != "" &&
    c7 != "" && c8 != "" && c9 != ""
) {
    document.getElementById("result").innerHTML = "Game Draw!"
    gameOver = true
}
}