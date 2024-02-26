import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {

  return (
    <footer>
      <div className="footerHead">
          <img src={logo} alt="logo" />
          <p>masterpiece</p>
      </div>

      <div className="footerLinks">
        <div className="reserved">
          <p>2024 KwaraArt - All Rights Reserved</p>
        </div>
        <div className="mails">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M22 12.98v2.52c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5" stroke="#b0b3b1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9" stroke="#b0b3b1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <p>example@email.com</p>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M9.39 6.01c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78 0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56" stroke="#b0b3b1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <p>+123 456 7890</p>
          </span>
        </div>
        <div className="address">
          <p>2 Macaroni Sreet, Pasta Land</p>
          <p>Food Buffet</p>
        </div>
        <div className="socials">
          <p>Follow my socials:</p>
          <span className='soso'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M2 13.03V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9" stroke="#b0b3b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="#b0b3b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.636 7h.012" stroke="#b0b3b1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10c-1.84 0-3.57-.5-5.06-1.37L2 22l1.34-5A9.966 9.966 0 0 1 2 12c0-3.7 2.01-6.93 5-8.66" stroke="#b0b3b1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17 15.17c0 .18-.04.37-.13.55a2.279 2.279 0 0 1-1.16 1.1c-.3.13-.63.19-.98.19-.51 0-1.06-.12-1.63-.37-.58-.25-1.15-.58-1.72-.99-.58-.42-1.12-.89-1.64-1.4-.52-.52-.98-1.07-1.4-1.64-.41-.57-.74-1.14-.98-1.71C7.12 10.33 7 9.78 7 9.26c0-.34.06-.67.18-.97.12-.31.31-.59.58-.84.32-.32.67-.47 1.04-.47.14 0 .28.03.41.09.13.06.25.15.34.28l1.16 1.64c.09.13.16.24.2.35.05.11.07.21.07.31 0 .12-.04.24-.11.36s-.16.24-.28.36l-.38.4c-.06.06-.08.12-.08.2 0 .04.01.08.02.12.02.04.03.07.04.1.09.17.25.38.47.64a13.48 13.48 0 0 0 1.53 1.53c.26.22.48.37.65.46.03.01.06.03.09.04.04.02.08.02.13.02.09 0 .15-.03.21-.09l.38-.38c.13-.13.25-.22.36-.28.12-.07.23-.11.36-.11.1 0 .2.02.31.07.11.05.23.11.35.2l1.66 1.18c.13.09.22.2.28.32 0 .12.03.24.03.38Z" stroke="#b0b3b1" strokeWidth="1.5" strokeMiterlimit="10"></path></svg>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
