radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . . # . .
        # # # # #
        # . # . #
        # # # # #
        # . . . #
        `)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(63)
})
radio.setGroup(69)
basic.forever(function () {
	
})
