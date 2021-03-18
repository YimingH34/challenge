input.onButtonPressed(Button.A, function () {
    if (true) {
        basic.pause(100)
        led.plot(x, 0)
        led.plot(0, x)
        x += 1
    }
    for (let index = 0; index <= 4; index++) {
        basic.pause(100)
        led.plot(1, index)
        led.plot(index, 1)
    }
    for (let y = 0; y <= 4; y++) {
        basic.pause(100)
        led.plot(2, y)
        led.plot(y, 2)
    }
    for (let number = 0; number <= 4; number++) {
        basic.pause(100)
        led.plot(3, number)
        led.plot(number, 3)
    }
    led.plot(4, 4)
})
let x = 0
x = 0
