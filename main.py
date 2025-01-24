def verander_licht():
    pins.digital_write_pin(Rood, 0)
    pins.digital_write_pin(Geel, 1)
    basic.pause(50)
    pins.digital_write_pin(Geel, 0)
    basic.pause(50)
    pins.digital_write_pin(Geel, 1)
    basic.pause(50)
    pins.digital_write_pin(Geel, 0)
    basic.pause(100)
    pins.digital_write_pin(Groen, 1)
Geel = 0
Groen = 0
Rood = 0
pins.digital_write_pin(Rood, 1)
Rood = DigitalPin.P0
Groen = DigitalPin.P1
Geel = DigitalPin.P2

def on_forever():
    basic.show_string("" + str((input.light_level())))
    if input.light_level() <= 10:
        verander_licht()
    else:
        pins.digital_write_pin(Groen, 0)
        pins.digital_write_pin(Rood, 1)
basic.forever(on_forever)
