import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper';
import { Container } from '@chakra-ui/react';
import Link from 'next/link';

import { SwiperItem } from "./SwiperItem";
import { api } from '../../services/api';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
        { continentItem.map(continent => {
          return( 
            <SwiperSlide key={continent.id}>
                <SwiperItem 
                  title={continent.title} 
                  abstract={continent.abstract}
                  backgroundImg={continent.backgroundImage}
                /> 
            </SwiperSlide>         
          );
        }) }
      </Swiper>
    </Container>
  );
}

// {continentItem.map(continent => {
//   return (
//     <SwiperItem 
//       key={continent.id} 
//       title={continent.title} 
//       abstract={continent.abstract}
//       backgroundImg={continent.backgroundImage}
//     />
//   )
// })}