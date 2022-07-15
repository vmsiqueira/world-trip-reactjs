import { Box, Heading, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

interface ContinentProps {
    title: string;
    abstract: string;
    backgroundImg: string;
}

export function SwiperItem({ title, abstract, backgroundImg }: ContinentProps){
  return (
    <Link href={`/${title.toLocaleLowerCase()}`}>
      <a>
        <Box 
          mt='52px' 
          bg='pink.100' 
          maxW='1120px' 
          h='450px' 
          bgImage={backgroundImg}
          bgSize='cover'
          bgRepeat='no-repeat'
          mx='auto'
          mb='10'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          position='relative'
        >
          <>
            <Box w='full' h='full' position='absolute' bgColor='blackAlpha.500' />
              <Heading zIndex='1' color='brand.white' size='2xl' fontWeight='bold'>
                {title}
              </Heading>
              <Text zIndex='1' maxW='2xl' mt='4' fontSize='sm' fontWeight='bold' color='brand.white' align='center'>
                {abstract}
              </Text>
          </>
        </Box>
      </a>
    </Link>
  );
}