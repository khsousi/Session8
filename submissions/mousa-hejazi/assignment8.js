//Task 1: Fix the Lost Context

const editor = {
  title: "my first blog",
  getUpperTitle() {
    return this.title.toUpperCase();
  },
};

const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());

//Task 2: Arrow or Regular?

const formHandler = {
  value: "initial",
  onChange(newValue) {
    this.value = newValue;
  },
};

function simulateInputChange(callback) {
  callback("updated");
}
//before fix : formHandler.value would remain "initial" because this in onChange would point to undefined or global object not formHandler

simulateInputChange(formHandler.onChange.bind(formHandler));
//I used .bind(formHandler) to ensure that this inside onChange still refers to formHandler
simulateInputChange((value) => formHandler.onChange(value));
//I used arrow function to call formHandler.onChange(value) so this refers to formHandler
console.log(formHandler.value);


//Task 3: Method Extraction Issue

const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};

function logLanguageInfo(getter){
    console.log(getter.call(translator))
}
logLanguageInfo(translator.getLanguage);