input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Ghost)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
basic.showIcon(IconNames.Silly)
basic.forever(function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 1, 255, 255, 9999, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    music.setVolume(255)
})
