import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper';
import { Container } from '@chakra-ui/react';

import { SwiperItem } from "./SwiperItem";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

interface ContinentsProps {
  id: number;
  title: string;
  abstract: string;
  backgroundImage: string;
}

export function SwiperBanner() {
  const [continentItem, setContinentItem] = useState<ContinentsProps[]>([]);

  useEffect(() => {
    api.get('continents').then(response => setContinentItem(response.data))
  }, []);

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
          {continentItem.map(continent => {
            return (
              <SwiperItem 
                key={continent.id} 
                title={continent.title} 
                abstract={continent.abstract}
                backgroundImg={continent.backgroundImage}
              />
            )
          })}
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}