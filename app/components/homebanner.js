import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image';
import '../globals.css'

const homebanner = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Image src="/img/Homepage-banner-Final-002.jpeg" width={500} height={500} className='img-bg' />
          </div>
          <div>
            <Image src="/img/homepage-final-001.jpeg" width={500} height={500} className='img-bg' />
          </div>
          <div>
            <Image src="/img/Homepage-banner-final-004-1.jpeg" width={500} height={500} className='img-bg' />
          </div>
        </Slider>
      </div>
    );
};

export default homebanner;