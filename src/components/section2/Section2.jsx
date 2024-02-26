import './section2.css'
import heroart from '../../assets/heroart.png'
import OurProducts from '../ourProducts/OurProducts'

const Section2 = () => {

  return (
    <div className='section2'>
        <div className="section-header">
            <h1>About <span>Artist</span></h1>
        </div>

        <div className="section-display">
            <div className="displayPicture">
                <img src={heroart} alt="" />
            </div>
            <div className="displayText">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Cupiditate a, aperiam culpa impedit, consectetur repudiandae 
                    ratione eum beatae, commodi necessitatibus pariatur? Enim veritatis 
                    aut quam soluta esse incidunt sint recusandae?
                </p>

                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Reprehenderit adipisci possimus quibusdam repellat eum doloribus 
                    laboriosam sed unde, qui molestias similique dolores beatae illum 
                    molestiae dolorem, nam ipsa eos aperiam.
                </p>

                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quis sed a nulla vel vero, minima fugiat nesciunt quos optio 
                    repudiandae dolorum. Minus laborum aliquam veniam magni
                    dolorum eius. Veniam, ipsa.
                </p>

                <button className='displayButton'>
                    Learn More
                </button>
            </div>
        </div>

        <OurProducts/>
    </div>
  )
}

export default Section2