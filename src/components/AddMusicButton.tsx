import { IconButton, Menu, MenuButton, MenuItem, MenuList, useToast } from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { api } from "../services/api";
import { usePlaylistContext } from "../hooks/usePlaylistContext";

interface AddMusicButtonProps {
	artists: string[]
	title: string
}


export function AddMusicButton({ artists, title }: AddMusicButtonProps) {

	const { data, isLoading, error } = usePlaylistContext()
	const toast = useToast()

	async function handleClick(key:string, artists: string[], title:string) {
		const data = await api.post("/query/readAsset", {
			key: {
				"@assetType": "playlist",
				"@key": key
			}
		}).then((res) => res.data)

		console.log(data)

		let songs = data?.songs ?? [];
		songs.push({artists, title})

		api.post("/invoke/updateAsset", {
			update: {
				"@assetType": "playlist",
				name: data.name,
				songs
			}
		})
		.then(() => toast({
			title: "Sucesso",
			description: `A música ${title} foi adicionada a playlist ${data?.name}`,
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
		<Menu>
			<MenuButton
				as={IconButton}
				aria-label='Options'
				icon={<IoMdAdd />}
				variant='outline'
			/>
			<MenuList>
				{!isLoading && !error && data.map((item: any, index:number) => (
					<MenuItem
						key={index+item['@key']}
						onClick={() => handleClick(item['@key'], artists, title)}
					>
						{item.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}
