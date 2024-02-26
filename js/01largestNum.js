let firstNum = parseInt(prompt('Enter the first integer you\'d like to compare: '))
let secondNum = parseInt(prompt('Enter the second integer you\'d like to compare: '))
if (firstNum === secondNum) {
    document.write("You entered the same number twice!")
} else if (firstNum > secondNum) {
    document.write(`The first number you entered, ${firstNum}, is greater!`)
} else {
    document.write(`The second number you entered, ${secondNum}, is greater!`)
}