import { Avatar, Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList, useBoolean } from '@chakra-ui/react'
import { useAsset } from '../../hooks/useAsset'
import { useRef } from 'react'
import { api } from '../../services/api'
import { useSWRConfig } from 'swr'
import { useNavigate } from 'react-router-dom'

interface PlaylistButtonProps {
	_key: string
	isCollapsed: boolean
}

export function PlaylistButton({ _key, isCollapsed }: PlaylistButtonProps) {

	const { data, isLoading: isOnRequest } = useAsset("playlist", _key)	
	const { mutate } = useSWRConfig()
	const navigate = useNavigate()
	const [ isLoading, setLoading ] = useBoolean()

	const menuButtonRef = useRef()

	async function deletePlaylist(name: string) {
		setLoading.on()
		await api.post('/invoke/deleteAsset', {
			key: {
				"@assetType": "playlist",
				name
			}
		}).then(async() => {
			await mutate(["/query/search", "playlist"]);
		}).finally(setLoading.off)
	}

	return (
		<>
		<Menu direction='ltr'>
		<HStack w='full' justifyContent='right'> 
			<MenuButton as={Box} bg='red' ref={menuButtonRef} />
		</HStack>
			<MenuList>
				<MenuItem>Renomear</MenuItem>
				<MenuItem onClick={() => deletePlaylist(data?.name)}>Deletar</MenuItem>
			</MenuList>
		</Menu>

		<Button 
			isLoading={isOnRequest || isLoading}
			justifyContent='left' 
			borderRadius={0}
			hidden={isLoading}
			leftIcon={<Avatar name={data?.name} size={"sm"}/>}
			w={!isCollapsed ? '256px' : '70'}
			onClick={() => {
				navigate(`/playlist/${_key}`)
			}}
			onContextMenu={(e) => {
					e.preventDefault()
					menuButtonRef.current?.click()
				}}
		>
			{!isCollapsed && data?.name}
		</Button>
		</>
	)
}
