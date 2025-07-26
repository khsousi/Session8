//Task 1: Fix the Lost Context
//You’re building a blog editor. The editor object has a method to return the title in uppercase.

const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};

//const getTitle = editor.getUpperTitle;
// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"
//Your Task: Fix the code so that getTitle() returns "MY FIRST BLOG". Do not modify the editor object.

const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());
// or : 
//const getTitle = () => editor.getUpperTitle();
// or : console.log(getTitle.call(editor))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Task 2: Arrow or Regular?
//You have a form handler object that tracks user input:

const formHandler = {
  value: 'initial',
  onChange(newValue) {
    this.value = newValue;
  }
};

function simulateInputChange(callback) {
  callback('updated');
}

simulateInputChange(formHandler.onChange);

// ❓ Now log formHandler.value
// Your Tasks:
// Predict what formHandler.value will be.
// Fix the bug using either .bind() or an arrow function (your choice).
// Explain which fix you used and why.

console.log(formHandler.value) //initial

simulateInputChange(formHandler.onChange.bind(formHandler));
console.log(formHandler.value) //update

// At first, the function loses its context because 'this' doesn't refer to the object,
// so 'this' becomes undefined. That's why we use 'bind' here to explicitly bind 'this' to the correct object.

//or :
simulateInputChange((newValue)=>{
    return formHandler.onChange(newValue);
});
console.log(formHandler.value)//update

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Task 3: Method Extraction Issue
//You’re developing a translation tool. The following object works well, but fails when methods are passed around.

const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};

// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.
function logLanguageInfo(getter){
    return getter.call(translator);
}
console.log(logLanguageInfo(translator.getLanguage));