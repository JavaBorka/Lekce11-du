/**********  CVIČENÍ 3 - Čekání na šestku *********/


// Napište funkci roll, která simuluje hod kostkou. Vrátí tedy náhodné číslo od 1 do 6 tak, že všechna čísla mají stejnou pravděpodobnost.
// Váš program nechť hází kostkou tak dlouho, až poprvé padne šestka. Vypište na výstup na kolikátý pokus šestka padla.
// Spusťte váš program desetkrát za sebou a zaznamenejte výsledky. Sdílejte vaše výsledky s ostatními abychom nasbírali co nejvíce dat.

const roll = () => {
   return Math.ceil(Math.random() * 6)
} 

let hod = roll()
console.log('Výsledek prvního hodu kostkou je: ' + hod)

let pokus = 1

while (hod != 6) {
    console.log('Tady začíná cyklus a výsledek prvního hodu je: ' + hod)
    hod = roll()
    console.log('Nový výsledek hodu je: ' + hod)
    pokus += 1
    console.log('Toto je pokus č.: ' + pokus)
}

console.log('Šestka se hodila na ' + pokus + '. pokus')