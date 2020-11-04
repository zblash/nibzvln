# Welcome to nibzvln 👋

![Version](https://img.shields.io/badge/version-1.1.1-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

JavaScript reusable chainable validation library

## Install

```bash
yarn add nibzvln
```

or

```bash
npm install nibzvln
```

## Usage

#### Chainable

```js
nibzvln().numeric().minLength(3).validate("123"); // true

nibzvln().not().numeric().minLength(3).validate("hello"); // true

nibzvln().numeric().minLength(3).validate("hello"); // false

nibzvln().minLength(3).not().email().validate("hello"); // true

nibzvln().not().minLength(45).email().validate("example@example.com"); // true
```

### Extendable

You can create your own custom validation rules

```js
const customRules = {
    foo: () => (text) => text === "bar";
}

nibzvln.defineCustomRules(customRules);

```

And you can use them like built-in ones

```js
nibzvln().minLength(3).foo().validate("bar"); // true
```

You can also remove custom validation rules that are created

```js
nibzvln.clearCustomRules();
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/zblash/nibzvln/issues).
