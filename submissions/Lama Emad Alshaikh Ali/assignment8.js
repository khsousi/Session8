//Task 1: Fix the Lost Context
// const editor = {
//   title: 'my first blog',
//   getUpperTitle() {
//     return this.title.toUpperCase();
//   }
// };

// const getTitle = editor.getUpperTitle;

// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"

//Solution:
const editor = {
  title: "my first blog",
  getUpperTitle() {
    return this.title.toUpperCase();
  },
};

const getTitle = editor.getUpperTitle.bind(editor);

console.log(getTitle());

//Task 2: Arrow or Regular?
// const formHandler = {
//   value: 'initial',
//   onChange(newValue) {
//     this.value = newValue;
//   }
// };

// function simulateInputChange(callback) {
//   callback('updated');
// }

// simulateInputChange(formHandler.onChange);
// // ❓ Now log formHandler.value

//Solution
//- prediction formHandler.value will print "initial" because 'this' is lost recreance
//- Fix the bug using either .bind() or an arrow function (your choice).
const formHandler = {
  value: 'initial',
  onChange(newValue) {
    this.value = newValue;
  }
};

function simulateInputChange(callback) {
  callback('updated');
}
// using bind ();
simulateInputChange(formHandler.onChange.bind(formHandler));
//using arrow function
// simulateInputChange((val) => formHandler.onChange(val));
console.log(formHandler.value); 
// Explanation:
//- I used bind() so the method keeps using `formHandler` as `this`, and updates the value correctly.
//- I used an arrow function because it keeps `this` in the outer and lets the method work correctly.

//Task 3: Method Extraction Issue
// const translator = {
//   language: "Arabic",
//   getLanguage() {
//     return `Current language: ${this.language}`;
//   },
// };

// // ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.

// logLanguageInfo(translator.getLanguage);

//Solution
const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};

function logLanguageInfo(getter) {
  console.log(getter.call(translator));
}

logLanguageInfo(translator.getLanguage);


