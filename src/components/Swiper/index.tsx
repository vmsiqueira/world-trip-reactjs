import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper';
import { Container } from '@chakra-ui/react';

import { SwiperItem } from "./SwiperItem";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function SwiperBanner() {
  return(
    <Container maxW='1120px'>
      <Swiper
        modules={[Navigation, Pagination, Keyboard]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        keyboard
        onSlideChange={() => console.log('slideChange')}
        onSwiper={(swiper) => console.log('swiper')}
      >
        <SwiperSlide>
          <SwiperItem />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperItem />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperItem />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}