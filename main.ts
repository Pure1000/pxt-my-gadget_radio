enum RadioMessage {
    message1 = 49434,
    message2 = 1435,
    message4 = 29926,
    message3 = 31126,
    message5 = 42976,
    message6 = 19755
}
input.onPinPressed(TouchPin.P0, function () {
    radio.sendMessage(RadioMessage.message4)
})
radio.onReceivedMessage(RadioMessage.message4, function () {
    FRadio = randint(0, 10)
    MRadio = randint(0, 10)
    RRadio = FRadio * MRadio
    basic.showNumber(FRadio)
    basic.showString("*")
    basic.showNumber(MRadio)
    basic.showString("=")
    basic.showNumber(RRadio)
})
radio.onReceivedMessage(RadioMessage.message3, function () {
    MusicRadio = randint(1, 20)
    if (MusicRadio == 1) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
    } else if (MusicRadio == 2) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    } else if (MusicRadio == 3) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.InBackground)
    } else if (MusicRadio == 4) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ode), music.PlaybackMode.InBackground)
    } else if (MusicRadio == 5) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.InBackground)
    } else if (MusicRadio == 6) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.InBackground)
    } else if (MusicRadio == 7) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.InBackground)
    } else if (MusicRadio == 8) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Blues), music.PlaybackMode.InBackground)
    } else if (MusicRadio == 9) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
    } else if (MusicRadio == 10) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wedding), music.PlaybackMode.InBackground)
    } else if (MusicRadio == 11) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
    } else if (MusicRadio == 12) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Punchline), music.PlaybackMode.InBackground)
    } else if (MusicRadio == 13) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Baddy), music.PlaybackMode.InBackground)
    } else if (MusicRadio == 14) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Chase), music.PlaybackMode.InBackground)
    } else if (MusicRadio == 15) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
    } else if (MusicRadio == 16) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
    } else if (MusicRadio == 17) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.InBackground)
    } else if (MusicRadio == 18) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.InBackground)
    } else if (MusicRadio == 19) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
    } else {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
    }
})
input.onButtonPressed(Button.A, function () {
    record.startRecording(record.BlockingState.Blocking)
    radio.sendMessage(RadioMessage.message1)
})
radio.onReceivedMessage(RadioMessage.message6, function () {
    for (let index = 0; index < 2; index++) {
        turtle.setSpeed(17)
        turtle.pen(TurtlePenMode.Up)
        turtle.setPosition(0, 0)
        turtle.forward(-1)
        turtle.forward(-1)
        turtle.forward(-1)
        turtle.forward(-1)
        turtle.turnRight()
        turtle.forward(1)
        turtle.forward(1)
        turtle.forward(1)
        turtle.forward(1)
        turtle.turnRight()
        turtle.forward(-1)
        turtle.forward(-1)
        turtle.forward(-1)
        turtle.forward(-1)
        turtle.turnRight()
        turtle.forward(1)
        turtle.forward(1)
        turtle.forward(1)
        turtle.turnRight()
        turtle.forward(-1)
        turtle.forward(-1)
        turtle.forward(-1)
        turtle.turnRight()
        turtle.forward(1)
        turtle.forward(1)
        turtle.turnRight()
        turtle.forward(-1)
        turtle.forward(-1)
        turtle.turnRight()
        turtle.forward(1)
        turtle.turnRight()
        turtle.forward(-1)
    }
})
radio.onReceivedMessage(RadioMessage.message5, function () {
    IRadio = randint(1, 4)
    if (IRadio == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (IRadio == 2) {
        basic.showIcon(IconNames.Sad)
    } else if (IRadio == 3) {
        basic.showIcon(IconNames.Confused)
    } else {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
        }
    }
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendMessage(RadioMessage.message6)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.message2)
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendMessage(RadioMessage.message5)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendMessage(RadioMessage.message3)
})
radio.onReceivedMessage(RadioMessage.message2, function () {
    basic.showString("you want to be my friend.")
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # . . # .
        . . . # .
        . . # . .
        `)
    record.playAudio(record.BlockingState.Blocking)
})
let IRadio = 0
let MusicRadio = 0
let RRadio = 0
let MRadio = 0
let FRadio = 0
radio.setGroup(1)
radio.setTransmitPower(7)
radio.setFrequencyBand(0)
