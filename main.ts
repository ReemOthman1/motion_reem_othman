while (true) {
    if (input.acceleration(Dimension.X) > 7 || input.acceleration(Dimension.X) < 7) {
        light.setAll(light.rgb(255, 0, 255))
    }
    
    if (input.acceleration(Dimension.Y) > 20 || input.acceleration(Dimension.Y) < 20) {
        light.setAll(light.rgb(255, 255, 0))
    } else {
        light.clear()
    }
    
}
