Template.bookingList.helpers({
  bookings: function() {
    return Bookings.find();
  }
});
