import { Avatar, Button } from '@chakra-ui/react'

interface PlayListItemProps {
	name: string
}

export function PlaylistItem({ name }: PlayListItemProps) {
	return (
		<Button 
			colorScheme='teal'
			justifyContent='left' 
			borderRadius={0}
			leftIcon={<Avatar name={name} size={"sm"}/>}
			w='full'
		>
			{name}
		</Button>
	)
}
