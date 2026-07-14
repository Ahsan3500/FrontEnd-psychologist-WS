const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="section-subtitle">Get in touch for any questions or to schedule a session</p>

        {/* Contact CTA Box */}
        <div className="contact-cta-box">
          <h3>Ready to take the first step towards better mental health?</h3>
          <div className="contact-cta-buttons">
            <a href="tel:+92 331 0413410" className="contact-cta-btn primary-cta">
              📞 Call Now
            </a>
            <a href="mailto:muhammadasaadghaffar1994@gmail.com" className="contact-cta-btn secondary-cta">
              ✉️ Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact