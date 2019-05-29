import "./navbar.html";

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

Template.navbar.events({
  "click .js-open-login-modal"(event, instance){
    document.querySelector('.modal').classList.add('is-active');
  },
  "click .js-logout"(event, instance) {
    Meteor.logout();
  }
});

Template.login_modal.events({
  "click .delete"(event, instance){
    document.querySelector('.modal').classList.remove('is-active');
  }
});

Template.login_modal.onCreated(function() {
  this.autorun(() => {
    if(Meteor.userId() && document.querySelector('.modal')) {
      document.querySelector('.modal').classList.remove('is-active');
    }
  })
});