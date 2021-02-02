while True:  
    if input.acceleration(Dimension.X) > 7 or input.acceleration(Dimension.X) < 7:
        light.set_pixel_color(4,(light.rgb(255, 0, 255)))
    if input.acceleration(Dimension.Z) > 20 or input.acceleration(Dimension.Z) < 20:
        light.set_pixel_color(0,(light.rgb(255, 255, 0)))
    else:
        light.clear()   
        