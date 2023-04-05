/********  CVIČENÍ 1 ****************/

// Napište cyklus WHILE, který do konzole postupně vypíše všechny časové údaje v rámci jednoho dne od 0:00 až po 23:59.

console.log('Tady začíná program')

let hodiny = 0

while (hodiny < 24) {
    let minuty = 0

    while (minuty < 59) {
        minuty += 1
        console.log(`${hodiny}:${minuty.toString().padStart(2, "0")}`)
    }

    hodiny += 1
    minuty = 0

    console.log(`${hodiny}:${minuty.toString().padStart(2, "0")}`)
}

// Správné řešení WHILE

/*
let hodiny = 0
while (hodiny < 24) {
	let minuty = 0
	while (minuty < 60) {
		console.log(`${hodiny}:${minuty.toString().padStart(2, '0')}`)
		minuty++
	}
	hodiny++
}
*/

// Správné řešení FOR

/*
for (let hodiny = 0; hodiny < 24; hodiny++) {
	for (let minuty = 0; minuty < 60; minuty++) {
		console.log(`${hodiny}:${minuty.toString().padStart(2, '0')}`)
	}
}
*/