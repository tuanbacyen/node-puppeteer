const Base = require('./base.js')

class Appx extends Base {
  async reg() {
    console.log("app reg");
    this.goto("https://www.google.com/", 10000);
    this.input("input[name=q]", "ahi hi");
  }
}

module.exports = Appx;
