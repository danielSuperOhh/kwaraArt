import './scrollToTop.css'
import { useState, useEffect } from 'react'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        setIsVisible(scrollTop > 100);
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
  return (
    <div className={`scroll-to ${isVisible ? 'visible' : ''}` }onClick={scrollToTop} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path  strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 18H9.33c-3.31 0-4.67-2.35-3.01-5.22l1.34-2.31L9 8.16c1.66-2.87 4.37-2.87 6.03 0l1.34 2.31 1.34 2.31c1.66 2.87.3 5.22-3.01 5.22H12z"></path></svg>
    </div>
  )
}

export default ScrollToTop