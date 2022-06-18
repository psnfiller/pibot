bluetooth.startMagnetometerService()
serial.writeLine(control.deviceName())
serial.writeLine("" + (control.deviceSerialNumber()))
music.playTone(262, music.beat(BeatFraction.Whole))
basic.forever(function () {
	
})
