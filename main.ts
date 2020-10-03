input.onButtonPressed(Button.A, function () {
    _1 = 1
    _2 = 0
    _3 = 0
})
input.onButtonPressed(Button.AB, function () {
    _1 = 1
    _2 = 0
    _3 = 1
})
input.onButtonPressed(Button.B, function () {
    _2 = 1
    _1 = 0
    _3 = 0
})
let _3 = 0
let _2 = 0
let _1 = 0
_1 = 0
_2 = 0
_3 = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, _1)
    pins.digitalWritePin(DigitalPin.P1, _2)
    pins.digitalWritePin(DigitalPin.P2, _3)
})
