/* Task 1: Fix the Lost Context

You’re building a blog editor. The `editor` object has a method to return the title in uppercase.*/

// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"

const editor = {
  title: "my first blog",
  getUpperTitle() {
    return this.title.toUpperCase();
  },
};
const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());

/* Task 2: Arrow or Regular?
You have a form handler object that tracks user input: */

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

// ❓ Now log formHandler.value
console.log(formHandler.value); //initial

// Your Tasks:

// 1. Predict what formHandler.value will be.
/* it will be initial , as this here lost its binding , because we passed formHandler.onChange as callback function it's invoked without referring to its original object 
  so here this  refers to global obj(window) -> ' non strict mode' 
  it has a value of undefined ->  'strict mode'*/

//2. Fix the bug using either .bind() or an arrow function (your choice).
simulateInputChange(formHandler.onChange.bind(formHandler));
console.log(formHandler.value); //updated

//3. Explain which fix you used and why.
// because bind() keeps this referring to the correct object

/* we could solve it with arrow function , as arrow function save this scope */

simulateInputChange((newValue) => formHandler.onChange(newValue));
console.log(formHandler.value); //update

//Task 3: Method Extraction Issue
//You’re developing a translation tool. The following object works well, but fails when methods are passed around.

const translator = {
  language: "Arabic",
  getLanguage() {
    return `Current language: ${this.language}`;
  },
};

// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.
function logLanguageInfo(getter) {
  return getter.call(translator);
}
console.log(logLanguageInfo(translator.getLanguage));
