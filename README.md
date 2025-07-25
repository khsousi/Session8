# Assignment: Mastering `this` and Arrow Functions

## Goal

This assignment helps you understand how `this` behaves differently in **regular functions** vs **arrow functions**, especially when methods are passed around or used inside other functions.

You'll write and fix real-world code bugs and submit your solutions through GitHub by contributing to this repository.

---

## Tasks

### Task 1: Fix the Lost Context

You’re building a blog editor. The `editor` object has a method to return the title in uppercase.

```js
const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};

const getTitle = editor.getUpperTitle;

// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"
```
Your Task: Fix the code so that getTitle() returns "MY FIRST BLOG". Do not modify the editor object.

###  Task 2: Arrow or Regular?
You have a form handler object that tracks user input:

```js
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
```
Your Tasks:

1. Predict what formHandler.value will be.

2. Fix the bug using either .bind() or an arrow function (your choice).

3. Explain which fix you used and why.

### Task 3: Method Extraction Issue
You’re developing a translation tool. The following object works well, but fails when methods are passed around.

```js
const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};

// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.

logLanguageInfo(translator.getLanguage);
```
Your Task: Write the `logLanguageInfo` function and make sure the result is:

`Current language: Arabic`

## Submission Instructions
To submit your solutions:

1. Fork this repository to your GitHub account.

2. Create a folder inside the `submissions/` directory named after your GitHub username or full name:

```bash
submissions/your-name/
```

Inside your folder, create one file for the task:

```bash
submissions/your-name/assignment8.js
```
Push your code to your forked repo.

Open a Pull Request to this repo from your fork. Title the PR:

```pgsql
[Your Name] - Arrow Functions and This Assignment Submission
```


