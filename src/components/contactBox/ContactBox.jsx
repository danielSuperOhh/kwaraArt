import './ContactBox.css'

const ContactBox = () => {
  return (
    <div className='contactBox'>
        <div className="theContactBox">
            <div className="infoAbout">
                <p className='ioni'>INFO</p>
                <h4 className='endy'>ABOUT</h4>
            </div>
            <div className="ourWorks">
                <p className='ioni'>OUR WORKS</p>
                <h4 className='endy'>PORTFOLIO</h4>
            </div>
            <div className="writeUs">
                <p className='ioni'>CONTACT</p>
                <h4 className='endy'>WRITE US</h4>
            </div>
        </div>
    </div>
  )
}

export default ContactBox