while (true) {
    console.log(input.acceleration(Dimension.X))
    if (input.acceleration(Dimension.X) > 0 || input.acceleration(Dimension.X) < 0) {
        light.setAll(light.rgb(255, 0, 255))
    } else {
        light.clear()
    }
    
}
