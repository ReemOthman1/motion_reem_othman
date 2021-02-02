while True:  
    if input.acceleration(Dimension.X) > 0 or input.acceleration(Dimension.X) < 0:
        light.set_all(light.rgb(255, 0, 255))
    if input.acceleration(Dimension.Y) > 0 or input.acceleration(Dimension.Y) < 0:
        light.set_all(light.rgb(255, 0, 0))
    if input.acceleration(Dimension.Z) > 0 or input.acceleration(Dimension.Z) < 0:
        light.set_all(light.rgb(0, 0, 255))
    else:
        light.clear()    
        