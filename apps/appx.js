const Base = require('./base.js')

class Appx extends Base {
  async reg() {
    console.log("app reg");
    await this.page.goto("https://www.google.com/", { waitUntil: "networkidle2" });
    await this.page.$eval("input[name=q]", el => el.value = "ahi hi");
    await this.page.keyboard.press('Enter');
    console.log("ok");
  }

  async logout() {
    console.log("app logout");
    await this.page.goto("https://pptr.dev/", { waitUntil: "networkidle2" });
    await this.page.waitForTimeout(10000);
    console.log("hix");
  }
}

module.exports = Appx;
