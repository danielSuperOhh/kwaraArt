import './aboutSection1.css'
import spiral from '../../assets/spiral.png'
import profile from '../../assets/profile.png'

const AboutSection1 = () => {
  return (
    <div className='aboutSection1'>
        <div className="profPicture">
            <div className="profile-container">
                <img src={profile} alt="Profile Picture" className="profile-picture" />
                <div className="overlay">
                    <a href="https://discord.com/your-discord-link" target="_blank" rel="noopener noreferrer" className="discord-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M6.94 20.63C8.42 21.5 10.15 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2 22l4.94-1.37Z" stroke="#25d366" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M17 15.17c0 .18-.04.37-.13.55a2.279 2.279 0 0 1-1.16 1.1c-.3.13-.63.19-.98.19-.51 0-1.06-.12-1.63-.37-.58-.25-1.15-.58-1.72-.99-.58-.42-1.12-.89-1.64-1.4-.52-.52-.98-1.07-1.4-1.64-.41-.57-.74-1.14-.98-1.71C7.12 10.33 7 9.78 7 9.26c0-.34.06-.67.18-.97.12-.31.31-.59.58-.84.32-.32.67-.47 1.04-.47.14 0 .28.03.41.09.13.06.25.15.34.28l1.16 1.64c.09.13.16.24.2.35.05.11.07.21.07.31 0 .12-.04.24-.11.36s-.16.24-.28.36l-.38.4c-.06.06-.08.12-.08.2 0 .04.01.08.02.12.02.04.03.07.04.1.09.17.25.38.47.64a13.48 13.48 0 0 0 1.53 1.53c.26.22.48.37.65.46.03.01.06.03.09.04.04.02.08.02.13.02.09 0 .15-.03.21-.09l.38-.38c.13-.13.25-.22.36-.28.12-.07.23-.11.36-.11.1 0 .2.02.31.07.11.05.23.11.35.2l1.66 1.18c.13.09.22.2.28.32 0 .12.03.24.03.38Z" stroke="#25d366" stroke-width="1.5" stroke-miterlimit="10"></path></svg>
                    </a>
                </div>
            </div>       
        </div>
        <div className="aboutMe">
            <div className="aboutMe-text">
                <h1>About me</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Amet nesciunt assumenda possimus quisquam veritatis omnis deserunt quaerat quis. 
                    Rerum exercitationem odit ipsum obcaecati, impedit unde velit ex quibusdam natus dicta.
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Illum deserunt reiciendis aliquid, quibusdam delectus rem.
                </p>
            </div>
        </div>
        <div className="spiral">
            <img src={spiral} alt="spiral line" />
        </div>
    </div>
  )
}

export default AboutSection1