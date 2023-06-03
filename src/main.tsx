import React from 'react'
import { ChakraProvider, extendTheme, type ThemeConfig } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles: {
    global: {
      // styles for the `body`
      body: {
        backgroundColor: '#121212',
        margin: 0,
        padding: 0,
        height: '100vh',
        Width: '100%',
        scrollBehavior: 'smooth',
      },
      // styles for the `header`
      '.screen': {
        width: '100%',
        minHeight: '85vh',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'url(https://i.ibb.co/nC6p7zZ/bkg.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
      // styles for the odd items
      '.odd': {
        backgroundColor: '#ebe8e8',
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
