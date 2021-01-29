while (true) {
    console.log(input.rotation(Rotation.Roll))
    if (input.rotation(Rotation.Roll) > 0 || input.rotation(Rotation.Roll) < 0) {
        light.setAll(light.rgb(255, 0, 255))
    } else {
        light.clear()
    }
    
}
