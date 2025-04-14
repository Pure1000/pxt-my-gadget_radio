enum RadioMessage {
    message1 = 49434,
    message2 = 1435
}
input.onButtonPressed(Button.A, function () {
    record.startRecording(record.BlockingState.Blocking)
    radio.sendMessage(RadioMessage.message1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.message2)
})
radio.onReceivedMessage(RadioMessage.message2, function () {
    basic.showString("Quieres ser mi amigo.")
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    basic.showLeds(`
        . # . . #
        . . # . .
        # . # . .
        . . # . .
        . # . . #
        `)
    record.playAudio(record.BlockingState.Blocking)
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        # . . . #
        . . . . .
        . . # . .
        `)
})
