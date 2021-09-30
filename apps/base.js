class Base {
  constructor(browser, page, phone) {
    this.browser = browser;
    this.phone = phone;
    this.page = page;
  }

  run() {
    try {
      if (true) {
        this.reg();
      } else {
        this.login();
      }
    } catch (error) {
      console.log(error);
      this.browser.close();
    }
  }

  async reg() {
    console.log("app reg");
  }

  login() {
    console.log("app login");
  }

  // private methods
  async goto(url) {
    await this.page.goto(url);
  }

  async keyboard(str) {
    await this.page.keyboard.type(str);
  }

  async input(elName, str) {
    await this.page.$eval(elName, el => el.value = str);
  }

  click(element) {
    this.page.click(element);
  }
}

module.exports = Base;
