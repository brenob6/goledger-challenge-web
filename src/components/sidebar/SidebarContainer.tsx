import { Button } from '@chakra-ui/react'
import { IoMdAdd } from 'react-icons/io';
import { Playlist } from './Playlist'

export function Sidebar() {
	return (
		<>
		<Button 
			leftIcon={<IoMdAdd />}
			colorScheme='blue'
			variant='outline'
		>Nova Playlist</Button>
		<Playlist />
		</>
	);
}
