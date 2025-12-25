import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const Swipere = ({ AnimeArray = [] }) => {
  const swiperRef = useRef(null);

  return (
    <div className="relative flex items-center justify-center w-[900px]:">
      {/* زر السابق */}
      <button 
        onClick={() => swiperRef.current?.slidePrev()}
        className="swip-btn absolute left-[8%] z-10 px-4 py-4 rotate-45 bg-secondry text-white -translate-x-full"
      >
        <div className='-rotate-45'>
            <IoIosArrowBack className='text-[20px]' />
        </div>
      </button>

      {/* Swiper Container */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        loop={true}
        // pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="swip-slide mx-4"
      >
        {AnimeArray.map((e, i) => (
          <SwiperSlide key={i} className="swip-slide">
            <div className='m-auto w-full h-[400px] md:h-[500px] lg:h-[600px] relative'>
  <div className='absolute inset-0'>
    <img src={e.img} alt={e.animeName} className='w-full h-full object-cover' />
  </div>

  <div className='absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-black/80 via-black/50 to-transparent'>
    {/* Date and Genre */}
    <div className='flex flex-wrap items-center gap-3 mb-2'>
      <span className='text-white/80 text-sm'>{e.date}</span>
      <span className='w-1 h-1 bg-white/50 rounded-full'></span>
      <span className='text-white/80 text-sm'>{e.sort}</span>
    </div>
    
    {/* Title */}
    <div className='mb-6'>
      <h3 className='text-white text-2xl md:text-3xl font-bold'>{e.animeName}</h3>
    </div>
    
    {/* Button */}
    <div>
      <button className='uppercase bg-primary hover:bg-black cursor-pointer  text-white py-3 px-6 rounded-md font-medium transition-colors duration-200'>
        Watch now
      </button>
    </div>
  </div>
</div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* زر التالي */}
      <button 
        onClick={() => swiperRef.current?.slideNext()}
        className="swip-btn absolute right-[8%] z-10 px-4 py-4  bg-secondry rotate-45 text-white translate-x-full"
      >
        <div className=''>
            <IoIosArrowForward  className='text-[20px]  -rotate-45'/>
        </div>
      </button>
    </div>
  );
};

export default Swipere;


/*
<div className='w-[100%] h-[400px] relative '>
              <div className='w-full h-full absolute '>
              <img src={e.img} alt="" className='object- w-full h-full' />
              </div>

              <div className='absolute top-0 left-0 w-full h-full flex flex-col gap-[30px] p-[50px] justify-end bg-gradient-to-t from-black/50 to-black/5'>
               
                <div>
                  <h3 >{e.animeName}</h3>
                </div>
                
                <div>

                </div>

                <div>
                  <button className='uppercase bg-primary py-[10px] px-[20px] rounded-[5px]'>Watch now</button>
                </div>
              </div>
            </div>
*/