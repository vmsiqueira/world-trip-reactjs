import { Box, Heading } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { SwiperBanner } from "../components/Swiper";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Banner />
      <TravelTypes />
      <Box bg='brand.gray' w='90px' h='1px' mt='20' mb='14' mx='auto' />
      <Heading as='h2' textAlign='center' size='xl' lineHeight='54px' fontWeight='medium'>
        Vamos nessa?<br/>Então escolha o seu continente
      </Heading>
      <SwiperBanner />
    </>
  )
}
