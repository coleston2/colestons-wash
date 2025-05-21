document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-message').textContent = "Thank you! We'll contact you soon to confirm your booking.";
  this.reset();
});
