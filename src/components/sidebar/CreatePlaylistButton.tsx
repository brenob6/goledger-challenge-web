import { Button, Icon, Input, Modal, ModalBody, ModalContent, ModalOverlay, Stack, Text, Textarea, useDisclosure, useToast } from "@chakra-ui/react";
import { IoIosAddCircle } from "react-icons/io";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";

interface CreatePlaylistButtonProps {
	isCollapsed: boolean
}

interface Inputs {
	name: string
	description: string
}
export function CreatePlaylistButton({ isCollapsed }: CreatePlaylistButtonProps) {

	const { onOpen, onClose, isOpen } = useDisclosure()
	const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
	const toast = useToast()

	function onSubmit({ name, description }: Inputs) {
		api.post('/invoke/createAsset', {
			asset: [
				{
					"@assetType": "playlist",
					name,
					description 
				}
			]
		})
		.then(() => toast({
			title:"Sucesso",
			status: 'success',
			description: "Uma nova playlist foi criada",
			duration: 3000,
		}))
		.catch(() => toast({
			title:"Falha",
			status: "error",
			description: "Ocorreu um erro =(",
			duration: 3000
		}))
	}

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
					<form onSubmit={handleSubmit(onSubmit)}>
						<Stack>
							<Text>Nome:</Text>
							<Input {...register('name', {required: true})}/>
							<Text>Descrição:</Text>
							<Textarea {...register('description')}/>
							<Button type="submit" colorScheme="blue">Criar Playlist</Button>
							<Button type='reset' colorScheme="red" onClick={onClose}>Cancelar</Button>
						</Stack>
					</form>
				</ModalBody>
			</ModalContent>
		</Modal>
		</>
	)
}
