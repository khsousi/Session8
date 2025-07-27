"use strict";

//Task 1
const editor = {
  title: "my first blog",
  getUpperTitle() {
    return this.title.toUpperCase();
  },
};

const getTitle = console.log(editor.getUpperTitle.bind(editor));
getTitle();

//Task 2
const formHandler = {
  value: "initial",
  onChange(newValue) {
    this.value = newValue;
  },
};
function simulateInputChange(callback) {
  callback("updated");
}

simulateInputChange(formHandler.onChange);
console.log(formHandler.value); //initial

//1. bind()
simulateInputChange(formHandler.onChange.bind(formHandler));
console.log(formHandler.value); //updated
// I used bind() to explicitly bind the 'this' context to formHandler.

// 2. Arrow function
simulateInputChange((val) => formHandler.onChange(val));
console.log(formHandler.value); //updated
// I used the arrow function to call the method directly,So 'this' inside onChange refers to formHandler.

//Task 3
const translator = {
  language: "Arabic",
  getLanguage() {
    return `Current language: ${this.language}`;
  },
};

function logLanguageInfo(getter) {
  console.log(getter.call(translator));
}

logLanguageInfo(translator.getLanguage);
