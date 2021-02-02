while (true) {
    if (input.acceleration(Dimension.X) > 0 || input.acceleration(Dimension.X) < 0) {
        light.setAll(light.rgb(255, 0, 255))
    }
    
    if (input.acceleration(Dimension.Y) > 0 || input.acceleration(Dimension.Y) < 0) {
        light.setAll(light.rgb(255, 0, 0))
    }
    
    if (input.acceleration(Dimension.Z) > 0 || input.acceleration(Dimension.Z) < 0) {
        light.setAll(light.rgb(0, 0, 255))
    } else {
        light.clear()
    }
    
}
