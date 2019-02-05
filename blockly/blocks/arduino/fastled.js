/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino Stepper library.
 *     The Arduino Servo functions syntax can be found in the following URL:
 *     http://arduino.cc/en/Reference/Stepper
 *     Note that this block uses the Blockly.FieldInstance instead of
 *     Blockly.FieldDropdown which generates a unique instance per setup block
 *     in the workspace.
 */
'use strict';

goog.provide('Blockly.Blocks.fastled');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.fastled.HUE = 80;

Blockly.Blocks['fastled_init'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ajouter des DELs neopixels")
      this.appendValueInput("Pin_LedRGB" , 'Number')
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Sur la broche");
      this.appendValueInput("Number_of_Pixels" , 'Number')
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Nombre de DELS");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF0000");
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };
  
  Blockly.Blocks['fastled_set'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Changer la couleur")
      this.appendValueInput("Hue" , 'Number')
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("H");
      this.appendValueInput("Saturation" , 'Number')
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("S");
      this.appendValueInput("Value" , 'Number')
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("V");
      this.appendValueInput("Pixel_number" , 'Number')
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("N°");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF0000");
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.Blocks['fastled_brightness'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Règler la luminosité");
      this.appendValueInput("brightness" , 'Number')
          .setAlign(Blockly.ALIGN_RIGHT)
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF0000");
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.Blocks['fastled_ma'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Limiter la consommation électrique");
      this.appendValueInput("volts" , 'Number')
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("V");
      this.appendValueInput("milliamps" , 'Number')
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("ma");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF0000");
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };
  
  
  Blockly.Blocks['fastled_apply'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Appliquer les changements sur les DELs")
          this.setInputsInline(false);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
      this.setColour("#FF0000");
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };