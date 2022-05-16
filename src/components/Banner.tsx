import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export function Banner() {
  return(
    <Box h="80" bgImage="background.png" bgSize="cover" bgPosition="center" bgRepeat="no-repeat">
      <Flex maxW="1120px" mx="auto" align="center" justify="space-between">
        <Stack display="flex" flexDirection="column" gap="5">
          <Heading as="h1" size="xl" fontWeight="medium" color="brand.white">
            5 continentes, infinitas possibilidades.
          </Heading>
          <Text fontSize="xl" fontWeight="regular" color="brand.white">
            Chegou a hora de tirar do papel a viagem que você<br/>sempre sonhou.
          </Text>
        </Stack>
        <Image mt="16" src="airplane.svg" alt="airplane trip illustration" />
      </Flex>
    </Box>
  );
}