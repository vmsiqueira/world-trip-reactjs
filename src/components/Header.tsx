import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return(
    <Flex h='24' display='flex' justify="center" align="center">
      <Image src="logo.svg" alt="logo World Trip" />
    </Flex>
  );
}