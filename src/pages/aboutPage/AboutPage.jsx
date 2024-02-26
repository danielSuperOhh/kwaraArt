import AboutSection1 from '../../components/aboutSection1/AboutSection1'
import NavBar from '../../components/navbar/Navbar'
import './aboutPage.css'

const AboutPage = () => {
  return (
    <div className='AboutPage'>
        <NavBar />
        <AboutSection1/>
    </div>
  )
}

export default AboutPage