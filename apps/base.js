class Base {
  constructor(browser, page, phone) {
    this.browser = browser;
    this.phone = phone;
    this.page = page;
  }

  async run() {
    try {
      // clear all cookies
      const client = await this.page.target().createCDPSession()
      await client.send('Network.clearBrowserCookies')

      if (true) {
        await this.reg();
      } else {
        await this.login();
      }
      await this.logout();
      // remove current page
      await this.page.close();
    } catch (error) {
      console.log(error);
      // remove current page
      await this.page.close();
      await this.browser.close();
    }
  }

  reg() {
    console.log("app reg");
  }

  login() {
    console.log("app login");
  }

  logout() {
    console.log("app logout");
  }

  // private methods
  goto(url) {
    this.page.goto(url);
  }

  keyboard(str) {
    this.page.keyboard.type(str);
  }

  input(elName, str) {
    this.page.$eval(elName, el => el.value = str);
  }

  click(element) {
    this.page.click(element);
  }
}

module.exports = Base;
