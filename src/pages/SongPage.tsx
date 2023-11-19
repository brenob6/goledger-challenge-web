import { Box, Grid, Text, VStack } from '@chakra-ui/react'
import { useRequest } from '../hooks/useRequest';
import { SongCard } from '../components/cards/SongCard';
import { PlaylistItem } from '../components/sidebar/PlaylistItem';


export function SongPage() {

	const { data, error, isLoading } = useRequest("/query/search", "song");

	console.log(data)

	return (
		<VStack alignItems='left'>
			<Text as='b' fontSize='4xl'>{data?.name}</Text>
			{!isLoading && !error && data.map((item: any) => (
				<PlaylistItem key={item['@key']} _key={item['@key']}/>
			))}
		</VStack>
	)
}
