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

/*
This task demonstrates how 'this' behaves differently
between regular functions and arrow functions.
*/

const formHandler = {
  value: "initial",

  // ✅ Regular function: allows dynamic 'this'
  onChange(newValue) {
    this.value = newValue;
  },

  // ✅ Arrow function version (uses lexical 'this')
  onChangeArrow: (newValue) => {
    // ⚠️ This will NOT work as expected when used like a method
    formHandler.value = newValue; // Access via object name instead
  },
};

function simulateInputChange(callback) {
  callback("updated");
}

// ---------- Method 1: Using .bind() ----------
simulateInputChange(formHandler.onChange.bind(formHandler));
console.log("After bind():", formHandler.value); // ✅ Expected: "updated"

// ---------- Method 2: Using Arrow Function ----------
simulateInputChange(formHandler.onChangeArrow);
console.log("After arrow:", formHandler.value); // ✅ Expected: "updated"

/*
🧠 Explanation:

- The regular function needs .bind(formHandler) to keep 'this' pointing to formHandler.
- The arrow function doesn't have its own 'this', so we manually access formHandler.value directly.
- Arrow functions are useful when you want to inherit 'this' from the outer scope (lexical scoping),
  but they are not ideal for methods inside objects that rely on dynamic 'this'.
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
