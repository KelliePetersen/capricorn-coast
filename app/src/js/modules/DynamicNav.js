import waypoints from 'waypoints/lib/noframework.waypoints';

class DynamicNav {
  constructor() {
    this.pageSections = document.getElementsByClassName('section');
    this.links = document.getElementsByClassName('nav__link');
    this.createWaypoints();
  }

  createWaypoints() {
    let mainThis = this;
    for (var i = 0; i < this.pageSections.length; i++) {
      let currentItem = this;
      let newItem = currentItem.pageSections[i];
      new Waypoint({
        element: mainThis.pageSections[i],
        handler: function(direction) {
          if (direction == 'down') {
            let matchingLink = newItem.getAttribute('data-link');

            for (var j = 0; j < mainThis.links.length; j++) {
              mainThis.links[j].classList.remove('nav__active-link');
            }

            let currentLink = document.querySelector(matchingLink);
            currentLink.classList.add('nav__active-link');
          }
        },
        offset: '20%'
      });
      new Waypoint({
        element: mainThis.pageSections[i],
        handler: function(direction) {
          if (direction == 'up') {
            let matchingLink = newItem.getAttribute('data-link');

            for (var j = 0; j < mainThis.links.length; j++) {
              mainThis.links[j].classList.remove('nav__active-link');
            }

            let currentLink = document.querySelector(matchingLink);
            currentLink.classList.add('nav__active-link');
          }
        },
        offset: '-40%'
      });
    }
  }
}

export default DynamicNav;