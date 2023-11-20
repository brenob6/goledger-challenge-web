import { Button, HStack, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Skeleton, Text, TextProps, useDisclosure } from "@chakra-ui/react";
import { useAsset } from "../hooks/useAsset";

interface ArtistTextProps {
	artists?: Array<any>
	isLoading: boolean
}

interface ArtistProps {
	artist: string
}

function Artist({ artist }: ArtistProps) {
	const { data, error, isLoading } = useAsset("artist", artist)
	const { isOpen, onOpen, onClose } = useDisclosure()

	return(
		<>
		<Text as='u' _hover={{color:'blue.200'}} cursor='pointer' onClick={onOpen}>{data?.name}</Text>
		<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{ data?.name }</ModalHeader>
					<ModalBody>
						{data?.about}
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="red" onClick={onClose}>Fechar</Button>
					</ModalFooter>
				</ModalContent>
		</Modal>
		</>
	)
}

export function ArtistsText({ artists, isLoading }: ArtistTextProps) {

	return (
		<Skeleton isLoaded={!isLoading}>
			<HStack>{artists?.map((artist, index) => (
				<Artist key={index+"artist"} artist={artist['@key']} />
			))}</HStack>
		</Skeleton>
	)
	
}
