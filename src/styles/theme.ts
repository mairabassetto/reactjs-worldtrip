import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    black: '#000000',
    gray:{
      600: '#47585B',
      500: "#718096",
      200: '#DADADA',
      100: "#EDF2F7",
      60: "#999999",
      50: "#F5F8FA",
    },
    white: '#FFFFFF',
    yellow: {
      500: '#FFBA08',
      400: '#ECC94B'
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'black',
      }
    }
  }
})