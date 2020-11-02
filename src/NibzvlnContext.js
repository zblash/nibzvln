function NibzvlnContext(isNot = false, chain = []) {
  this.chain = chain;
  this.isNot = isNot;
}

NibzvlnContext.prototype.not = function () {
  this.isNot = true;
  return this;
};

NibzvlnContext.prototype._takeRule = function (ruleFn) {
  return (...args) => {
    this.chain.push({ fn: ruleFn.apply(this, args), isNot: this.isNot });
    if (this.isNot) {
      this.isNot = false;
    }
    return this;
  };
};

NibzvlnContext.prototype.validate = function (text) {
  return this.chain.every((c) =>
    c.isNot ? !c.fn.call(this, text) : c.fn.call(this, text)
  );
};

NibzvlnContext.prototype._clone = function () {
  return new NibzvlnContext(this.isNot, this.chain);
};

export default NibzvlnContext;
