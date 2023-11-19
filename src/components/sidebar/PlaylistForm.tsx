import { Button, Input, Stack, Text, Textarea } from "@chakra-ui/react"
import { api } from "../../services/api"
import { useForm } from "react-hook-form";

interface Inputs {
	name: string
	description: string
}

export function PlaylistForm() {

	const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
	function onSubmit({ name, description }: Inputs) {
		api.post('/invoke/createAsset', {
			asset: [
				{
					"@assetType": "playlist",
					name,
					description 
				}
			]
		}).then(res => {
				console.log(res)
		}).catch(err => {
			console.log(err)
		});
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack>
				<Text>Nome:</Text>
				<Input {...register('name', {required: true})}/>
				<Text>Descrição:</Text>
				<Textarea {...register('description')}/>
				<Button type="submit">Criar Playlist</Button>
				<Button type='reset' colorScheme="red">Cancelar</Button>
			</Stack>
		</form>
	)
}
