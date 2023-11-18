import { Box, Button } from '@chakra-ui/react'
import { IoMdAdd } from 'react-icons/io';
import { Playlist } from './Playlist'

export function Sidebar() {
	return (
		<Box 
			borderRightWidth={1} 
			borderColor='teal.500' 
			top={0}
			left={0}
			h='100vh'
			position='sticky'
			>
		<Button 
			leftIcon={<IoMdAdd />}
			colorScheme='blue'
			variant='outline'
		>Nova Playlist</Button>
		<Playlist />
		</Box>
	);
}
