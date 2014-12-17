Meteor.publish('bookings', function() {
  return Bookings.find();
});
