import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        margin: 0,
        padding: 0,
        height: '100vh',
        Width: '100%',
        scrollBehavior: 'smooth',
      },
      // styles for the `header`
      '.screen': {
        width: '100%',
        height: '100vh',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
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
