class SelectGridItem {
  constructor() {
    this.grid = document.getElementsByClassName('grid');
    this.events();
  }

  events() {
    this.grid[0].addEventListener('click', this.selectItem.bind(this));
    this.grid[1].addEventListener('click', this.selectItem.bind(this));
  }

  selectItem(e) {
    e.target.parentElement.classList.toggle('grid--selected');
  }
}

export default SelectGridItem;