import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      "gray": "#47585B",
      "white": "#F5F8FA",
      "yellow": "#FFBA08",
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'brand.white',
        color: 'brand.gray',
      }
    }
  },
})