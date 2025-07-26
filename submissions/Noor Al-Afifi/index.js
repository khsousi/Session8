console.log("================= task 1 ======================");
// Task 1: Fix the Lost Context
// You’re building a blog editor. The editor object has a method to return the title in uppercase.

const editor = {
  title: "my first blog",
  getUpperTitle() {
    return this.title.toUpperCase();
  },
};

// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"
const getTitle = editor.getUpperTitle;
console.log(getTitle.call(editor)); //MY FIRST BLOG

console.log("================= task 2 ======================");
// Task 2: Arrow or Regular?
// You have a form handler object that tracks user input:

const formHandler = {
  value: "initial",
  onChange(newValue) {
    this.value = newValue;
  },
};

console.log(formHandler.value); //initial

function simulateInputChange(callback) {
  callback("updated");
}

simulateInputChange(formHandler.onChange.bind(formHandler));

/**
 I used bind() => to solve a loose binding where the value of "this" was lost
By using .bind(), I explicitly set the correct context (the object) for "this".

 */

// ❓ Now log formHandler.value
console.log(formHandler.value); //updated

console.log("================= task 3 ======================");

// Task 3: Method Extraction Issue
// You’re developing a translation tool. The following object works well, but fails when methods are passed around.

const translator = {
  language: "Arabic",
  getLanguage() {
    return `Current language: ${this.language}`;
  },
};

// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.
function logLanguageInfo(getter) {
  console.log(getter.call(translator)); // solve a loose inside function 
}

logLanguageInfo(translator.getLanguage); //// Current language: Arabic
