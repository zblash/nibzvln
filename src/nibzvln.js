import NibzvlnContext from "./NibzvlnContext";

const definedRules = {
  numeric: () => (text) => /^\d+$/.test(text),

  lowercase: () => (text) => /^([a-z]+\s*)+$/.test(text),

  uppercase: () => (text) => /^([A-Z]+\s*)+$/.test(text),

  minLength: (min) => (text) => text.length >= min,

  maxLength: (max) => (text) => text.length <= max,

  email: () => (text) =>
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(text),

  emptyOrNull: () => (text) => !text || 0 === text.length,
};

let customRules = {};

function contextProxy(context) {
  return new Proxy(context, {
    get(obj, prop) {
      if (prop in obj) {
        return obj[prop];
      }

      const newContext = contextProxy(context._clone());

      if (definedRules.hasOwnProperty(prop)) {
        return newContext._takeRule(definedRules[prop]);
      }
      if (customRules.hasOwnProperty(prop)) {
        return newContext._takeRule(customRules[prop]);
      }
    },
  });
}

function nibzvln() {
  return contextProxy(new NibzvlnContext());
}

nibzvln.defineCustomRules = function (newRules) {
  Object.assign(customRules, newRules);
};

nibzvln.clearCustomRules = function () {
  Object.keys(customRules).forEach(function (key) {
    delete customRules[key];
  });
};

export default nibzvln;
