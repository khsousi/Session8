

// Task 1: Fix the Lost Context

const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};

const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle())

// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"

// ------------------------------------------------



// Task 2: Arrow or Regular?

const formHandler = {
  value: 'initial',
  onChange(newValue) {
    this.value = newValue;
  }
};

function simulateInputChange(callback) {
  callback('updated');
}

// simulateInputChange(formHandler.onChange); ====> initial

simulateInputChange(value => formHandler.onChange(value))

console.log(formHandler.value)

//  Arrow functions use "this" from outer scope because it dosent have its own "this"


// ------------------------------------------------



// Task 3: Method Extraction Issue

const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};

// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.

function logLanguageInfo(getter) {
  console.log(getter.bind(translator)())
}
logLanguageInfo(translator.getLanguage);
