import './section1.css'
import { Link } from "react-scroll";
import heroart from '../../assets/heroart.png'

const Section1 = () => {
  return (
    <div className='section1'>
        <div className="heroImg">
            <div className="imgContainer">
                <img src={heroart} alt="" />
            </div>
        </div>
        <div className="heroText">
            <h1>Masterpiece</h1>
            <p>
                Unique pieces of art that adds a certain 
                je ne sais quoi to any home or bussiness enivironment
            </p>

            <button>
                LEARN MORE
            </button>
        </div>

        <div className="socialLinks">
            <div className="socialbox">
                <div className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10c-1.84 0-3.57-.5-5.06-1.37L2 22l1.34-5A9.966 9.966 0 0 1 2 12c0-3.7 2.01-6.93 5-8.66" stroke="#f6f7f6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17 15.17c0 .18-.04.37-.13.55a2.279 2.279 0 0 1-1.16 1.1c-.3.13-.63.19-.98.19-.51 0-1.06-.12-1.63-.37-.58-.25-1.15-.58-1.72-.99-.58-.42-1.12-.89-1.64-1.4-.52-.52-.98-1.07-1.4-1.64-.41-.57-.74-1.14-.98-1.71C7.12 10.33 7 9.78 7 9.26c0-.34.06-.67.18-.97.12-.31.31-.59.58-.84.32-.32.67-.47 1.04-.47.14 0 .28.03.41.09.13.06.25.15.34.28l1.16 1.64c.09.13.16.24.2.35.05.11.07.21.07.31 0 .12-.04.24-.11.36s-.16.24-.28.36l-.38.4c-.06.06-.08.12-.08.2 0 .04.01.08.02.12.02.04.03.07.04.1.09.17.25.38.47.64a13.48 13.48 0 0 0 1.53 1.53c.26.22.48.37.65.46.03.01.06.03.09.04.04.02.08.02.13.02.09 0 .15-.03.21-.09l.38-.38c.13-.13.25-.22.36-.28.12-.07.23-.11.36-.11.1 0 .2.02.31.07.11.05.23.11.35.2l1.66 1.18c.13.09.22.2.28.32 0 .12.03.24.03.38Z" stroke="#f6f7f6" strokeWidth="1.5" strokeMiterlimit="10"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M2 13.03V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9" stroke="#f6f7f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="#f6f7f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.636 7h.012" stroke="#f6f7f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1