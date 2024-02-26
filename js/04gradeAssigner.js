let grade = parseInt(prompt('Enter a number from 1 to 100: '))
if (grade < 1 || grade > 100) {
    alert('Bad input, the number must be from 1 to 100, including 1 and 100. Refresh the page to try again.')
} else if (grade >= 90) {
    console.log('You receieved an A.')
} else if (grade >= 80) {
    console.log('You receieved a B.')
} else if (grade >= 70) {
    console.log('You receieved a C.')
} else if (grade >= 60) {
    console.log('You receieved a D.')
} else {
    console.log('You receieved an F.')
}