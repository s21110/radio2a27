radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 123) {
        basic.showLeds(`
            # . . . .
            . # . # .
            # # # # #
            . # . # .
            # . . . .
            `)
    } else if (receivedNumber == 456) {
        basic.showLeds(`
            . # . # .
            . # . # .
            # # # . .
            # . # # #
            # # # . .
            `)
    } else if (receivedNumber == 789) {
        basic.showLeds(`
            # # . # .
            . # . # .
            . # # # #
            . # . # .
            # # . # .
            `)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(123)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(789)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(456)
})
radio.setGroup(69)
basic.forever(function () {
	
})
