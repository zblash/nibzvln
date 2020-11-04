require("proxy-polyfill/proxy.min.js");
import NibzvlnContext from "./NibzvlnContext";

const definedRules = {
  numeric: function () {
    return function (text) {
      return /^\d+$/.test(text);
    };
  },

  lowercase: function () {
    return function (text) {
      return /^([a-z]+\s*)+$/.test(text);
    };
  },

  uppercase: function () {
    return function (text) {
      return /^([A-Z]+\s*)+$/.test(text);
    };
  },

  minLength: function (min) {
    return function (text) {
      return text.length >= min;
    };
  },

  maxLength: function (max) {
    return function (text) {
      return text.length <= max;
    };
  },

  alphaNumeric: function () {
    return function (text) {
      return /^([a-zA-Z0-9 _-]+)$/i.test(text);
    };
  },

  specialChars: function () {
    return function (text) {
      return !/^([a-zA-Z0-9 _-]+)$/i.test(text);
    };
  },

  email: function () {
    return function (text) {
      return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        text
      );
    };
  },

  emptyOrNull: function () {
    return function (text) {
      return !text || 0 === text.length;
    };
  },
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
