const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img 
            src="/images/logo.png" 
            alt="The Therapist Logo" 
            className="header-logo"
          />
        </div>
        <h1>Muhammad Asaad Ghaffar</h1>
        <p className="subtitle">Clinical Psychologist in Lahore</p>
        <p className="tagline">CBT Therapist | Depression & Anxiety Specialist</p>
      </div>
    </header>
  )
}

export default Header