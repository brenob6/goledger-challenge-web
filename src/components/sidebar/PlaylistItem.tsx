import { Avatar, Button } from '@chakra-ui/react'

export function PlaylistItem() {
	return (
		<Button 
			colorScheme='teal'
			justifyContent='left' 
			borderRadius={0}
			leftIcon={<Avatar name='Michael Jackson' size={"sm"}/>}
			w='full'
		>
			Nome da playlist
		</Button>
	)
}
