//    Task 1: Fix the Lost Context

// You’re building a blog editor. The `editor` object has a method to return the title in uppercase.

const editor = {
  title: "my first blog",
  getUpperTitle() {
    return this.title.toUpperCase();
  },
};

// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"
const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());

//   Task 2: Arrow or Regular?

// You have a form handler object that tracks user input:
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
// Your Tasks:

// Predict what formHandler.value will be.
///////    => it still be "initial" because "this" is lost banding
// Fix the bug using either .bind() or an arrow function (your choice).
simulateInputChange(formHandler.onChange.bind(formHandler));
console.log(formHandler.value);
//  => or arrow fun
simulateInputChange((newVal) => formHandler.onChange(newVal));
// Explain which fix you used and why.
//////    => i used .bind() because it allows the method to retain the context of `formHandler`, ensuring that `this.value` is updated correctly.
//////    => and the arrow fun solve that replacing callback (newVal) => formHandler.onChange(newVal) and run it (newVal) => formHandler.onChange(newVal)("updated") by "this" of formHandler

// Task 3: Method Extraction Issue
// You’re developing a translation tool. The following object works well, but fails when methods are passed around.

const translator = {
  language: "Arabic",
  getLanguage() {
    return `Current language: ${this.language}`;
  },
};

// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.
// Your Task: Write the logLanguageInfo function and make sure the result is:
function logLanguageInfo(getter) {
  console.log(getter.call(translator));
}
logLanguageInfo(translator.getLanguage);

// Current language: Arabic
