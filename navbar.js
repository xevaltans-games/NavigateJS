class Navbar {
  /**
   *
   * @param {string} selector
   */
  constructor(selector) {
    this.selector = selector;
    this.elements = [];
  }

  /**
   *
   * @param {{html: string, path:string}} options
   */
  add(options) {
    this.elements.push({
      html: options.html,
      path: options.path,
    });

    return this;
  }

  generate() {
    let elem = document.querySelector(this.selector);
    this.elements.forEach((l) => {
      elem.innerHTML += `<a href="${l.path}">${l.html}</a>`;
    });

    return this;
  }

  /**
   *
   * @param {string} Itspath
   */
  hideBlock(Itspath) {
    let elem = document.querySelector(this.selector);
    elem.querySelectorAll("a").forEach((a) => {
      let href = a.href;
      this.elements.forEach((el) => {
        if (el.path === Itspath && href === Itspath && el.path === href) {
          a.hidden = true;
        }
      });
    });
  }
}
