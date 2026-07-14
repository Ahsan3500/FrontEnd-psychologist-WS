const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Depression Treatment',
      description: 'Comprehensive assessment of triggers, thought patterns, and emotional responses with structured recovery planning.',
      icon: '💙'
    },
    {
      id: 2,
      title: 'Anxiety & Stress Management',
      description: 'Evidence-based techniques to manage overthinking, panic symptoms, and chronic stress.',
      icon: '🧘'
    },
    {
      id: 3,
      title: 'Cognitive Behavioral Therapy (CBT)',
      description: 'Structured therapy focusing on identifying and changing negative thinking patterns and behaviors.',
      icon: '🧠'
    },
    {
      id: 4,
      title: 'Suicide Prevention Counseling',
      description: 'Risk assessment, safety planning, and therapeutic intervention.',
      icon: '🆘'
    },
    {
      id: 5,
      title: 'Self-Esteem & Self-Criticism Issues',
      description: 'Helping individuals overcome internalized criticism and improve self-worth.',
      icon: '✨'
    },
    {
      id: 6,
      title: 'Behavioral & Emotional Regulation',
      description: 'Practical tools for managing anger, frustration, and emotional instability.',
      icon: '⚖️'
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Services Offered</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon-large">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services