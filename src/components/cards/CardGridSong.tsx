import { Box, Grid, Text } from '@chakra-ui/react'
import { useRequest } from '../../hooks/useRequest';
import { SongCard } from './SongCard';


export function CardGridSong() {

	const { data, error, isLoading } = useRequest("/query/search", "song");
	
	return (
		<Box m={3}>
			<Text as='b' fontSize='4xl'>Álbuns</Text>	
			<Grid gap={1} templateColumns='repeat(auto-fill, minmax(224px, 1fr))'> 
				{!isLoading && data.map(item => (
					<SongCard
						key={item['@key']}
						title={item.title}
						explicit={item.explicit}
					/>
				))}
			</Grid>
		</Box>
	)
}
