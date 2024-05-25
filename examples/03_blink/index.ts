import { gpio_init, gpio_set_dir, gpio_put } from 'pico/hardware';
import { sleep_ms } from 'pico/highlevel';

const led_pin = 13;
const GPIO_OUT = true;

gpio_init(led_pin);
gpio_set_dir(led_pin, GPIO_OUT);

while (true) {
    gpio_put(led_pin, true);
    sleep_ms(250);
    gpio_put(led_pin, false);
    sleep_ms(250);
}