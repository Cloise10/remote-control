basic.showIcon(IconNames.Chessboard)
radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("mgx", input.acceleration(Dimension.X))
    radio.sendValue("mgy", input.acceleration(Dimension.Y))
})
