basic.forever(function () {
    if (input.temperature() <= 18) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        music.play(music.stringPlayable("B G - E G A D C5 ", 120), music.PlaybackMode.UntilDone)
    }
    if (input.temperature() >= 18 && input.temperature() >= 29) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.pause(1000)
        music.play(music.stringPlayable("C5 B A G F E D C ", 500), music.PlaybackMode.UntilDone)
    }
    if (input.temperature() <= 29) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.pause(1000)
        music.play(music.stringPlayable("C5 E A E F E D B ", 822), music.PlaybackMode.UntilDone)
    }
    basic.clearScreen()
})
