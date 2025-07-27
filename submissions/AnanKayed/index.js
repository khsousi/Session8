//task 1
const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};

const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());


//**************************************************************************************************************
  //task2

  /*prediction :
    
    formHandler.value will remain 'initial' because this inside onChange is not bound.
*/
   // solution :

    const formHandler = {
  value: 'initial',
  onChange(newValue) {
    this.value = newValue;
  }
};

function simulateInputChange(callback) {
  callback('updated');
}

simulateInputChange((newValue) => formHandler.onChange(newValue));

console.log(formHandler.value);  


/*
explanation:
I used an arrow function to call formHandler.onChange explicitly with the correct context, because arrow functions don’t have their own this and here it preserves the reference to formHandler
*/


//**************************************************************************************************************

// task 3 :ّ

const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};

function logLanguageInfo(getter) {
  console.log(getter.call(translator)());
}

logLanguageInfo(translator.getLanguage);


