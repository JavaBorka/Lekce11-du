console.log('Funguju')

/*********  PŘÍKLAD 2  ************/

// 1. Potrebujem funkciu play, ktorá mi zapne zvuk a vypíše tón
// 2. Potrebujem vytvoriť udalosť - pri zmáčknutní konkrétneho tlačíka sa mi zavolá funkcia play.
// 3. Všetkým tlačítkam musím zapnúť poslucháča - použijem cyklus for

const label = document.querySelector('h1')

const play = (evElement) => {
    console.log('zavolala se funkce play')
    const ton = evElement.textContent
    label.textContent = ton

    const zvuk = new Audio(`tony/${ton}.mp3`)
    
    zvuk.play()    
}

const eventFunction = (event) => {
    console.log('zavolala se funkce eventFunction')
    play(event.target)
}

const buttons = document.querySelectorAll('.kamen')

// buttons = [button1, button2, button3, ...]

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener('click', eventFunction)
}