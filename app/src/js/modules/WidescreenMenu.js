class WidescreenMenu {
  constructor() {
    this.navBackground = document.getElementsByClassName('nav__background');
    this.navList = document.getElementsByClassName('nav__list');
    this.events();
  }

  events() {
    window.addEventListener('scroll', this.scrollFunction.bind(this));
  }

  scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      this.navBackground[0].classList.add('nav__background--colored');
      this.navList[0].classList.add('nav__list--compact');
    } else {
      this.navBackground[0].classList.remove('nav__background--colored');
      this.navList[0].classList.remove('nav__list--compact');
    }
  }
}

export default WidescreenMenu;
