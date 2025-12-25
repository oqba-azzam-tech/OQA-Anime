// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
// import './HeroSlider.css'; // ملف CSS مخصص

const HeroSlider = ({ slides = [] }) => {
  return (
    <div className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* صورة الخلفية */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* طبقة تظليل */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>

            {/* المحتوى النصي */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="max-w-3xl">
                  {/* العنوان الرئيسي مع التدرج */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                    <span className="block text-white">{slide.titleLine1}</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                      {slide.titleLine2}
                    </span>
                  </h1>

                  {/* النص الوصفي */}
                  <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
                    {slide.description}
                  </p>

                  {/* النص السفلي */}
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                    <p className="text-white text-2xl md:text-3xl font-semibold tracking-wider">
                      {slide.bottomText}
                    </p>
                  </div>

                  {/* الأزرار */}
                  <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1">
                      شاهد الآن
                    </button>
                    <button className="px-8 py-3 bg-transparent border-2 border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-all duration-300">
                      معرفة المزيد
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* تخصيص أزرار التنقل */}
      <div className="swiper-button-next-custom">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <div className="swiper-button-prev-custom">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>

      {/* مؤشر التمرير */}
      <div className="absolute bottom-8 left-8 z-20">
        <div className="flex items-center gap-2">
          <span className="text-white text-sm">01</span>
          <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 swiper-progress"></div>
          </div>
          <span className="text-white text-sm">03</span>
        </div>
      </div>
    </div>
  );
};

// بيانات المثال
const slidesData = [
  {
    image: "https://images.unsplash.com/photo-1618331833071-1c0c6ee3d19e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    titleLine1: "Fate / Stay Night:",
    titleLine2: "Unlimited Blade Works",
    description: "After 30 days of travel across the world, a new journey begins in the realm of unlimited possibilities.",
    bottomText: "UNLIMITED BLADE WORKS"
  },
  {
    image: "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    titleLine1: "Another Epic",
    titleLine2: "Adventure Awaits",
    description: "Embark on a journey through mystical lands and discover secrets hidden for centuries.",
    bottomText: "EPIC ADVENTURE"
  }
];

export default HeroSlider;
export { slidesData };