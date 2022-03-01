input.onButtonPressed(Button.A, function () {
    Pitch += 1
    basic.showString("" + (Pitch))
})
input.onButtonPressed(Button.B, function () {
    Strike += 1
    basic.showString("" + (Strike))
})
let Strike = 0
let Pitch = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (Pitch == 4) {
        Pitch = 0
        basic.showString("" + (Pitch))
    }
})
basic.forever(function () {
    if (Strike == 3) {
        Strike = 0
        basic.showString("" + (Strike))
    }
})
