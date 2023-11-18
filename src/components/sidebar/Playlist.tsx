import { useRequest } from '../../hooks/useRequest'
import { PlaylistButton } from './PlaylistButton'
import { VStack } from '@chakra-ui/react'


export function Playlist() {

	const { data, error, isLoading } = useRequest("/query/search", "playlist");

	return(
		<VStack spacing={0.5}>
			{!isLoading && data.map(item => (
				<PlaylistButton
					key={item['@key']}
					name={item.name}
				/>
			))}
		</VStack>
	)
}
