while True: 
    print(input.acceleration(Dimension.X)) 
    if input.acceleration(Dimension.X) > 0 or input.acceleration(Dimension.X) < 0:
        light.set_all(light.rgb(255, 0, 255))
    else:
        light.clear()    