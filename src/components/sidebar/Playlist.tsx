import { PlaylistItem } from './PlaylistItem'
import { VStack } from '@chakra-ui/react'

export function Playlist() {
	return(
		<VStack spacing={0.5}>
			<PlaylistItem/>
			<PlaylistItem/>
			<PlaylistItem/>
		</VStack>
	)
}
