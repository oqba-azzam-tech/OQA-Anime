import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

const vilSwiper  = () => {
  // Create array with 1000 slides
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={1} virtual={true}>
      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index} >
          {slideContent }
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default viSwiper