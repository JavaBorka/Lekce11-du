console.log('Všetko baví...')

const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ]

//  Vypište na výstup všechna čísla.

let numbersString = ''

for (let index = 0; index < numbers.length; index++) {
    if (index > 0) {
        numbersString += ', '
    }
    numbersString += numbers[index]
}

console.log(numbersString)

//  Vypište na výstup všechna čísla (cyklus FOR)

console.log('Vypiš všechna čísla, cyklus FOR')

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index])
}

//  Vypište na výstup všechna čísla (cyklus FOR EACH)

console.log('Vypiš všechna čísla, cyklus FOR EACH')

numbers.forEach((number) => {
    console.log(number)    
});


// Vypište na výstup druhé mocniny všech čísel.

console.log('Druhé mocniny')

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]*numbers[index])
}

// Vypište na výstup pouze záporná čísla.

console.log('Pouze záporná čísla')

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < 0) {
        console.log(numbers[index])
    }
}

// Vypište na výstup absolutní hodnotu všech čísel.

console.log('Absolutní hodnota')

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < 0) {
        console.log(-1 * numbers[index])
    } else {
        console.log(numbers[index])
    }
}

// Vypište na výstup pouze sudá čísla.

console.log('Pouze sudá čísla')

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 0) {
        console.log(numbers[index])
    }
}

// Vypište na výstup pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.

console.log('Absolutní hodnota dělitelná 3')

for (let index = 0; index < numbers.length; index++) {
    if (Math.abs(numbers[index]) % 3 === 0) {
        console.log(numbers[index])
    }
    }

// Vypište na výstup jak daleko je každé číslo v seznamu od čísla 5.

/*
console.log('Jak daleko je každé číslo v seznamu od čísla 5.')

const pozicePetky = numbers.length-1
let poziceOstatni = 1

for (let index = 0; index < numbers.length; index++) {
    let vysledek = pozicePetky - poziceOstatni
    console.log('Pozice čísla ' + numbers[index] + ' je od čísla 5 vzdálené o ' + vysledek + ' čísel')
    poziceOstatni += 1    
}
*/

console.log('Jak daleko je každé číslo v seznamu od čísla 5.')

for (let index = 0; index < numbers.length; index++) {
	let vysledek = numbers.indexOf(5) - numbers.indexOf(numbers[index])
    console.log('Pozice čísla ' + numbers[index] + ' je od čísla 5 vzdálená o ' + vysledek + ' čísel')
}

// Spočítejte, kolik je v seznamu záporných čísel.

let pocetZapornych = 0

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < 0) {
        pocetZapornych += 1
    }
}

console.log('Počet záporných čísel v seznamu je ' + pocetZapornych)

// Spočítejte součet všech čísel v poli.

let sum = 0

for (let i = 0; i < numbers.length; i++) {
    sum += 1    
}

console.log('Součet všech čísel v poli je ' + sum)

// Spočítejte průměr všech čísel v poli.

let sum1 = 0

for (let i = 0; i < numbers.length; i++) {
    sum1 += 1    
}

console.log('Průměr všech čísel v poli je ' + sum1/numbers.length)

// Spočítejte součet všech kladných čísel v poli.

let sum2 = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
    sum2 += 1
    }

}

console.log('Součet všech kladných čísel v poli je ' + sum2)