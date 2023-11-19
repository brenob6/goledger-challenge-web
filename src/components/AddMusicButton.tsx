import { IconButton, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { api } from "../services/api";
import { usePlaylistContext } from "../hooks/usePlaylistContext";
import { useAsset } from "../hooks/useAsset";

interface AddMusicButtonProps {
	artists: string[]
	title: string
}

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
}

export function AddMusicButton({ artists, title }: AddMusicButtonProps) {

	const { data, isLoading, error } = usePlaylistContext()

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
