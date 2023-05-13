radio.onReceivedString(function (receivedString) {
    if (receivedString == "stop") {
        joystickbit.Vibration_Motor(100)
    }
})
joystickbit.initJoystickBit()
radio.setGroup(1)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 650) {
        radio.sendString("forward")
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) <= 550) {
        radio.sendString("brake")
    }
})
