// these are the basic routing functions of the site
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('bookings'); }
});

// This determines the 'default' route for the site
Router.route('/', {name: 'homepage'});

Router.route('/your-account', {name: 'bookingList'});

// This when looking at a list of bookings, this helps determine which specific booking detail to link to.
Router.route('/booking/:_id', {
  name: 'bookingDetails',
  data: function() { return Bookings.findOne(this.params._id); }
});

// Route for submitting new bookings as a business
Router.route('/submit', {name: 'createBooking'});

// ensures the create booking is only available for logged in users
var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}


// This prevents people from entering in a random 'booking' id
Router.onBeforeAction('dataNotFound', {only: 'bookingDetails'});
// Requires login to access the submit booking page
Router.onBeforeAction(requireLogin, {only: 'createBooking'});
