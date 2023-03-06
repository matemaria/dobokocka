let VeletlenSzam = 0
input.onGesture(Gesture.Shake, function () {
    VeletlenSzam = randint(1, 6)
    basic.showNumber(VeletlenSzam)
})
