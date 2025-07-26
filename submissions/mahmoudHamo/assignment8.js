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

simulateInputChange(formHandler.onChange.bind(formHandler));

// 1
// formHandler.value will be "initial" , because no object call "onChange" ,so 'this' has no reference ,
// and this formHandler.value will not change and there value still "initial"

// 2
console.log(formHandler.value);

// 3
// i use .bind(formHandler) when i call 'simulateInputChange' this will make the "this" inside onChange
// reference to the formHandler object , as a result of this fix , the onChange function will git the new value
// "updated" and replace it with old value of 'value' = "initial"

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
