import { IconButton, useToast } from "@chakra-ui/react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { api } from "../services/api";
import { useParams } from "react-router-dom";

interface DeleteSongButtonProps {
	title: string
	songKey: string
}

export function DeleteSongButton({title, songKey}: DeleteSongButtonProps) {

	const toast = useToast()

	const { _key } = useParams()

	async function handleClick() {
		const data = await api.post("/query/readAsset", {
			key: {
				"@assetType": "playlist",
				"@key": _key
			}
		}).then((res) => res.data)

		let songs = data?.songs ?? [];
	
		var arr = []
		for(let i=0; i<songs.length; i++)
			if(songs[i]['@key']===songKey) continue
			else arr.push(songs[i])

		console.log(arr)

		api.post("/invoke/updateAsset", {
			update: {
				"@assetType": "playlist",
				name: data.name,
				songs: arr
			}
		})
		.then(() => toast({
			title: "Sucesso",
			description: `A música ${title} foi removida da playlist ${data?.name}`,
			status: 'success',
			duration: 3000,
		}))
		.catch(() => toast({
			title: "Falha",
			description: `Ocorreu um erro =(`,
			status: 'error',
			duration: 3000,
		}))
	}

	return (
		<IconButton 
			aria-label='DeleteSong'
			icon={<RiDeleteBin2Line/>}
			colorScheme='red'
			onClick={() => handleClick()}
		/>
	)
}
