import { Flex, Image, Text } from '@chakra-ui/react'

interface TypesProps {
  icon: string;
  altImage: string;
  title: string;
}

export function Types({ icon, altImage, title }: TypesProps) {
  return(
    <Flex direction='column' justify='center' align='center'>
      <Image src={icon} alt={altImage} />
      <Text mt='6' size='6' fontWeight='semibold'>{title}</Text>
    </Flex>
  );
}