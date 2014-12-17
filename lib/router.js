Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('bookings'); }
});

Router.route('/', {name: 'bookingList'});
