import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import './Slider.scss';

export const importAll = (r: __WebpackModuleApi.RequireContext) => {
  return r.keys().map((fileName: string) => r(fileName));
}

const images = importAll(require.context('../../assets/images/slides', false, /\.png/));

SwiperCore.use([Navigation, Pagination, A11y]);

function Slider() {
  
  const slidesContent = [
    {
      title: 'Tokenplace',
      description: 'Multi-exchange Trading Terminal',
      image: images[0].default,
    },
    {
      title: 'Fund Platform',
      description: 'Hedge funds wealth management',
      image: images[1].default,
    },
    {
      title: 'Noviscient',
      description: 'Management Platform',
      image: images[2].default,
    }
  ];

  return (
    <div className="slider">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="slider__main"
      >
        {slidesContent.map((slideContent) => (
            <SwiperSlide key={slideContent.image} className="slider__slide">
              <img src={slideContent.image} alt={slideContent.title} className="slider__image" />
              <h2 className="slider__title">{slideContent.title}</h2>
              <p className="slider__description">{slideContent.description}</p>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Slider;