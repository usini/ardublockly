'use strict';

Blockly.Arduino.fastled_init = function() {
  var pin_ledrgb = Blockly.Arduino.valueToCode(this, 'Pin_LedRGB', Blockly.Arduino.ORDER_ATOMIC);
  var numpixels = Blockly.Arduino.valueToCode(this, 'Number_of_Pixels', Blockly.Arduino.ORDER_ATOMIC);

  var definition = "//Install FastLED library\n";
  definition += "#include <FastLED.h>\n";
  definition += "CRGB leds["+numpixels+"];";
  
  Blockly.Arduino.definitions_["define_fastled"] = definition;
  Blockly.Arduino.setups_["setup_fastled"] = 'FastLED.addLeds<NEOPIXEL, '+pin_ledrgb+'>(leds, '+numpixels+');';
  return '';
};

Blockly.Arduino.fastled_set = function() {
  var pixel_number = Blockly.Arduino.valueToCode(this, 'Pixel_number', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var hue = Blockly.Arduino.valueToCode(this, 'Hue', Blockly.Arduino.ORDER_ATOMIC);
  var saturation = Blockly.Arduino.valueToCode(this, 'Saturation', Blockly.Arduino.ORDER_ATOMIC);
  var value = Blockly.Arduino.valueToCode(this, 'Value', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'leds['+pixel_number+'] = CHSV('+hue+','+saturation+','+value+');';
  return code;
};

Blockly.Arduino.fastled_brightness = function() {
  var brightness = Blockly.Arduino.valueToCode(this, 'brightness', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  Blockly.Arduino.setups_["setup_fastled_brightness"] = "FastLED.setBrightness("+brightness+");";
  return "";
};

Blockly.Arduino.fastled_ma = function() {
  var volts = Blockly.Arduino.valueToCode(this, 'volts', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var milliamps = Blockly.Arduino.valueToCode(this, 'milliamps', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  Blockly.Arduino.setups_["setup_fastled_ma"] = 'FastLED.setMaxPowerInVoltsAndMilliamps('+volts+','+milliamps+');';
  return "";
};

Blockly.Arduino.fastled_apply = function() {
  return 'FastLED.show();\n';
};