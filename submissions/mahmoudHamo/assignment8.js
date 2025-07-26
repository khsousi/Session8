// Task 1
const editor = {
  title: "my first blog",
  getUpperTitle() {
    return this.title.toUpperCase();
  },
};
const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());

// Task 2
const formHandler = {
  value: "initial",
  onChange(newValue) {
    this.value = newValue;
  },
};

function simulateInputChange(callback) {
  callback("updated");
}

simulateInputChange((newVal) => formHandler.onChange(newVal));

// 1
// formHandler.value will be "initial" , because no object call "onChange" ,so 'this' has no reference ,
// and this formHandler.value will not change and there value still "initial"

// 2
console.log(formHandler.value);

// 3
// when i use arrow function i will manually call formHandler.onChange() when callback is called ,
// so "this" will be refrence to the formHandler object and update the value of 'value'
// Task 3
const translator = {
  language: "Arabic",
  getLanguage() {
    return `Current language: ${this.language}`;
  },
};

function logLanguageInfo(getter) {
  console.log(getter.call(translator));
}

logLanguageInfo(translator.getLanguage);
