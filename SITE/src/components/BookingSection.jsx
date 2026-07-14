const BookingSection = () => {
  return (
    <section className="booking-section" id="booking">
      <div className="container">
        <h2>Book Your Appointment</h2>
        <p className="section-subtitle">
          Choose your preferred way to schedule a session
        </p>

        <div className="booking-options">
          {/* Option 1: Calendly */}
          <div className="booking-option instant-booking">
            <div className="booking-icon">📅</div>
            <h3>Instant Booking</h3>
            <p>Select your preferred time slot and get instant confirmation with calendar sync</p>
            <a 
              href="https://calendly.com/muhammadasaadghaffar1994/60min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="booking-btn primary-btn"
            >
              Book Now
            </a>
            <p className="booking-note">✓ Instant confirmation ✓ Calendar reminder</p>
          </div>

          <div className="booking-divider">
            <span>OR</span>
          </div>

          {/* Option 2: Contact Form */}
          <div className="booking-option request-booking">
            <div className="booking-icon">✉️</div>
            <h3>Request Appointment</h3>
            <p>Fill out the form and I'll contact you within 24 hours to confirm your appointment</p>
            <a 
              href="#appointment" 
              className="booking-btn secondary-btn"
            >
              Request via Form
            </a>
            <p className="booking-note">✓ Flexible scheduling ✓ Ask questions</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="booking-benefits">
          <div className="benefit">
            <span className="benefit-icon">🔒</span>
            <span>Confidential</span>
          </div>
          <div className="benefit">
            <span className="benefit-icon">💼</span>
            <span>Professional</span>
          </div>
          <div className="benefit">
            <span className="benefit-icon">📍</span>
            <span>In-person & Online</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingSection