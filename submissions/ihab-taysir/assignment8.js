// ====================
// Task 1: Fix the Lost Context
// ====================

const editor = {
  title: "my first blog",
  getUpperTitle() {
    return this.title.toUpperCase();
  },
};

// Fix: Bind the method to the editor object
const getTitle = editor.getUpperTitle.bind(editor);

console.log(getTitle()); // Expected output: "MY FIRST BLOG"

/* -------------------------------------------------- */

// ====================
// Task 2: Arrow or Regular?
// ====================

const formHandler = {
  value: "initial",
  onChange(newValue) {
    this.value = newValue;
  },
};

// Simulates passing a callback (e.g., from an input element)
function simulateInputChange(callback) {
  callback("updated");
}

// Fix: Bind 'this' to formHandler
simulateInputChange(formHandler.onChange.bind(formHandler));

console.log(formHandler.value); // Expected output: "updated"

/*
Explanation:
- Without .bind(), 'this' inside onChange refers to the global object (or undefined in strict mode),
  so formHandler.value is not updated.
- Using .bind(formHandler) ensures 'this' refers to the correct object.
*/

/* -------------------------------------------------- */

// ====================
// Task 3: Method Extraction Issue
// ====================

const translator = {
  language: "Arabic",
  getLanguage() {
    return `Current language: ${this.language}`;
  },
};

// Ensure 'this' inside getLanguage refers to translator
function logLanguageInfo(getter) {
  console.log(getter.call(translator));
}

logLanguageInfo(translator.getLanguage); // Expected output: "Current language: Arabic"
