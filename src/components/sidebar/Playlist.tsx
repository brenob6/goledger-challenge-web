import { useRequest } from '../../hooks/useRequest'
import { PlaylistButton } from './PlaylistButton'
import { VStack } from '@chakra-ui/react'

interface PlaylistPros {
	isCollapsed: boolean
}

export function Playlist({ isCollapsed }: PlaylistPros) {

	const { data, error, isLoading } = useRequest("/query/search", "playlist");

	return(
		<VStack spacing={0}>
			{!isLoading && !error && data.map((item: any) => (
				<PlaylistButton
					isCollapsed={isCollapsed}
					key={item['@key']}
					_key={item['@key']}
				/>
			))}
		</VStack>
	)
}
