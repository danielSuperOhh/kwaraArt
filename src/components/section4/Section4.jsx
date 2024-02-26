import ContactBox from '../contactBox/ContactBox'
import './section4.css'

const Section4 = () => {
  return (
    <div className='section4'>
      <div className="testimonials">
        <div className="testimonialHead">
          <h2>Client Love</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur 
          </p>
        </div>
        <div className="testimonialText">
          <p>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Hic vero corporis eum dicta minima necessitatibus a at, consequatur 
            enim autem deserunt magni quod ea omnis, aut illo numquam pariatur perferendis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, veniam.
            "
          </p>
          <span className='testName'> 
            <p>Agbogbo Cakes</p>
          </span>

          <div className="line"></div>

          <p>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Hic vero corporis eum dicta minima necessitatibus a at, consequatur 
            enim autem deserunt magni quod ea omnis, aut illo numquam pariatur perferendis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, veniam.
            "
          </p>
          <span className='testName'> 
            <p>Agbogbo Cakes</p>
          </span>

        </div>
      </div>
      <div className="textButton">
        <button>
            More testimonials
        </button>
      </div>

      <ContactBox/>
    </div>
  )
}

export default Section4