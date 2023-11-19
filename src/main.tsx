import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { PlaylistProvider } from './contexts/PlaylistProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
			<ChakraProvider>
				<PlaylistProvider>
					<App />
				</PlaylistProvider>
			</ChakraProvider>
  </React.StrictMode>,
)
