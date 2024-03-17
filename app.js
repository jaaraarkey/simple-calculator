"use strict";

const display = document.getElementById("display");

const appendToDisplay = (input) => {
  display.value += input;
};
const clearDisplay = () => {
  display.value = " ";
};
const deleteDisp = () => {
  display.value = display.value.toString().slice(0, -1);
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "error";
  }
};
