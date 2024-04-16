import 'animate.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
const Banner = () => {

 
    return (
        <div className='mt-[60px] lg:mx-[100px] mb-[50px] top-0'>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/DRfj31B/32104.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInLeft">Single House</h1>
      <p className="mb-5 animate__animated animate__backInLeft">Single-family homes typically offer greater privacy compared to other types of residential properties due to being standalone structures..</p>
      <button className="btn font-bold bg-lime-500 animate__animated animate__backInLeft">Show details</button>
    </div>
  </div>
</div>

          
        </SwiperSlide>
        <SwiperSlide>
            
            
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/4K3wRGF/intercom-gate-front-residential-building.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInLeft">Town House</h1>
      <p className="mb-5 animate__animated animate__backInLeft"> Townhouses typically share one or more walls with neighboring units, offering a balance between the privacy of single-family homes and the density of apartments..</p>
      <button className="btn font-bold bg-lime-500 animate__animated animate__backInLeft">Show details</button>
    </div>
  </div>
</div>
        
        </SwiperSlide>
        <SwiperSlide>
              
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/kKMdNqR/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl animate__animated animate__backInLeft font-bold">Apartments</h1>
      <p className="mb-5 animate__animated animate__backInLeft"> Apartments are typically rented rather than owned, offering flexibility for tenants who may prefer not to commit to homeownership..</p>
      <button className="btn font-bold bg-lime-500 animate__animated animate__backInLeft">Show details</button>
    </div>
  </div>
</div>


            </SwiperSlide>
        <SwiperSlide>
           
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/3c6rZgB/talking-teens.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInLeft">Student Housing</h1>
      <p className="mb-5 animate__animated animate__backInLeft">Student housing is typically located in close proximity to universities and colleges, offering convenience for students attending classes.</p>
      <button className="btn font-bold bg-lime-500 animate__animated animate__backInLeft">Show details</button>
    </div>
  </div>
</div>
            
            </SwiperSlide>
      
       
        
      </Swiper>
        </div>
    );
};

export default Banner;