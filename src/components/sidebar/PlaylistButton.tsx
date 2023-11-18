import { Avatar, Button, Grid, GridItem, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, VStack, useDisclosure } from '@chakra-ui/react'
import { PlaylistItem } from './PlaylistItem'

interface PlayListItemProps {
	name: string
}

export function PlaylistButton({ name }: PlayListItemProps) {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
		<Button 
			colorScheme='teal'
			justifyContent='left' 
			borderRadius={0}
			leftIcon={<Avatar name={name} size={"sm"}/>}
			w='full'
			onClick={onOpen}
		>
			{name}
		</Button>

		<Modal
			isOpen={isOpen}
			onClose={onClose}
			size='xl'
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Título da Playlist</ModalHeader>
				<ModalBody>
					<VStack alignItems='left'>
						<PlaylistItem />
						<PlaylistItem />
						<PlaylistItem />
						<PlaylistItem />
					</VStack>
				</ModalBody>
			</ModalContent>
		</Modal>
		</>
	)
}
