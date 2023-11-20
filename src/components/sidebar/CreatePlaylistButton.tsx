import { Button, Icon, Input, Modal, ModalBody, ModalContent, ModalOverlay, Stack, Text, Textarea, useBoolean, useDisclosure, useToast } from "@chakra-ui/react";
import { IoIosAddCircle } from "react-icons/io";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { mutate } from "swr";

interface CreatePlaylistButtonProps {
	isCollapsed: boolean
}

interface Inputs {
	name: string
	description: string
}
export function CreatePlaylistButton({ isCollapsed }: CreatePlaylistButtonProps) {

	const { onOpen, onClose, isOpen } = useDisclosure()
	const { register, reset, handleSubmit, formState: { errors } } = useForm<Inputs>()
	const toast = useToast()
	const [ isLoading, setLoading ] = useBoolean()

	function onSubmit({ name, description }: Inputs) {
		setLoading.on()
		api.post('/invoke/createAsset', {
			asset: [
				{
					"@assetType": "playlist",
					name,
					description 
				}
			]
		})
		.then(() => {
			toast({
				title:"Sucesso",
				status: 'success',
				description: "Uma nova playlist foi criada",
				duration: 3000,
			});
			mutate(["/query/search","playlist"])	
			reset()
			onClose()
		})
		.catch(() => toast({
			title:"Falha",
			status: "error",
			description: "Ocorreu um erro =(",
			duration: 3000
		})).finally(setLoading.off)
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
							<Button type="submit" isLoading={isLoading} colorScheme="blue" >Criar Playlist</Button>
							<Button
								type='reset'
								isLoading={isLoading}
								colorScheme="red"
								onClick={() => {
									reset()
									onClose()
								}}>
									Cancelar
							</Button>
						</Stack>
					</form>
				</ModalBody>
			</ModalContent>
		</Modal>
		</>
	)
}
