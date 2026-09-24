document.querySelector("#turn").addEventListener("click", determineTurns);

const delay = ms => new Promise(res => setTimeout(res, ms));

async function determineTurns () {
    let userTurns = document.querySelector("#userTurns").value;

    if (userTurns > 0) {
        let turns = 0;
        for (let i = 0; i < userTurns; i++) {
            turns++;
            document.querySelector("#numberOfTurns").innerHTML = turns;
            await delay(500);
        }
    } else if (userTurns < 0) {
        document.querySelector("#numberOfTurns").innerText = "Please enter a number greater than 0.";
    } else {
        document.querySelector("#numberOfTurns").innerText = "You did not turn the carousel.";
    }
}
