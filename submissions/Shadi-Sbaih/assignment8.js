//Task 1
const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};

const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle())

// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"

//Task 2
// formHandler.value will be 'initial' at the start.
const formHandler = {
  value: 'initial',
  onChange(newValue) {
    this.value = newValue;
  }
};

function simulateInputChange(callback) {
  callback('updated');
}

simulateInputChange(formHandler.onChange.bind(formHandler));
// I used "bind" to make sure the this inside onChange still points to formHandler when the function is called

console.log(formHandler.value);
//Task 3
const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};

// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.
function logLanguageInfo(getter) {
  console.log(getter.call(translator));
}

logLanguageInfo(translator.getLanguage);