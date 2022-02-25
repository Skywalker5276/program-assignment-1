input.onButtonPressed(Button.A, function () {
    Pitch += 1
    basic.showNumber(Pitch)
})
input.onButtonPressed(Button.AB, function () {
    Pitch = 0
    basic.showNumber(Pitch)
})
input.onButtonPressed(Button.B, function () {
    Strike += 1
    basic.showNumber(Strike)
})
input.onGesture(Gesture.Shake, function () {
    Strike = 0
    basic.showNumber(Strike)
})
let Strike = 0
let Pitch = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
