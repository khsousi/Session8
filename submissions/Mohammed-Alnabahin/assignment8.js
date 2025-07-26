/*
Task 1: Fix the Lost Context
You’re building a blog editor. The editor object has a method to return the title in uppercase.
*/

const editor = {
  title: "my first blog",
  getUpperTitle() {
    return this.title.toUpperCase();
  },
};

// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"

const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());

/*
Task 2: Arrow or Regular?
You have a form handler object that tracks user input:
*/
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
// Here: it's like we are calling : function onChange(newValue) {this.value = newValue} // the new value here is 'updated'
// but value from the object formHandler is lost, so it's undefined.

// ❓ Now log formHandler.value
console.log(formHandler.value);

//Your Tasks:

/* 
    Predict what formHandler.value will be:
    -The output will still be 'initial' because 'this' in the method onChange
     lost it's object when it was passed as a callback to another function, so it won't affect the value.
*/

//Fix the bug using either .bind() or an arrow function (your choice).

simulateInputChange((newValue) => formHandler.onChange(newValue));
console.log(formHandler.value);

//Explain which fix you used and why.
/*
    I used an arrow function because regular functions get their 'this' from the way they’re called,
    while arrow functions inherit this from their bigger scope (parent).
    so onChange function will be called directly from the formHandler with 'updated' as an argument,
    ensuring this will be in the object context.
*/

/*
Task 3: Method Extraction Issue
You’re developing a translation tool. The following object works well, but fails when methods are passed around.
*/
const translator = {
  language: "Arabic",
  getLanguage() {
    return `Current language: ${this.language}`;
  },
};

// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.

function logLanguageInfo(getter) {
  console.log(getter.call(translator));
}

logLanguageInfo(translator.getLanguage);
