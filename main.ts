while (true) {
    if (input.acceleration(Dimension.X) > 0 || input.acceleration(Dimension.X) < 0) {
        light.setPixelColor(9, light.rgb(255, 0, 255))
        music.baDing.playUntilDone()
    }
    
    if (input.acceleration(Dimension.Z) > 400 || input.acceleration(Dimension.Z) < 500) {
        light.setPixelColor(0, light.rgb(255, 255, 0))
        music.wawawawaa.playUntilDone()
    } else {
        light.clear()
    }
    
}
