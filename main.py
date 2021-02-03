while True:  
    if input.acceleration(Dimension.X) > 0 or input.acceleration(Dimension.X) < 0:
        light.set_pixel_color(9,(light.rgb(255, 0, 255)))
        music.ba_ding.play_until_done()
    if input.acceleration(Dimension.Z) > 400 or input.acceleration(Dimension.Z) < 500:
        light.set_pixel_color(0,(light.rgb(255, 255, 0)))
        music.wawawawaa.play_until_done()
    else:
        light.clear()