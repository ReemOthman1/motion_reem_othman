while True:  
    if input.acceleration(Dimension.X) > 7 or input.acceleration(Dimension.X) < 7:
        light.set_all(light.rgb(255, 0, 255))
    if input.acceleration(Dimension.Y) > 20 or input.acceleration(Dimension.Y) < 20:
        light.set_all(light.rgb(255, 255, 0))
    else:
        light.clear()    
        