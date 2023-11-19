import { Button, Icon, Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { IoIosAddCircle } from "react-icons/io";
import { PlaylistForm } from "./PlaylistForm";

interface AddPlaylistButtonProps {
	isCollapsed: boolean
}

export function AddPlaylistButton({ isCollapsed }: AddPlaylistButtonProps) {

	const { onOpen, onClose, isOpen } = useDisclosure()

	return (
		<>
		<Button 
			justifyContent='left'
			verticalAlign='center'
			leftIcon={<Icon as={IoIosAddCircle} boxSize='32px' />}
			colorScheme='blue'
			borderBottomRadius={0}
			onClick={onOpen}
		>{!isCollapsed && "Nova Playlist"}</Button>

		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalBody>
					<PlaylistForm />
				</ModalBody>
			</ModalContent>
		</Modal>
		</>
	)
}
