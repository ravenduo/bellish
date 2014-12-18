Template.createBooking.events({
  'submit form': function(e) {
    e.preventDefault();

    var booking = {
      bookingDate: $(e.target).find('[name=bookingDate]').val(),
      bookingTime: $(e.target).find('[name=bookingTime]').val(),
      service: $(e.target).find('[name=service]').val(),
      recurring: $(e.target).find('[name=recurring]').val()
    };

    booking._id = Bookings.insert(booking);
    Router.go('bookingDetails', booking);
  }
});

Template.createBooking.rendered = function() {
  this.$('.datepicker').datepicker();
};
