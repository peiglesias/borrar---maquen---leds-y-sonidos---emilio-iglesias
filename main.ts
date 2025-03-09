input.onButtonPressed(Button.A, function () {
    maqueenPlusV2.setRgblLed(maqueenPlusV2.DirectionType.Right, maqueenPlusV2.CarLightColors.Red)
    basic.pause(100)
    maqueenPlusV2.setRgblLed(maqueenPlusV2.DirectionType.Right, maqueenPlusV2.CarLightColors.Yellow)
    basic.pause(100)
    maqueenPlusV2.setRgblLed(maqueenPlusV2.DirectionType.Right, maqueenPlusV2.CarLightColors.Black)
})
input.onButtonPressed(Button.AB, function () {
    maqueenPlusV2.setRgblLed(maqueenPlusV2.DirectionType.Left, maqueenPlusV2.CarLightColors.Red)
    basic.pause(100)
    maqueenPlusV2.setRgblLed(maqueenPlusV2.DirectionType.Left, maqueenPlusV2.CarLightColors.Yellow)
    basic.pause(100)
    maqueenPlusV2.setRgblLed(maqueenPlusV2.DirectionType.Right, maqueenPlusV2.CarLightColors.Black)
    music.play(music.createSoundExpression(
    WaveShape.Noise,
    500,
    499,
    255,
    0,
    5337,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    maqueenPlusV2.setRgblLed(maqueenPlusV2.DirectionType.Left, maqueenPlusV2.CarLightColors.Red)
    basic.pause(100)
    maqueenPlusV2.setRgblLed(maqueenPlusV2.DirectionType.Left, maqueenPlusV2.CarLightColors.Yellow)
    basic.pause(100)
    maqueenPlusV2.setRgblLed(maqueenPlusV2.DirectionType.Right, maqueenPlusV2.CarLightColors.Black)
    music.play(music.createSoundExpression(
    WaveShape.Sine,
    5000,
    0,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    maqueenPlusV2.setBrightness(255)
    maqueenPlusV2.setRgblLed(maqueenPlusV2.DirectionType.All, maqueenPlusV2.CarLightColors.Purple)
    for (let index = 0; index < 2; index++) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.InBackground)
    }
    maqueenPlusV2.setRgblLed(maqueenPlusV2.DirectionType.All, maqueenPlusV2.CarLightColors.Green)
    basic.pause(100)
})
music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.InBackground)
basic.forever(function () {
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
})
