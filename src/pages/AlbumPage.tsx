import { Box, Grid, Text } from '@chakra-ui/react'
import { AlbumCard } from '../components/cards/AlbumCard';
import { useRequest } from '../hooks/useRequest';

export function AlbumPage() {

	const { data, error, isLoading } = useRequest("/query/search", "album");
	
	return (
		<Box m={3}>
			<Text as='b' fontSize='4xl'>Álbuns</Text>	
			<Grid gap={1} templateColumns='repeat(auto-fill, minmax(224px, 1fr))'> 
				{!isLoading && data.map(item => (
					<AlbumCard
						key={item['@key']}
						title={item.title}
						rating={item.rating}
						releaseDate={item.releaseDate}
					/>
				))}
			</Grid>
		</Box>
	)
}
