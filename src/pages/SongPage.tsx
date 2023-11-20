import { Box, Text, VStack, useColorMode } from '@chakra-ui/react'
import { useRequest } from '../hooks/useRequest';
import { SongCard } from '../components/SongCard';


export function SongPage() {

	const { data, error, isLoading } = useRequest("/query/search", "song");
	const { colorMode } = useColorMode()

	return (
		<>
		<Box 
			top={0}
			position='sticky'
			bgGradient={
				colorMode === 'light'?
					'linear-gradient(180deg, blue.300 0%, blue.50 100%)':
					'linear-gradient(180deg, blackAlpha.500 0%, blackAlpha.50 500%)'
			}
			p={5}
			mb={2}
			zIndex={1}
		>
		<Text as='b' fontSize='4xl'>Todas Músicas</Text>
		</Box>
		<VStack alignItems='left'>
			{!isLoading && !error && data.map((item: any, index: any) => (
				<SongCard showDelete={false} key={index+item['@key']} _key={item['@key']}/>
			))}
		</VStack>
		</>
	)
}
