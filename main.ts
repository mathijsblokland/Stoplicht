function oranjeKnipper () {
    // Rood uit
    pins.digitalWritePin(RED_PIN, 1)
    // Groen uit
    pins.digitalWritePin(GREEN_PIN, 0)
    // Oranje aan
    pins.digitalWritePin(ORANGE_PIN, 1)
    for (let index = 0; index < 4; index++) {
        // Oranje aan
        pins.digitalWritePin(ORANGE_PIN, 0)
        // Pauzeer 2 seconden
        basic.pause(200)
        // Oranje aan
        pins.digitalWritePin(ORANGE_PIN, 1)
        // Pauzeer 2 seconden
        basic.pause(200)
    }
    // Oranje uit
    pins.digitalWritePin(ORANGE_PIN, 0)
}
// Functie om rood licht aan te zetten
function roodLicht () {
    // Rood aan
    pins.digitalWritePin(RED_PIN, 1)
    // Oranje uit
    pins.digitalWritePin(ORANGE_PIN, 0)
    // Groen uit
    pins.digitalWritePin(GREEN_PIN, 0)
}
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.lightLevel()))
})
// Hoofdfunctie voor het stoplicht
// Controleer of er een auto wordt gedetecteerd
function stoplicht () {
    // Zet standaard rood licht aan
    roodLicht()
    // Variabele om status bij te houden
    while (true) {
        // Meet de lichtwaarde
        lichtwaarde = input.lightLevel()
        if (lichtwaarde < 10 && !(autoGedetecteerd)) {
            // Auto gedetecteerd
            // Update status
            autoGedetecteerd = true
            oranjeKnipper()
            // Zet groene licht aan
            groenLicht()
            // Zet oranje licht aan
            oranjeLicht()
            // Ga terug naar rood
            roodLicht()
        } else if (lichtwaarde >= 10) {
            // Geen auto gedetecteerd
            // Reset status
            autoGedetecteerd = false
        }
        // Pauze om overload te voorkomen
        basic.pause(100)
    }
}
// Functie om oranje licht aan te zetten
function oranjeLicht () {
    // Rood uit
    pins.digitalWritePin(RED_PIN, 0)
    // Oranje aan
    pins.digitalWritePin(ORANGE_PIN, 1)
    // Groen uit
    pins.digitalWritePin(GREEN_PIN, 0)
    // Pauzeer 2 seconden
    basic.pause(1000)
    // Oranje uit
    pins.digitalWritePin(ORANGE_PIN, 0)
}
// Functie om groen licht aan te zetten
function groenLicht () {
    // Rood uit
    pins.digitalWritePin(RED_PIN, 0)
    // Oranje uit
    pins.digitalWritePin(ORANGE_PIN, 0)
    // Groen aan
    pins.digitalWritePin(GREEN_PIN, 1)
    // Pauzeer 5 seconden
    basic.pause(5000)
    // Zet groen uit
    pins.digitalWritePin(GREEN_PIN, 0)
}
let autoGedetecteerd = false
let lichtwaarde = 0
let GREEN_PIN = 0
let ORANGE_PIN = 0
let RED_PIN = 0
// Definieer de GPIO pins voor de LED's
// Rode LED
RED_PIN = DigitalPin.P0
// Oranje LED
ORANGE_PIN = DigitalPin.P2
// Groene LED
GREEN_PIN = DigitalPin.P1
// Initialiseer alle lampen (begin uitgeschakeld)
pins.digitalWritePin(RED_PIN, 0)
pins.digitalWritePin(ORANGE_PIN, 0)
pins.digitalWritePin(GREEN_PIN, 0)
// Start de stoplichtlogica
basic.forever(function () {
    stoplicht()
})
