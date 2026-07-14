import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Certifications from './components/Certifications'
import BookingInfo from './components/BookingInfo'
/*import BookingSection from './components/BookingSection'*/
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactFormModal from './components/ContactFormModal'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Services />
      <Certifications />
      <BookingInfo />
      <Contact />
      <Footer />
      <ContactFormModal />
    </div>
  )
}

export default App