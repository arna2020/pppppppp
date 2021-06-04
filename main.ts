input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.EigthNote)
    music.playMelody("A C5 D F A D C5 A ", 120)
    music.playMelody("C5 C B D A E G E ", 120)
    music.playMelody("C5 C C5 F C A D G ", 120)
    music.playMelody("C5 F G - A B C5 C ", 120)
})
bluetooth.startUartService()
music.playMelody("A C5 D F A D C5 A ", 120)
music.playMelody("C5 C B D A E G E ", 120)
music.playMelody("C5 C C5 F C A D G ", 120)
music.playMelody("C5 F G - A B C5 C ", 120)
basic.showIcon(IconNames.Heart)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showString("Hello! welkom")
music.setVolume(0)
