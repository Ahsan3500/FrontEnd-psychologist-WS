import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const ContactFormModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    appointmentType: 'Depression Treatment'
  })
  const [status, setStatus] = useState('')

  useEffect(() => {
    emailjs.init('MrpBHHGy6PKjQdTvl')
    
    // Listen for open modal event from BookingInfo component
    const handleOpenModal = () => setIsOpen(true)
    window.addEventListener('openFormModal', handleOpenModal)
    
    return () => {
      window.removeEventListener('openFormModal', handleOpenModal)
    }
  }, [])

  // Close modal when clicking outside
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    const serviceID = 'service_h62czri'
    const templateID = 'template_n1xx0lu'

    emailjs.send(serviceID, templateID, formData)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          appointmentType: 'Depression Treatment'
        })
        setTimeout(() => {
          setStatus('')
          setIsOpen(false)
        }, 3000)
      })
      .catch((error) => {
        console.error('FAILED...', error)
        setStatus('error')
        setTimeout(() => setStatus(''), 5000)
      })
  }

  return (
    <>
      {/* Modal Overlay - NO FLOATING BUTTON */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsOpen(false)}
              className="modal-close-btn"
              aria-label="Close"
            >
              ✕
            </button>

            <h2 className="modal-title">Request an Appointment</h2>
            <p className="modal-subtitle">Fill out the form below and I'll get back to you within 24 hours</p>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="appointmentType">Service Required *</label>
                  <select
                    id="appointmentType"
                    name="appointmentType"
                    value={formData.appointmentType}
                    onChange={handleChange}
                    required
                  >
                    <option value="Depression Treatment">Depression Treatment</option>
                    <option value="Anxiety & Stress Management">Anxiety & Stress Management</option>
                    <option value="Cognitive Behavioral Therapy (CBT)">Cognitive Behavioral Therapy (CBT)</option>
                    <option value="Suicide Prevention Counseling">Suicide Prevention Counseling</option>
                    <option value="Self-Esteem & Self-Criticism Issues">Self-Esteem & Self-Criticism Issues</option>
                    <option value="Behavioral & Emotional Regulation">Behavioral & Emotional Regulation</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Please describe your concerns and preferred appointment times..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Request'}
              </button>

              {status === 'success' && (
                <div className="alert alert-success">
                  ✅ Thank you! Your request has been sent. I'll contact you within 24 hours.
                </div>
              )}

              {status === 'error' && (
                <div className="alert alert-error">
                  ❌ Something went wrong. Please try again or call +92 332 4645168
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default ContactFormModal