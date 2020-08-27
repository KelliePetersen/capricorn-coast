class MobileMenu {
  constructor() {
    this.menu = document.getElementsByClassName('nav__list');
    this.nav = document.getElementsByClassName('nav');
    this.menuIcon = document.getElementsByClassName('nav__button');
    this.listItem = document.getElementsByClassName('nav__link');
    this.events();
  }
  events() {
    this.menuIcon[0].addEventListener("click", this.toggleMenu.bind(this));
    this.menuIcon[0].addEventListener("click", this.animateMenu.bind(this));
  }
  toggleMenu() {
    this.nav[0].classList.toggle("nav--visible");
    this.menu[0].classList.toggle("nav__list--visible");
    Array.from(this.listItem).forEach(function (item) {
      item.classList.toggle("nav__link--visible");
    })
  }
  animateMenu() {
    this.menuIcon[0].classList.toggle("open");
  }
}

export default MobileMenu;
