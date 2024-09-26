/*let randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);
*/


function diceGame() {
    let playerOne = Math.floor(Math.random() * 5) + 1;
    let playerTwo = Math.floor(Math.random() * 5) + 1;

    if (playerOne > playerTwo) {
        document.getElementById("title").innerHTML = "Player One Wins";
        
    }else if (playerOne === playerTwo) {
        document.getElementById("title").innerHTML = "Its a Draw"
        
    }else{
        document.getElementById("title").innerHTML = "Player Two Wins"
        
    }
    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");
    dice1.src = `images/dice${playerOne}.png`;
    dice2.src = `images/dice${playerTwo}.png`;

}
diceGame()