#include "resistor_color_duo.h"
 
uint16_t color_code(resistor_band_t *color_arr) {
    int resistance_value = 0;
    int i = 0;
    resistance_value = color_arr[i];
    resistance_value = color_arr[++i]+(resistance_value*10);
    return resistance_value;
}