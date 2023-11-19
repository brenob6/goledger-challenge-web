import { Avatar, Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, VStack, useDisclosure } from '@chakra-ui/react'
import { PlaylistItem } from './PlaylistItem'
import { useAsset } from '../../hooks/useAsset'
import { useRef, useState } from 'react'
import { api } from '../../services/api'
import { useSWRConfig } from 'swr'

interface PlaylistButtonProps {
	_key: string
}

interface PlaylistButtonProps {
	isCollapsed: boolean
}

export function PlaylistButton({ _key, isCollapsed }: PlaylistButtonProps) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { data, error, isLoading } = useAsset("playlist", _key)	
	const { mutate } = useSWRConfig()

	const menuButtonRef = useRef()

	async function deletePlaylist(name: string) {
		await api.post('/invoke/deleteAsset', {
			key: {
				"@assetType": "playlist",
				name
			}
		}).then(async() => {
			await mutate(["/query/search", "playlist"]);
		})
	}

	return (
		<>
		<Menu direction='ltr'>
		<HStack w='full' justifyContent='right'> 
			<MenuButton as={Box} bg='red'  ref={menuButtonRef} />
		</HStack>
			<MenuList>
				<MenuItem>Renomear</MenuItem>
				<MenuItem onClick={() => deletePlaylist(data?.name)}>Deletar</MenuItem>
			</MenuList>
		</Menu>

		<Button 
			isLoading={isLoading}
			justifyContent='left' 
			borderRadius={0}
			leftIcon={<Avatar name={data?.name} size={"sm"}/>}
			w={!isCollapsed ? '256px' : '70'}
			onClick={onOpen}
			onContextMenu={(e) => {
					e.preventDefault()
					menuButtonRef.current?.click()
				}}
		>
			{!isCollapsed && data?.name}
		</Button>

		<Modal
			isOpen={isOpen}
			onClose={onClose}
			size='xl'
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{data?.name}</ModalHeader>
				<ModalBody>
					<VStack alignItems='left'>
						{!isLoading && !error && data.songs?.map(item => (
							<PlaylistItem key={item['@key']} _key={item['@key']}/>
						))}
					</VStack>
				</ModalBody>
			</ModalContent>
		</Modal>
		</>
	)
}
