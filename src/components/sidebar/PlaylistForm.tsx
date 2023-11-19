import { Button, Input, Stack, Text, Textarea, useToast } from "@chakra-ui/react"
import { api } from "../../services/api"
import { useForm } from "react-hook-form";

interface Inputs {
	name: string
	description: string
}

export function PlaylistForm() {

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
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack>
				<Text>Nome:</Text>
				<Input {...register('name', {required: true})}/>
				<Text>Descrição:</Text>
				<Textarea {...register('description')}/>
				<Button type="submit" colorScheme="blue">Criar Playlist</Button>
				<Button type='reset' colorScheme="red">Cancelar</Button>
			</Stack>
		</form>
	)
}
