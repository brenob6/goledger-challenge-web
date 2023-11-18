import { Avatar, Button, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Skeleton, VStack, useDisclosure } from '@chakra-ui/react'
import { PlaylistItem } from './PlaylistItem'
import { useAsset } from '../../hooks/useAsset'

interface PlaylistButtonProps {
	_key: string
}

export function PlaylistButton({ _key }: PlaylistButtonProps) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { data, error, isLoading } = useAsset("playlist", _key)	

	return (
		<>
		<Button 
			isLoading={isLoading}
			colorScheme='teal'
			justifyContent='left' 
			borderRadius={0}
			leftIcon={<Avatar name={data?.name} size={"sm"}/>}
			w='full'
			onClick={onOpen}
		>
			{data?.name}
		</Button>

		<Modal
			isOpen={isOpen}
			onClose={onClose}
			size='xl'
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{data?.name}</ModalHeader>
				<ModalBody>
					<VStack alignItems='left'>
						{!isLoading && !error && data.songs?.map(item => (
							<PlaylistItem key={item['@key']} _key={item['@key']}/>
						))}
					</VStack>
				</ModalBody>
			</ModalContent>
		</Modal>
		</>
	)
}
