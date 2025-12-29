import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef, useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Swipere = ({ AnimeArray = [] }) => {
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size changes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full px-4 md:px-8">
      {/* زر السابق */}
      <button 
        onClick={() => swiperRef.current?.slidePrev()}
        className={`
          swip-btn absolute z-10 px-3 py-3 md:px-4 md:py-4 
          rotate-45 bg-secondry text-white 
          left-0 md:left-[5%] lg:left-[8%]
          -translate-x-1/2 md:-translate-x-full
          hover:bg-primary transition-colors duration-200
          ${isMobile ? 'hidden' : 'block'}
        `}
        aria-label="Previous slide"
      >
        <div className='-rotate-45'>
            <IoIosArrowBack className='text-[16px] md:text-[20px] lg:text-[24px]' />
        </div>
      </button>

      {/* Swiper Container */}
      <div className="w-full max-w-full">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={true}
          loop={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="swip-slide w-full"
          style={{
            '--swiper-navigation-size': '24px',
            '--swiper-navigation-color': '#ffffff',
          }}
          breakpoints={{
            // عند 500px أو أقل
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            // عند 501px إلى 767px
            501: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // عند 768px إلى 1023px
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // عند 1024px أو أكثر
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
        >
          {AnimeArray.map((e, i) => (
            <SwiperSlide key={i} className="swip-slide">
              <div className={`
                w-full relative overflow-hidden rounded-lg md:rounded-xl
                ${isMobile ? 'h-[450px]' : 'h-[400px] md:h-[500px] lg:h-[600px]'}
                shadow-2xl
              `}>
                {/* Background Image */}
                <div className='absolute inset-0'>
                  <img 
                    src={e.img} 
                    alt={e.animeName} 
                    className='w-full h-full object-cover object-center'
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                  
                  {/* Overlay gradient for better text readability */}
                  <div className='absolute inset-0  to-transparent'></div>
                </div>

                {/* Content */}
                <div className='
                  absolute inset-0 
                  flex flex-col justify-end 
                  p-4 sm:p-6 md:p-8 lg:p-12
                  bg-gradient-to-t from-black/30 via-black/50 to-transparent
                '>
                  {/* Date and Genre */}
                  <div className='flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4'>
                    <span className='text-white/90 text-xs md:text-sm font-medium'>
                      {e.date}
                    </span>
                    <span className='w-1 h-1 md:w-1.5 md:h-1.5 bg-white/70 rounded-full'></span>
                    <span className='text-white/90 text-xs md:text-sm font-medium'>
                      {e.sort}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <div className='mb-6 md:mb-8'>
                    <h3 className={`
                      text-white font-bold 
                      ${isMobile ? 
                        'text-3xl sm:text-4xl leading-tight' : 
                        'text-2xl md:text-3xl lg:text-4xl xl:text-5xl'
                      }
                      drop-shadow-lg
                    `}>
                      {e.animeName}
                    </h3>
                  </div>
                  
                  {/* Button */}
                  <div className='mb-4 md:mb-6'>
                    <button className={`
                      uppercase bg-primary hover:bg-primary/90 
                      text-white font-semibold 
                      transition-all duration-300 
                      transform hover:scale-105 
                      active:scale-95
                      rounded-lg md:rounded-xl
                      shadow-lg hover:shadow-xl
                      ${isMobile ? 
                        'py-4 px-8 text-base w-full' : 
                        'py-3 md:py-4 px-6 md:px-8 text-sm md:text-base'
                      }
                    `}>
                      Watch now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* زر التالي */}
      <button 
        onClick={() => swiperRef.current?.slideNext()}
        className={`
          swip-btn absolute z-10 px-3 py-3 md:px-4 md:py-4 
          bg-secondry rotate-45 text-white 
          right-0 md:right-[5%] lg:right-[8%]
          translate-x-1/2 md:translate-x-full
          hover:bg-primary transition-colors duration-200
          ${isMobile ? 'hidden' : 'block'}
        `}
        aria-label="Next slide"
      >
        <div className='-rotate-45'>
            <IoIosArrowForward className='text-[16px] md:text-[20px] lg:text-[24px]' />
        </div>
      </button>

      {/* Pagination dots for mobile (optional) */}
      {isMobile && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {AnimeArray.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current?.slideTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                swiperRef.current?.activeIndex === index ? 'bg-primary w-4' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Swipere;