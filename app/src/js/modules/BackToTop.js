class BackToTop {
  constructor() {
    this.backToTopButton = document.getElementsByClassName('nav__back-to-top');
    this.events();
  }

  events() {
    window.addEventListener('scroll', this.scrollFunction.bind(this));
  }

  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.backToTopButton[0].classList.remove('nav__back-to-top--hidden');
    } else {
      this.backToTopButton[0].classList.add('nav__back-to-top--hidden');
    }
  }
}

export default BackToTop;