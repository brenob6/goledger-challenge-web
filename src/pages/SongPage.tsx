import { Box, Text, VStack } from '@chakra-ui/react'
import { useRequest } from '../hooks/useRequest';
import { SongCard } from '../components/SongCard';


export function SongPage() {

	const { data, error, isLoading } = useRequest("/query/search", "song");

	return (
		<>
		<Box 
			top={0}
			position='sticky'
			bgGradient={'linear-gradient(180deg, blue.500 0%, blue.100 100%)'}
			p={5}
			mb={2}
			zIndex={1}
		>
		<Text as='b' fontSize='4xl'>Todas Músicas</Text>
		</Box>
		<VStack alignItems='left'>
			{!isLoading && !error && data.map((item: any, index: any) => (
				<SongCard key={index+item['@key']} _key={item['@key']}/>
			))}
		</VStack>
		</>
	)
}
