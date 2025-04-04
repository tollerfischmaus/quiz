function schwer () {
	
}
function startani () {
    music.playMelody("C D E F G A B C5 ", 203)
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(100)
}
function menü () {
    basic.showString("menu")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        # . # . #
        # # # . #
        # . # . #
        `)
    basic.pause(2000)
    basic.showLeds(`
        # # . . #
        # . # . #
        # # . . #
        # . # . #
        # # . . #
        `)
    basic.pause(2000)
    while (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
        basic.showLeds(`
            . . . . #
            . . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.setLedColor(0xff0000)
        basic.pause(2000)
        schwer()
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(2000)
        basic.setLedColor(0x00ff00)
        leicht()
    }
}
function leicht () {
	
}
startani()
menü()
basic.forever(function () {
	
})
