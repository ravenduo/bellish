Bookings = new Mongo.Collection('bookings')

Bookings.allow({
    insert: function(userId, doc) {
      // only allow creating a boooking if you are logged in
      return !! userId;
    }
});
