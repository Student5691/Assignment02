let choice = prompt('Heads of tails? (h/t): ')
let randomNum = Math.round(Math.random()) // 0 will be heads, 1 will be tails
console.log(`0 is heads\t1 is tails\nrandomNum = ${randomNum}`)
if (choice === 'h') {
    if (randomNum === 0) {
        alert('The flip was heads and you chose heads...you win!')
    } else {
        alert('The flip was tails but you chose heads...you lose!')
    }
} else if (choice === 't') {
    if (randomNum === 0) {
        alert('The flip was heads but you chose tails...you lose!')
    } else {
        alert('The flip was tails and you chose tails...you win!')
    }
} else {
    alert('Bad input, you must enter either an "h" for heads of a "t" for tails. Refresh the page to try again!')
}