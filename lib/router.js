// these are the basic routing functions of the site
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('bookings'); }
});

// This determines the 'default' route for the site
Router.route('/', {name: 'bookingList'});

// This when looking at a list of bookings, this helps determine which specific booking detail to link to.
Router.route('/booking/:_id', {
  name: 'bookingDetails',
  data: function() { return Bookings.findOne(this.params._id); }
});

// This prevents people from entering in a random 'booking' id
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
