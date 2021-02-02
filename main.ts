while (true) {
    if (input.acceleration(Dimension.X) > 7 || input.acceleration(Dimension.X) < 7) {
        light.setPixelColor(4, light.rgb(255, 0, 255))
    }
    
    if (input.acceleration(Dimension.Z) > 20 || input.acceleration(Dimension.Z) < 20) {
        light.setPixelColor(0, light.rgb(255, 255, 0))
    } else {
        light.clear()
    }
    
}
