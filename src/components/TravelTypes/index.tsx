import { Container } from "@chakra-ui/react";
import { Types } from "./Types";

export function TravelTypes() {
  return(
    <Container maxW='1120px' mt='28' display='flex' justifyContent='space-between'>
      <Types icon='cocktail.svg' altImage='cocktail icon' title='vida noturna' />
      <Types icon='surf.svg' altImage='beach icon' title='praia' />
      <Types icon='building.svg' altImage='building icon' title='moderno' />
      <Types icon='museum.svg' altImage='musuem icon' title='clássico' />
      <Types icon='earth.svg' altImage='earth icon' title='e mais...' />
    </Container>
  );
}