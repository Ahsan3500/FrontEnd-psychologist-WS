const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Depression: Treatment, Therapies & Triggers',
      issuer: 'Alison',
      issued: 'Aug 2025',
      credentialId: 'AC-2968-47780225',
      skills: ['Depression Treatment', 'Therapeutic Interventions', 'Trigger Identification'],
      icon: '💙'
    },
    {
      id: 2,
      title: 'Suicide Prevention - Diagnosis and Treatment',
      issuer: 'Alison',
      issued: 'Aug 2025',
      credentialId: 'AC-5023-47780225',
      skills: ['Mental Health Counseling', 'Suicide Prevention', 'Crisis Intervention', 'Risk Assessment'],
      icon: '🆘'
    },
    {
      id: 3,
      title: 'Cognitive Behavioral Therapy (CBT)',
      issuer: 'Alison',
      issued: 'Aug 2025',
      skills: ['CBT Techniques', 'Behavioral Modification', 'Cognitive Restructuring'],
      icon: '🧠'
    },
    {
      id: 4,
      title: 'CPR, AED & First-Aid Certification',
      issuer: 'Alison',
      issued: 'Aug 2025',
      skills: ['First Aid', 'CPR', 'Emergency Response'],
      icon: '🏥'
    }
  ]

  const education = [
    {
      id: 1,
      title: 'Master\'s in Psychology',
      organization: 'University of Management and Technology (UMT)',
      year: '2021-2023',
      icon: '🎓'
    },
    {
      id: 2,
      title: 'Clinical Psychologist',
      organization: 'Licensed Professional',
      icon: '⚕️'
    }
  ]

  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <h2>Qualifications & Certifications</h2>
        <p className="section-subtitle">
          Evidence-based training and continuous professional development
        </p>

        {/* Education */}
        <h3 className="subsection-title">Education</h3>
        <div className="qualifications-grid">
          {education.map(edu => (
            <div key={edu.id} className="qualification-item">
              <span className="qual-icon">{edu.icon}</span>
              <div className="qual-content">
                <h4>{edu.title}</h4>
                <p>{edu.organization}</p>
                {edu.year && <p className="small-text">{edu.year}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Certifications */}
        <h3 className="subsection-title">Professional Certifications</h3>
        <div className="certifications-grid">
          {certifications.map(cert => (
            <div key={cert.id} className="certification-card">
              <div className="cert-icon">{cert.icon}</div>
              <h4>{cert.title}</h4>
              <p className="cert-issuer"><strong>{cert.issuer}</strong></p>
              <p className="cert-date">Issued: {cert.issued}</p>
              {cert.credentialId && (
                <p className="cert-id">Credential ID: {cert.credentialId}</p>
              )}
              <div className="cert-skills">
                <strong>Skills:</strong>
                <div className="skill-tags">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications