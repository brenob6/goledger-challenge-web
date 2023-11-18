import { useRequest } from '../../hooks/useRequest'
import { PlaylistButton } from './PlaylistButton'
import { VStack } from '@chakra-ui/react'


export function Playlist() {

	const { data, error, isLoading } = useRequest("/query/search", "playlist");

	return(
		<VStack spacing={0.5}>
			{!isLoading && !error && data.map(item => (
				<PlaylistButton
					key={item['@key']}
					_key={item['@key']}
				/>
			))}
		</VStack>
	)
}
