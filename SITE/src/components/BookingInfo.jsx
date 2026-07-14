const BookingInfo = () => {
  const handleFormClick = () => {
    // Trigger the modal to open
    const event = new CustomEvent('openFormModal');
    window.dispatchEvent(event);
  };

  return (
    <section className="booking-info-section" id="booking">
      <div className="container">
        <h2>Book Your Appointment</h2>
        <p className="section-subtitle">
          Choose your preferred way to schedule a session
        </p>

        <div className="booking-options-grid">
          {/* Option 1: Instant Booking */}
          <div className="booking-option-card">
            <div className="option-icon">📅</div>
            <h3>Instant Booking</h3>
            <p>Select your preferred time slot and get instant confirmation with calendar sync</p>
                <a 
                  href="https://calendly.com/muhammadasaadghaffar1994/60min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="option-btn primary-option-btn"
                >
              Book Now
              </a>
            <div className="option-features">
              <span>✓ Instant confirmation</span>
              <span>✓ Calendar reminder</span>
            </div>
          </div>

          {/* Divider */}
          <div className="options-divider">
            <span>OR</span>
          </div>

          {/* Option 2: Request Appointment */}
          <div className="booking-option-card">
            <div className="option-icon">✉️</div>
            <h3>Request Appointment</h3>
            <p>Fill out the form and I'll contact you within 24 hours to confirm your appointment</p>
            <button 
              onClick={handleFormClick}
              className="option-btn secondary-option-btn"
            >
              Request via Form
            </button>
            <div className="option-features">
              <span>✓ Flexible scheduling</span>
              <span>✓ Ask questions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingInfo