import { Box, Heading, Text, Image } from "@chakra-ui/react";

export function SwiperItem(){
  return (
    <Box 
      mt='52px' 
      bg='pink.100' 
      maxW='1120px' 
      h='450px' 
      bgImage='https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1204&q=80'
      mx='auto'
      mb='10'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      position='relative'
    >
      <Box w='full' h='full' position='absolute' bgColor='blackAlpha.500' />
      <Heading zIndex='1' color='brand.white' size='2xl' fontWeight='bold'>
        Europe
      </Heading>
      <Text zIndex='1' mt='4' fontSize='xl' fontWeight='bold' color='brand.white'>
        O continente mais antigo.
      </Text>
    </Box>
  );
}