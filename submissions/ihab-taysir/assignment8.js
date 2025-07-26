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

  // Regular method using dynamic 'this'
  onChange(newValue) {
    this.value = newValue;
  },
};

function simulateInputChange(callback) {
  callback("updated");
}

// ✅ Method 1: Using .bind() to preserve 'this' context
simulateInputChange(formHandler.onChange.bind(formHandler));
console.log("After bind():", formHandler.value); // Expected: "updated"

// ✅ Method 2: Using arrow function externally (not inside the object)
// This does not modify the original object structure
simulateInputChange((newValue) => {
  formHandler.value = newValue;
});
console.log("After arrow callback:", formHandler.value); // Expected: "updated"

/*
🧠 Explanation:

- In Method 1, we use .bind() to ensure the 'this' inside formHandler.onChange
  refers correctly to the formHandler object.

- In Method 2, instead of modifying the object to use an arrow function,
  we pass an arrow function directly as the callback.
  This avoids any changes to the original object structure.

❌ We should NOT define an arrow method like:
   onChangeArrow: (newValue) => { this.value = newValue }
   because arrow functions don't bind their own 'this', and using 'this' inside them
   when defined in an object leads to incorrect behavior.
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
