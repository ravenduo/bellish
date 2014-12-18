if (Bookings.find().count() === 0) {
  Bookings.insert({
    bookingDate: '12/03/2014',
    bookingTime: '7pm',
    service: 'Manicure',
    recurring: 'yes'
  });

  Bookings.insert({
    bookingDate: '12/03/2014',
    bookingTime: '7pm',
    service: 'Pedicure',
    recurring: 'yes'
  });

  Bookings.insert({
    bookingDate: '12/03/2014',
    bookingTime: '7pm',
    service: 'Manicure',
    recurring: 'no'
  });
}
