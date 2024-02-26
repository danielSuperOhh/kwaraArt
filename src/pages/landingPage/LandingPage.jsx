import React, { useEffect } from 'react';
import './landingPage.css';
import Section1 from '../../components/section1/Section1';
import Section2 from '../../components/section2/Section2';
import Section3 from '../../components/section3/Section3';
import Section4 from '../../components/section4/Section4';
import Section5 from '../../components/section5/Section5';
import ScrollToTop from '../../components/scrollToTopp/ScrollToTop';
import { useLoading } from '../../components/loadingContext/LoadingContext';
import Response from '../../components/response/Response';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/navbar/Navbar';
// import loader from '../../assets/loader.png'

const LandingPage = () => {
  const { loading, setGlobalLoading } = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setGlobalLoading(false);
    };

    if (loading) {
      fetchData();
    }
  }, [loading, setGlobalLoading]);

  const colors = ['#ff5733', '#33ff57', '#5733ff', '#da70d6', '#8bbe1b'];

  return (
    <div className='landingPage'>
      {loading ? (
        <div className="loader-container">
          <div className="loader">
            {/* <img src={loader} alt="" /> */}
          </div>
        </div>
      ) : (
        <div className="content ">
          <div className="contentCover">
            <NavBar/>
            <Section1 />
          </div>
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <ScrollToTop />
            <Response/>
            <Footer/>
        </div>
      )}
    </div>
  );
};

export default LandingPage;